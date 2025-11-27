"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  reviews: { rating: number; comment: string }[];
  thumbnail: string;
  category: string;
  brand?: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <main className=" mx-3  py-8 ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Top Deals ({products.length})</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
