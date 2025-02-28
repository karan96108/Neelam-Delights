import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import PaymentSection from '@/components/PaymentSection';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("Co4fwBOIYegJ9kX_O");

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  
  // Shipping cost calculation
  const shippingCost = totalPrice > 1000 ? 0 : 100;
  const orderTotal = totalPrice + shippingCost;
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
    window.scrollTo(0, 0);
  };
  
  const handlePaymentComplete = async () => {
    try {
      if (!user) {
        throw new Error("Please log in to complete your order");
      }

      // Create order document in Firestore
      const orderData = {
        items: items.map(item => ({
          name: item.product.name,
          quantity: item.quantity,
          price: item.product.price
        })),
        totalPrice: orderTotal,
        shippingInfo,
        orderDate: new Date().toISOString(),
        userId: user.uid,
        status: 'pending',
        paymentStatus: 'pending'
      };

      // First create the order in Firestore
      const orderRef = await addDoc(collection(db, 'orders'), orderData);
      const orderId = orderRef.id;

      // Then try to send emails
      let emailError = null;
      try {
        // Send customer confirmation email
        console.log('Attempting to send customer email with details:', {
          serviceId: "service_szk4naq",
          templateId: "template_ak5o9dt",
          email: shippingInfo.email,
          name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
          orderId: orderId
        });
        
        const customerEmailResult = await emailjs.send(
          "service_szk4naq",
          "template_ak5o9dt",
          {
            to_email: shippingInfo.email,
            to_name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
            order_id: orderId,
            order_items: items.map(item => `${item.product.name} (${item.quantity}x) - ₹${item.product.price}`).join(", "),
            total_amount: orderTotal,
            shipping_address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} - ${shippingInfo.pincode}`,
          }
        );
        console.log('Customer email sent successfully:', customerEmailResult);

        // Send admin notification email
        console.log('Attempting to send admin email with details:', {
          serviceId: "service_szk4naq",
          templateId: "template_n7sga9r",
          orderId: orderId
        });
        
        const adminEmailResult = await emailjs.send(
          "service_szk4naq",
          "template_n7sga9r",
          {
            order_id: orderId,
            customer_name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
            customer_email: shippingInfo.email,
            customer_phone: shippingInfo.phone,
            order_items: items.map(item => `${item.product.name} (${item.quantity}x) - ₹${item.product.price}`).join(", "),
            total_amount: orderTotal,
            shipping_address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} - ${shippingInfo.pincode}`,
          }
        );
        console.log('Admin email sent successfully:', adminEmailResult);
      } catch (error) {
        console.error('Error sending emails:', error);
        if (error instanceof Error) {
          console.error('Detailed error information:', {
            message: error.message,
            name: error.name,
            stack: error.stack,
            serviceId: "service_szk4naq",
            customerTemplateId: "template_ak5o9dt",
            adminTemplateId: "template_n7sga9r"
          });
        }
        emailError = error;
      }

      // Proceed with order completion regardless of email status
      setCurrentStep('confirmation');
      clearCart();
      window.scrollTo(0, 0);

      // Show appropriate toast message
      if (emailError) {
        toast({
          title: "Order Placed Successfully",
          description: `Your order #${orderId} has been placed, but there was an issue sending confirmation emails. Please save your order number for reference.`,
          variant: "default"
        });
      } else {
        toast({
          title: "Order Placed Successfully",
          description: "Your order has been placed and confirmation emails have been sent.",
          variant: "default"
        });
      }

    } catch (error) {
      console.error('Error processing order:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to process your order. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  const handleConfirmation = () => {
    navigate('/');
    toast({
      title: "Order completed",
      description: "Thank you for shopping with us! You will receive an email confirmation shortly.",
    });
  };
  
  if (items.length === 0 && currentStep !== 'confirmation') {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-serif font-bold mb-6">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some products to your cart to proceed with checkout.</p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-serif font-bold">Checkout</h1>
          <div className="hidden md:flex items-center">
            <div className={`flex items-center ${currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'confirmation' ? 'text-primary' : 'text-gray-400'}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-current">
                1
              </div>
              <span className="ml-2 font-medium">Shipping</span>
            </div>
            <ChevronRight className="mx-4 text-gray-300" />
            <div className={`flex items-center ${currentStep === 'payment' || currentStep === 'confirmation' ? 'text-primary' : 'text-gray-400'}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-current">
                2
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
            <ChevronRight className="mx-4 text-gray-300" />
            <div className={`flex items-center ${currentStep === 'confirmation' ? 'text-primary' : 'text-gray-400'}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-current">
                3
              </div>
              <span className="ml-2 font-medium">Confirmation</span>
            </div>
          </div>
        </div>
      </div>
      
      {currentStep === 'shipping' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-serif font-semibold mb-6">Shipping Information</h2>
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      id="state"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={shippingInfo.pincode}
                      onChange={(e) => setShippingInfo({...shippingInfo, pincode: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-xl font-serif font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded overflow-hidden border border-gray-200 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-2 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="space-y-2 pt-2 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-medium">₹{orderTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Complete Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentStep === 'payment' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PaymentSection onPaymentComplete={handlePaymentComplete} total={orderTotal} />
            
            <div className="mt-4">
              <button
                onClick={() => setCurrentStep('shipping')}
                className="text-primary hover:text-primary/80 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Shipping
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-xl font-serif font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded overflow-hidden border border-gray-200 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-2 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold">₹{orderTotal.toFixed(2)}</span>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex">
                  <div className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Shipping to:</p>
                    <p className="text-sm font-medium">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p className="text-sm">{shippingInfo.address}, {shippingInfo.city}</p>
                    <p className="text-sm">{shippingInfo.state} - {shippingInfo.pincode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentStep === 'confirmation' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-serif font-semibold mb-6">Order Confirmation</h2>
              <p className="text-gray-600 mb-8">Thank you for your order! We'll send you an email with your order details shortly.</p>
              <button
                onClick={handleConfirmation}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-xl font-serif font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded overflow-hidden border border-gray-200 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 pt-2 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="space-y-2 pt-2 pb-4 border-b border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-medium">₹{orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;