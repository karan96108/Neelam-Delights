
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="flex items-center justify-between w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif font-semibold text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-gray-500" size={20} />
        ) : (
          <ChevronDown className="flex-shrink-0 text-gray-500" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqItems = [
    {
      question: "What makes Neelam Delights saffron special?",
      answer: "Neelam Delights sources premium-grade saffron directly from the finest fields in Kashmir. Our saffron is harvested by hand, carefully processed to preserve its flavor, aroma, and medicinal properties, and tested for quality before packaging. We follow traditional methods combined with modern quality control to ensure you receive the purest saffron available."
    },
    {
      question: "How should I store saffron?",
      answer: "Saffron should be stored in an airtight container in a cool, dark place. Keep it away from direct sunlight, moisture, and heat. Properly stored, saffron can maintain its potency for up to two years. Our premium packaging is designed to protect saffron from light and moisture, but once opened, transfer to an airtight container for best results."
    },
    {
      question: "How do I use saffron in cooking?",
      answer: "For best results, soak saffron threads in warm (not boiling) water, milk, or broth for 10-20 minutes before adding to your recipe. This releases the flavor, aroma, and color. The liquid can then be added to your dish. A little goes a long way—typically just a pinch (about 10-20 threads) is enough for a dish serving 4-6 people."
    },
    {
      question: "How can I tell if saffron is authentic?",
      answer: "Authentic saffron has deep red threads with orange tips, a distinct honey-like aroma, and a slightly bitter taste. When soaked in warm water, it releases a golden-yellow color slowly (not immediately). If saffron colors water instantly or has a perfect uniform color, it may be fake. Neelam Delights provides certificates of authenticity and conducts rigorous testing to ensure our saffron meets the highest standards."
    },
    {
      question: "What are the grades of saffron you offer?",
      answer: "We offer three grades of saffron: Premium (Super Negin), Superior (Negin), and Standard (Mongra). Premium grade consists of only the red stigma tips, Superior includes most of the stigma, and Standard contains both stigmas and some yellow style parts. All grades are 100% pure, but differ in their concentration of flavor, aroma, and color."
    },
    {
      question: "What are the health benefits of saffron?",
      answer: "Saffron is rich in antioxidants and has been traditionally used for its numerous health benefits. Research suggests it may help improve mood, reduce symptoms of depression, aid digestion, enhance memory, and have anti-inflammatory properties. It's also been studied for potential benefits in eye health and as an aphrodisiac. However, we recommend consulting with a healthcare professional for medical advice."
    },
    {
      question: "How much saffron should I buy?",
      answer: "A little saffron goes a long way. For home cooking, 1 gram (about 1/2 teaspoon) can flavor 10-20 dishes, depending on the recipe. If you cook with saffron occasionally, 1-2 grams might last several months. For frequent users or special occasions, 5 grams offers better value. Our saffron is sold in various sizes to suit different needs and usage levels."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select countries internationally. Shipping times and costs vary depending on destination. Please note that customers are responsible for any customs fees or import duties that may apply. See our Shipping & Returns page for more details on international shipping policies and estimated delivery times."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, UPI, and net banking for domestic orders. All transactions are securely processed with industry-standard encryption to protect your financial information."
    },
    {
      question: "Can I return my order if I'm not satisfied?",
      answer: "We stand behind the quality of our products. If you're not completely satisfied with your purchase, you may return unopened items within 30 days of delivery for a full refund. Please see our Shipping & Returns page for detailed information on our return process and policies."
    }
  ];
  
  const filteredFAQs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Frequently Asked Questions</h1>
      
      <div className="mb-10 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our premium saffron products, ordering process, shipping, and more. 
          Can't find what you're looking for? Contact us directly.
        </p>
      </div>
      
      <div className="relative max-w-2xl mx-auto mb-10">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search questions or keywords..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <HelpCircle className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Product Questions</h3>
          <p className="text-gray-600">Learn about our premium saffron</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <HelpCircle className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Ordering & Shipping</h3>
          <p className="text-gray-600">Details about orders and delivery</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
          <HelpCircle className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="font-serif font-semibold text-lg mb-2">Usage & Storage</h3>
          <p className="text-gray-600">How to use and store saffron</p>
        </div>
      </div>
      
      <div className="space-y-2">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No results found. Please try a different search term.</p>
          </div>
        )}
      </div>
      
      <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-serif font-semibold mb-3">Still have questions?</h3>
        <p className="text-gray-600 mb-4">We're here to help with any questions you might have</p>
        <a href="/contact" className="button-primary inline-block px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FAQ;
