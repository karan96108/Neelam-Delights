
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-saffron-400/10 z-0" />
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 z-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
              Experience the <span className="text-primary">Finest Kashmiri Kesar</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Elevate your culinary experiences with our premium quality saffron, 
              hand-picked from the valleys of Kashmir.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="button-primary">
                Shop Now
              </Link>
              <Link to="/about" className="button-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-saffron-400 rounded-lg blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1560076649-950a9ef4a860?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Premium Kashmiri Kesar" 
                className="w-full h-auto rounded-lg shadow-lg relative"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Our saffron is carefully harvested and sorted to ensure only the finest threads make it to your kitchen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">100% Authentic</h3>
              <p className="text-gray-600">
                Direct from the valleys of Kashmir, we guarantee the authenticity and origin of our saffron.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">Secure Packaging</h3>
              <p className="text-gray-600">
                Our saffron is vacuum-sealed to preserve its aroma, flavor, and color until it reaches your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular selections of premium Kashmiri Kesar, carefully curated for your culinary adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="button-secondary inline-flex items-center">
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Read what our satisfied customers have to say about our premium Kashmiri Kesar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-1 mb-4 text-saffron-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The aroma and flavor of Neelam Delights' Kesar is unmatched. It has elevated my traditional recipes to a whole new level."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">Priya Sharma</h4>
                  <p className="text-gray-500 text-sm">Delhi, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-1 mb-4 text-saffron-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I've tried many saffron brands, but Neelam Delights stands out for its authenticity and richness. Truly the best in the market."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img src="https://i.pravatar.cc/150?img=2" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">Rajesh Patel</h4>
                  <p className="text-gray-500 text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-1 mb-4 text-saffron-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The packaging is impeccable, preserving the quality of the saffron. My family can taste the difference in our biryani!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img src="https://i.pravatar.cc/150?img=3" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">Aisha Khan</h4>
                  <p className="text-gray-500 text-sm">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-primary text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 animate-fade-up">Ready to Experience Premium Kashmiri Kesar?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Join thousands of satisfied customers who have elevated their culinary experiences with our premium quality saffron.
          </p>
          <Link to="/products" className="inline-block button-secondary bg-white text-primary animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
