
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
  origin: string;
  grade: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "kesar-premium-1g",
    name: "Premium Kashmiri Kesar",
    description: "Our finest grade of Kashmiri saffron, hand-picked and carefully selected for its exceptional aroma, flavor, and color. Perfect for special occasions and gourmet dishes.",
    price: 599,
    image: "https://images.unsplash.com/photo-1613549026666-73c9c9083c62?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weight: "1g",
    origin: "Kashmir, India",
    grade: "Premium",
    featured: true
  },
  {
    id: "kesar-standard-1g",
    name: "Standard Kashmiri Kesar",
    description: "High-quality Kashmiri saffron with excellent aroma and flavor. Ideal for everyday cooking and traditional recipes that call for authentic saffron.",
    price: 499,
    image: "https://images.unsplash.com/photo-1613549026674-2b6c58226395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weight: "1g",
    origin: "Kashmir, India",
    grade: "Standard",
    featured: false
  },
  {
    id: "kesar-premium-2g",
    name: "Premium Kashmiri Kesar",
    description: "Our finest grade of Kashmiri saffron in a larger quantity. Hand-picked and carefully selected for exceptional quality.",
    price: 1099,
    image: "https://images.unsplash.com/photo-1643471672168-f4a4b6cfa440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weight: "2g",
    origin: "Kashmir, India",
    grade: "Premium",
    featured: true
  },
  {
    id: "kesar-standard-2g",
    name: "Standard Kashmiri Kesar",
    description: "High-quality Kashmiri saffron in a larger quantity. Excellent for regular use in your gourmet dishes.",
    price: 899,
    image: "https://images.unsplash.com/photo-1615885108069-7d5bef9a7e22?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weight: "2g",
    origin: "Kashmir, India",
    grade: "Standard",
    featured: false
  },
  {
    id: "kesar-premium-5g",
    name: "Premium Kashmiri Kesar",
    description: "Our finest grade of Kashmiri saffron in a value pack. Perfect for restaurants and frequent users who demand the best quality.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1613343454178-62b877b1150d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weight: "5g",
    origin: "Kashmir, India",
    grade: "Premium",
    featured: false
  },
  {
    id: "kesar-standard-5g",
    name: "Standard Kashmiri Kesar",
    description: "High-quality Kashmiri saffron in a value pack. An economical choice for regular saffron users.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1613548058180-7737ef209505?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    weight: "5g",
    origin: "Kashmir, India",
    grade: "Standard",
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
