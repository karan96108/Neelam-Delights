
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-saffron-400 text-white text-xs px-2 py-1 rounded-md">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif font-semibold hover:text-primary transition-colors">
              {product.name} - {product.weight}
            </h3>
          </Link>
          <span className="font-semibold text-lg">₹{product.price}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm">
          <span className="inline-block px-2 py-1 bg-gray-100 rounded-md mr-2">{product.grade}</span>
          <span>{product.origin}</span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
        
        <div className="flex space-x-2 pt-2">
          <Link 
            to={`/product/${product.id}`} 
            className="flex-1 button-secondary text-center text-sm py-2"
          >
            View Details
          </Link>
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
