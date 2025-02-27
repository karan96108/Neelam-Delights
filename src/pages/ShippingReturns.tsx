
import React from 'react';
import { Truck, Package, RotateCcw } from 'lucide-react';

const ShippingReturns = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Shipping & Returns</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <Truck className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Fast Shipping</h3>
          <p className="text-gray-600">Delivery within 3-5 business days across India</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <Package className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Secure Packaging</h3>
          <p className="text-gray-600">Premium airtight packaging to preserve freshness</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <RotateCcw className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Easy Returns</h3>
          <p className="text-gray-600">30-day return policy for unopened products</p>
        </div>
      </div>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4">Shipping Policy</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-3">At Neelam Delights, we strive to deliver your premium saffron products as quickly as possible while ensuring the quality and freshness of our products.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Processing Time</h3>
            <p className="mb-3">All orders are processed within 1-2 business days after payment confirmation. If we are experiencing high volume periods, processing may take up to 3 business days.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Shipping Methods and Timeframes</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Standard Shipping:</strong> 3-5 business days (₹100 for orders under ₹1000, free for orders above ₹1000)</li>
              <li><strong>Express Shipping:</strong> 1-2 business days (₹250 flat rate)</li>
              <li><strong>International Shipping:</strong> 7-14 business days (rates vary by country)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Shipping Restrictions</h3>
            <p className="mb-3">We currently ship to all states in India. International shipping is available to select countries. Please note that some remote areas might experience additional delays.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Tracking Information</h3>
            <p className="mb-3">Once your order has been shipped, you will receive a confirmation email with tracking information. You can track your package using the provided tracking number.</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4">Return Policy</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-3">We want you to be completely satisfied with your purchase. If you are not entirely happy with your order, we're here to help.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Return Eligibility</h3>
            <p className="mb-3">You may return most new, unopened items within 30 days of delivery for a full refund. We also accept returns of opened items if the product is defective or damaged upon arrival.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Non-Returnable Items</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Items that have been opened or used, unless defective</li>
              <li>Gift cards</li>
              <li>Downloadable products</li>
              <li>Custom or personalized orders</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Return Process</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Contact our customer service team at returns@neelamdelights.com to initiate a return</li>
              <li>You will receive return instructions and a return authorization number</li>
              <li>Package the item securely with all original packaging</li>
              <li>Ship the item back to the address provided</li>
              <li>Once received and inspected, we will process your refund</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Refunds</h3>
            <p className="mb-3">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 7-10 business days.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Return Shipping Costs</h3>
            <p className="mb-3">The customer is responsible for return shipping costs unless the return is due to our error (you received an incorrect or defective item). In such cases, we will provide a prepaid shipping label.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
            <p className="mb-3">If you have any questions about our shipping or return policies, please contact our customer service team at support@neelamdelights.com or call us at +91 9876543210.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingReturns;
