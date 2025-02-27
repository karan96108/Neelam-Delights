
import React from 'react';
import { FileText, ShieldCheck, Scale } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Terms & Conditions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <FileText className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Legal Agreement</h3>
          <p className="text-gray-600">Formal contract between you and Neelam Delights</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <ShieldCheck className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Your Protection</h3>
          <p className="text-gray-600">Clear guidelines on usage and responsibilities</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <Scale className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Fair Practices</h3>
          <p className="text-gray-600">Balanced terms for both parties</p>
        </div>
      </div>
      
      <div className="space-y-8 prose max-w-none text-gray-700">
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Agreement to Terms</h2>
          <p>By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access our website or use our services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Intellectual Property Rights</h2>
          <p>Unless otherwise stated, Neelam Delights and/or its licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved.</p>
          <p>You may view and/or print pages from the website for your own personal use, subject to restrictions set in these Terms and Conditions.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">You must not:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Republish material from our website</li>
            <li>Sell, rent, or sub-license material from our website</li>
            <li>Reproduce, duplicate, or copy material from our website</li>
            <li>Redistribute content from our website (unless content is specifically made for redistribution)</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">User Account</h2>
          <p>If you create an account on our website, you are responsible for maintaining the security of your account and for all activities that occur under your account. You must immediately notify Neelam Delights of any unauthorized uses of your account or any other breaches of security.</p>
          <p>Neelam Delights reserves the right to terminate accounts, edit or remove content, and cancel orders at our sole discretion.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Product Information and Pricing</h2>
          <p>We strive to provide accurate product information and pricing. However, pricing and availability information is subject to change without notice. Neelam Delights reserves the right to refuse or cancel any orders placed for products listed at an incorrect price.</p>
          <p>Product images are for illustrative purposes only and may vary from the actual product due to factors such as display settings and lighting conditions.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Order Acceptance and Fulfillment</h2>
          <p>Your receipt of an electronic or other form of order confirmation does not signify our acceptance of your order, nor does it constitute confirmation of our offer to sell. Neelam Delights reserves the right at any time after receipt of your order to accept or decline your order for any reason.</p>
          <p>We reserve the right to limit the quantity of items purchased per person, per household, or per order for any reason. These restrictions may apply to orders placed by the same account, the same credit card, and also to orders that use the same billing and/or shipping address.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Payment Terms</h2>
          <p>We accept payment through various methods as indicated on our website. Payment must be received in full before we fulfill your order. By providing payment information, you represent and warrant that you have the legal right to use any payment method utilized.</p>
          <p>All prices are in Indian Rupees (₹) unless otherwise specified. Prices are inclusive of applicable taxes unless otherwise stated.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Shipping and Delivery</h2>
          <p>Delivery times are estimates only and commence from the date of shipping, not the date of order. Neelam Delights is not responsible for delays beyond our control, including but not limited to, acts of God, weather conditions, customs delays, or labor disputes.</p>
          <p>Risk of loss and title for items purchased pass to you upon delivery of the items to the shipping carrier.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Limitation of Liability</h2>
          <p>In no event shall Neelam Delights, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your access to or use of or inability to access or use the website or services</li>
            <li>Any conduct or content of any third party on the website</li>
            <li>Any content obtained from the website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          <p>Any disputes relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. It is your responsibility to check our website periodically for changes.</p>
          <p>Your continued use of our website following the posting of revised Terms means that you accept and agree to the changes.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <address className="not-italic mt-4">
            <p>Neelam Delights</p>
            <p>Email: legal@neelamdelights.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: 123 Saffron Lane, Mumbai, Maharashtra 400001, India</p>
          </address>
        </section>
        
        <section>
          <p className="text-sm text-gray-500 mt-10">Last Updated: June 15, 2023</p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
