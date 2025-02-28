/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

interface OrderData {
  email: string;
  name: string;
  items: OrderItem[];
  total: number;
  shippingAddress: ShippingAddress;
}

const config = functions.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

export const sendOrderConfirmation = functions.firestore
  .document("orders/{orderId}")
  .onCreate(async (snap: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {
    const orderData = snap.data() as OrderData;
    const orderId = context.params.orderId;

    // Email to customer
    const customerMailOptions = {
      from: config.email.user,
      to: orderData.email,
      subject: `Order Confirmation #${orderId}`,
      html: `
        <h1>Thank you for your order!</h1>
        <p>Order ID: ${orderId}</p>
        <h2>Order Details:</h2>
        <ul>
          ${orderData.items.map((item) => `
            <li>${item.name} - Quantity: ${item.quantity} - Price: ₹${item.price}</li>
          `).join("")}
        </ul>
        <p>Total Amount: ₹${orderData.total}</p>
        <h2>Shipping Address:</h2>
        <p>${orderData.shippingAddress.street}</p>
        <p>${orderData.shippingAddress.city}, ${orderData.shippingAddress.state}</p>
        <p>${orderData.shippingAddress.pincode}</p>
      `,
    };

    // Email to admin
    const adminMailOptions = {
      from: config.email.user,
      to: config.email.admin,
      subject: `New Order Received #${orderId}`,
      html: `
        <h1>New Order Received</h1>
        <p>Order ID: ${orderId}</p>
        <h2>Customer Details:</h2>
        <p>Name: ${orderData.name}</p>
        <p>Email: ${orderData.email}</p>
        <h2>Order Details:</h2>
        <ul>
          ${orderData.items.map((item) => `
            <li>${item.name} - Quantity: ${item.quantity} - Price: ₹${item.price}</li>
          `).join("")}
        </ul>
        <p>Total Amount: ₹${orderData.total}</p>
        <h2>Shipping Address:</h2>
        <p>${orderData.shippingAddress.street}</p>
        <p>${orderData.shippingAddress.city}, ${orderData.shippingAddress.state}</p>
        <p>${orderData.shippingAddress.pincode}</p>
      `,
    };

    try {
      await Promise.all([
        transporter.sendMail(customerMailOptions),
        transporter.sendMail(adminMailOptions),
      ]);
      console.log(`Order confirmation emails sent for order ${orderId}`);
    } catch (error) {
      console.error("Error sending order confirmation emails:", error);
      throw new Error("Failed to send order confirmation emails");
    }
  });
