"use client";

import { ShoppingCart, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-center gap-5 bg-blue-600 min-h-14 text-white">
        <div className="max-w-7xl gap-5 mx-auto px-4 py-2 flex items-center justify-around">
          <div className="flex items-center space-x-8 gap-2">
            <div>
              <h1 className="text-xl font-bold italic cursor-pointer">
                Flipkart
              </h1>
              <h6 className="text-xs italic cursor-pointer">Explore Plus</h6>
            </div>
            <div className="relative flex items-center justify-center  bg-white min-w-sm min-h-8  ">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex items-center w-full px-4 py-2 rounded text-gray-800 focus:outline-none"
              />
              <Search
                className="absolute right-3 top-2.5 text-blue-600"
                size={20}
              />
            </div>
          </div>
          <div className="flex items-center space-x-6 gap-8">
            <button className="flex items-center space-x-1 bg-white text-blue-700 font-semibold w-20  h-7 px-3 py-2 justify-center">
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-1 hover:cursor-pointer py-2 rounded  font-semibold">
              <span>Become a Seller</span>
            </button>
            <button className="flex items-center space-x-1 hover:cursor-pointer py-2 rounded font-semibold">
              <span>More</span>
              <ChevronDown size={16} />
            </button>
            <button className="relative flex items-center space-x-1 hover:cursor-pointer py-2 rounded font-semibold">
              <ShoppingCart size={20} />
              <span className="font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
