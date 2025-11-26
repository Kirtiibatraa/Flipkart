import { TrendingUp } from "lucide-react";

export default function Banner() {
  return (
    <div
      className="bg-linear-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-12 mt-2"
      style={{ margin: "10px", padding: "5px" }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Big Billion Days</h2>
        <p className="text-xl">
          Discounts up to 80% off on Electronics, Fashion & More!
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <TrendingUp size={24} />
          <span className="text-lg font-semibold">Trending Deals</span>
        </div>
      </div>
    </div>
  );
}
