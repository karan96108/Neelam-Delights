
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

const Products: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products when filter changes
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.grade.toLowerCase() === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4 animate-fade-up">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Explore our range of premium Kashmiri Kesar, carefully harvested and processed to bring you the finest quality saffron.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('premium')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'premium'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-200`}
            >
              Premium
            </button>
            <button
              onClick={() => setFilter('standard')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                filter === 'standard'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-200`}
            >
              Standard
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${0.1 * (index % 3) + 0.3}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty state if no products match the filter */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-600">No products found matching your filter.</h3>
            <button 
              onClick={() => setFilter('all')} 
              className="mt-4 button-secondary"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
