"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  ArrowLeft,
  Tag,
} from "lucide-react";

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  reviews: { rating: number; comment: string; reviewerName?: string }[];
  thumbnail: string;
  images?: string[];
  category: string;
  brand?: string;
  description?: string;
  stock?: number;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (productId) fetchProductDetails(productId);
  }, [productId]);

  const fetchProductDetails = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin h-16 w-16 border-t-4 border-blue-600 rounded-full"></div>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Failed to load!
      </div>
    );

  const images = product.images || [product.thumbnail];
  const discountedPrice = Math.round(
    product.price * (1 - product.discountPercentage / 100)
  );

  return (
    <div className=" min-h-screen">
      <div className="bg-white   border-1 border-gray-100 sticky top-0 z-20 p-3 lg:hidden">
        <button onClick={() => router.back()} className="flex items-center">
          <ArrowLeft size={22} className="text-blue-600" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div
          className="
    lg:col-span-4 
    bg-white p-4 rounded-md border border-gray-100
    lg:sticky lg:top-0 
  "
        >
          <div className="flex space-x-2 overflow-x-auto mb-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`border rounded-lg p-1 ${
                  selectedImage === i ? "border-blue-600" : "border-gray-300"
                }`}
              >
                <img src={img} className="w-16 h-16 object-contain" />
              </button>
            ))}
          </div>

          <div className="relative">
            <img
              src={images[selectedImage]}
              className="w-full h-[380px] object-contain"
            />

            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md"
            >
              <Heart
                size={22}
                className={
                  isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"
                }
              />
            </button>
          </div>

          <div className="mt-6 space-y-3 flex gap-3">
            <button className="w-full h-14 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xs flex items-center justify-center space-x-2">
              <ShoppingCart size={20} />
              <span>ADD TO CART</span>
            </button>

            <button className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xs">
              BUY NOW
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white p-6 rounded-md  border-1 border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="flex items-center space-x-3 mt-2">
              <div className="bg-green-600 text-white px-1 h-5 text-xs rounded flex items-center">
                <span className="font-semibold">{product.rating}</span>
                <Star size={12} className="ml-1 fill-white" />
              </div>
              <p className="text-gray-600 text-sm">
                {product.reviews.length} Ratings & {product.reviews.length}{" "}
                Reviews
              </p>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">
                  ₹{discountedPrice.toLocaleString()}
                </span>
                <span className="line-through text-gray-500 text-xl">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-green-600 font-semibold text-xl">
                  {product.discountPercentage}% off
                </span>
              </div>

              <p className="text-green-700 text-sm mt-2 flex items-center gap-1">
                <Tag size={16} /> Bank Offer available
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md  border-1 border-gray-100">
            <h2 className="font-bold text-lg mb-4">Delivery</h2>

            <div className="flex items-center space-x-3">
              <Truck size={22} className="text-blue-600" />
              <div>
                <p className="font-medium">Free delivery within 3–5 days</p>
                <p className="text-sm text-gray-600">
                  Cash on Delivery available
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md  border-1 border-gray-100">
            <h2 className="font-bold text-lg mb-3">Product Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-md  border-1 border-gray-100">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            {product.reviews.slice(0, 5).map((r, i) => (
              <div key={i} className="border-b border-gray-400 pb-3 mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                    {r.rating} ★
                  </div>
                  <span className="font-medium">
                    {r.reviewerName || "User"}
                  </span>
                </div>
                <p className="text-gray-700 mt-1">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
