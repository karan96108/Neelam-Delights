
import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, CreditCardIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PaymentSectionProps {
  onPaymentComplete: () => void;
  total: number;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onPaymentComplete, total }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const formatCardNumber = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 16 digits
    const trimmed = digits.slice(0, 16);
    
    // Add spaces after every 4 digits
    const formatted = trimmed.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    return formatted;
  };
  
  const formatExpiry = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    } else {
      return digits;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(formatExpiry(e.target.value));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and limit to 3 or 4 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCvv(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: "Payment successful",
        description: "Your order has been placed successfully!",
      });
      
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-serif font-semibold mb-6">Payment Information</h2>
      
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
        <div>
          <p className="text-gray-700">Order Total:</p>
          <p className="text-2xl font-semibold">₹{total.toFixed(2)}</p>
        </div>
        <div className="flex items-center text-green-600">
          <CheckCircle2 size={18} className="mr-1" />
          <span className="text-sm">Secure Checkout</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
            onClick={() => setPaymentMethod('card')}
          >
            <CreditCard size={24} className={`mb-2 ${paymentMethod === 'card' ? 'text-primary' : 'text-gray-500'}`} />
            <span className={`text-sm ${paymentMethod === 'card' ? 'text-primary font-medium' : 'text-gray-600'}`}>Card</span>
          </button>
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors ${paymentMethod === 'upi' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mb-2 ${paymentMethod === 'upi' ? 'text-primary' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className={`text-sm ${paymentMethod === 'upi' ? 'text-primary font-medium' : 'text-gray-600'}`}>UPI</span>
          </button>
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
            onClick={() => setPaymentMethod('cod')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mb-2 ${paymentMethod === 'cod' ? 'text-primary' : 'text-gray-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <circle cx="12" cy="12" r="4" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
            <span className={`text-sm ${paymentMethod === 'cod' ? 'text-primary font-medium' : 'text-gray-600'}`}>Cash on Delivery</span>
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <div className="relative">
                <input
                  id="card-number"
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
              <input
                id="card-name"
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                <input
                  id="expiry"
                  type="text"
                  value={expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <input
                  id="cvv"
                  type="password"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>
        )}
        
        {paymentMethod === 'upi' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
              <input
                id="upi-id"
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="name@upi"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div className="flex flex-wrap gap-3 my-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" alt="PhonePe" className="h-6" />
            </div>
          </div>
        )}
        
        {paymentMethod === 'cod' && (
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
            <div className="flex items-start">
              <div className="mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700">Pay with cash when your order is delivered. Our delivery agent will carry a POS machine if you wish to pay by card at the time of delivery.</p>
                <p className="mt-2 text-sm text-gray-500">Note: A nominal fee of ₹50 will be added for Cash on Delivery orders.</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 space-y-4">
          <div className="flex items-center bg-gray-50 p-4 rounded-md border border-gray-200">
            <ShieldCheck className="h-5 w-5 text-green-600 mr-3" />
            <p className="text-sm text-gray-600">Your payment information is secure and encrypted. We do not store your card details.</p>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>Pay ₹{total.toFixed(2)}</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentSection;
