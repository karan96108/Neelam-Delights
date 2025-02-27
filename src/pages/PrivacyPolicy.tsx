
import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Privacy Policy</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <Shield className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Data Protection</h3>
          <p className="text-gray-600">Your personal information is secure with us</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <Lock className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Secure Transactions</h3>
          <p className="text-gray-600">All payment information is encrypted</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <Eye className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Transparency</h3>
          <p className="text-gray-600">Clear policies on how we use your data</p>
        </div>
      </div>
      
      <div className="space-y-8 prose max-w-none text-gray-700">
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Introduction</h2>
          <p>At Neelam Delights, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
          <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you register on our website, express interest in obtaining information about our products, or participate in activities on our website.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Contact information (such as name, email address, mailing address, and phone number)</li>
            <li>Billing information (such as credit card details and billing address)</li>
            <li>Account information (such as username and password)</li>
            <li>Profile information (such as shopping preferences and order history)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Device information (such as your IP address, browser type, and operating system)</li>
            <li>Usage information (such as pages visited, time spent on the site, and referring website)</li>
            <li>Location information (such as general geographic location based on IP address)</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">How We Use Your Information</h2>
          <p>We may use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To process and fulfill your orders</li>
            <li>To communicate with you about your orders, account, or inquiries</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To improve our website, products, and services</li>
            <li>To personalize your experience and deliver content relevant to your interests</li>
            <li>To protect against fraud and unauthorized transactions</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">How We Share Your Information</h2>
          <p>We may share your information with the following third parties:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Service Providers:</strong> Companies that help us operate our website, process payments, deliver orders, and provide customer service</li>
            <li><strong>Business Partners:</strong> Trusted companies with whom we collaborate to offer products or services</li>
            <li><strong>Legal Authorities:</strong> Government agencies or law enforcement when required by law</li>
          </ul>
          <p>We do not sell your personal information to third parties for monetary consideration.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Security of Your Information</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to restrict or object to our processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <address className="not-italic mt-4">
            <p>Neelam Delights</p>
            <p>Email: privacy@neelamdelights.com</p>
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

export default PrivacyPolicy;
