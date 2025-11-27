import Link from "next/link";
import React from "react";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const finalPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <Link href={`/products/${product._id}`} passHref>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100 flex flex-col justify-between p-2">
        <div className="grow">
          <div className="h-40 sm:h-48 flex items-center justify-center mb-3">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <p className="text-xs text-gray-500 uppercase font-medium mb-1 h-3.5">
            {product.brand ? product.brand : "\u00A0"}
          </p>

          <h3 className="text-base font-medium text-gray-800 line-clamp-2 mb-1 flex whitespace-nowrap">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center text-sm my-1">
          <span className="bg-green-600 text-white px-2 py-0.5 rounded-sm mr-2 flex items-center font-semibold">
            {product.rating.toFixed(1)} ★
          </span>

          <span className="text-gray-500">({product.reviews.length})</span>
        </div>

        <div className="flex items-baseline mt-2">
          <span className="text-xl font-bold text-gray-900">
            ₹{Math.round(finalPrice).toLocaleString()}
          </span>

          <span className="text-sm text-gray-500 line-through ml-2">
            ₹{product.price.toLocaleString()}
          </span>
        </div>

        <div className="mt-1">
          <span className="text-sm text-green-700 font-semibold">
            {product.discountPercentage}% Off
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
