import React from "react";

// Re-using the Product interface for consistency
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
  brand?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calculate the final price based on the discount
  const finalPrice = product.originalPrice * (1 - product.discount / 100);

  return (
    // Card Container: Clean look, shadow on hover
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100 flex flex-col justify-between  ">
      {/* 1. Image and Name */}
      <div className="grow">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-3">
          <img
            src={product.image}
            alt={product.name}
            // Use 'object-contain' to ensure the whole image fits without cropping
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <p className="text-xs text-gray-500 uppercase font-medium ml-2.5">
          {product.brand}
        </p>
        <h3 className="text-base font-medium text-gray-800 line-clamp-2 mb-1">
          {product.name}
        </h3>
      </div>

      {/* 2. Rating & Reviews */}
      <div className="flex items-center text-sm my-1">
        <span className="bg-green-600 text-white px-2 py-0.5 rounded-sm mr-2 flex items-center font-semibold">
          {product.rating.toFixed(1)} ★
        </span>
        <span className="text-gray-500">
          ({product.reviews.toLocaleString()})
        </span>
      </div>

      {/* 3. Pricing */}
      <div className="flex items-baseline mt-2">
        {/* Discounted Price (Large & Bold) */}
        <span className="text-xl font-bold text-gray-900">
          ₹{finalPrice.toFixed(0).toLocaleString()}
        </span>
        {/* Original Price (Struck-through) */}
        <span className="text-sm text-gray-500 line-through ml-2">
          ₹{product.originalPrice.toLocaleString()}
        </span>
      </div>

      {/* Discount Percentage */}
      <div className="mt-1">
        <span className="text-sm text-green-700 font-semibold">
          {product.discount}% Off
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
