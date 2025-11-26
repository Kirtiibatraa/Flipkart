"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description?: string;
  brand?: string;
  stock?: number;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from your API endpoint
    const fetchProducts = async () => {
      try {
        console.log("calling api");
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        console.log("api called", data);
        setLoading(false);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 animate-pulse"
            >
              <div className="bg-gray-300 h-48 rounded mb-4"></div>
              <div className="bg-gray-300 h-4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">
        No products found.
      </div>
    );
  }
  return (
    <main
      className="max-w-7xl mx-auto px-4 py-8 "
      style={{ margin: "10px", padding: "5px" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Top Deals ({products.length})</h2>
        <div className="flex items-center space-x-4 gap-2">
          <span className="text-gray-600">Sort by :</span>
          <select className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {/* 💡 3. Map over the state and render the card component */}
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
