"use client";

import { ShoppingCart, Search, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="flex justify-center gap-5 bg-blue-600 min-h-14 text-white">
        <div className="max-w-7xl gap-2 md:gap-5 py-2 flex items-center md:justify-around">
          <div className="flex items-center  gap-2">
            <div>
              <h1 className="text-xl font-bold italic cursor-pointer">
                Flipkart
              </h1>
              <h6 className="text-xs italic cursor-pointer font-semibold">
                Explore <span className="text-yellow-500">Plus</span>
              </h6>
            </div>
            <div className="relative flex items-center justify-center bg-white md:min-w-sm h-7 md:min-h-8">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none"
              />
              {searchTerm.length === 0 && (
                <>
                  {" "}
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none md:hidden">
                    Search for products
                  </span>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none hidden md:inline">
                    Search for products, brands and more
                  </span>
                </>
              )}
              <Search className="absolute right-3  text-blue-600" size={20} />
            </div>
          </div>
          <div className="hidden md:flex items-center  gap-2 md:gap-8 ">
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
          <button className="md:hidden" onClick={() => setIsDrawerOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg z-50 transform transition-transform duration-300 
        ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsDrawerOpen(false)}>X</button>
        </div>

        <ul className="p-4 space-y-4 text-lg">
          <li className="cursor-pointer bg-blue-600 text-white py-2 px-3 rounded">
            Login
          </li>

          <li className="cursor-pointer py-2 px-3 hover:bg-gray-100 rounded">
            Become a Seller
          </li>

          <li className="cursor-pointer py-2 px-3 hover:bg-gray-100 rounded flex items-center">
            More <ChevronDown className="ml-2" />
          </li>

          <li className="cursor-pointer py-2 px-3 hover:bg-gray-100 rounded flex items-center">
            <ShoppingCart className="mr-2" /> Cart
            {cartCount > 0 && (
              <span className="ml-auto bg-red-500 text-white text-xs p-1 rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
