
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-4 animate-fade-up">About Neelam Delights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Bringing the finest Kashmiri Kesar to your kitchen since 2005
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-serif font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Neelam Delights was founded in 2005 by the Sharma family with a simple mission: to bring the authentic taste and aroma of Kashmiri saffron to households across India and beyond.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small family business has now grown into a trusted name in premium saffron supply. Our journey began when Vikram Sharma, our founder, realized the difficulty in finding authentic, high-quality saffron in the market.
              </p>
              <p className="text-gray-600">
                With deep roots in Kashmir and a passion for preserving the tradition of saffron cultivation, we established direct relationships with local farmers in the Kashmir valley to ensure the highest quality and ethical sourcing of our saffron.
              </p>
            </div>
            <div className="order-1 md:order-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-saffron-400 rounded-lg blur opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560076649-950a9ef4a860?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="About Neelam Delights" 
                  className="rounded-lg shadow-lg relative w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-gray-50 rounded-xl mb-20">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4 animate-fade-up">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              To deliver the highest quality Kashmiri saffron while supporting local farmers and preserving traditional cultivation methods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Quality</h3>
                <p className="text-gray-600">
                  We are committed to providing only the highest grade of Kashmiri saffron, carefully selected and processed to preserve its unique properties.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We support sustainable farming practices and fair compensation for farmers, ensuring the future of saffron cultivation in Kashmir.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in giving back to the community and supporting the families that have been cultivating saffron for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center animate-fade-up">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-saffron-400 rounded-lg blur opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1615472910606-9d4f7291944f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Saffron Harvesting" 
                  className="rounded-lg shadow-lg relative w-full"
                />
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-serif font-medium mb-4">1. Harvesting</h3>
              <p className="text-gray-600 mb-4">
                Saffron flowers are delicately handpicked during the early morning hours in autumn when the flowers are still closed to preserve their fragrance and properties.
              </p>
              <p className="text-gray-600">
                The flowering period lasts for about 3 weeks, and each flower must be picked at precisely the right time to ensure optimal quality.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-serif font-medium mb-4">2. Extraction</h3>
              <p className="text-gray-600 mb-4">
                The three red stigmas of each flower are carefully separated from the rest of the flower by skilled workers, a meticulous process that requires precision and expertise.
              </p>
              <p className="text-gray-600">
                It takes approximately 150,000 flowers to produce just 1 kilogram of saffron, making it the world's most expensive spice.
              </p>
            </div>
            <div className="order-1 md:order-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-saffron-400 rounded-lg blur opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1613547085761-71daacfe608f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Saffron Extraction" 
                  className="rounded-lg shadow-lg relative w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-saffron-400 rounded-lg blur opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1646999415436-fa7fa11cb8c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Saffron Drying" 
                  className="rounded-lg shadow-lg relative w-full"
                />
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-serif font-medium mb-4">3. Drying & Packaging</h3>
              <p className="text-gray-600 mb-4">
                The stigmas are gently dried in the shade to preserve their color, flavor, and medicinal properties. This traditional drying method has been perfected over generations.
              </p>
              <p className="text-gray-600">
                Once dried, the saffron is graded based on its quality and carefully packaged in airtight containers to maintain its freshness until it reaches your kitchen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-12 rounded-xl text-center animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-3xl font-serif font-semibold mb-4">Experience the Difference</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Elevate your culinary creations with our premium Kashmiri Kesar. Taste the quality difference that comes from our commitment to excellence.
          </p>
          <Link to="/products" className="button-secondary bg-white text-primary">
            Shop Our Products
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
