import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

export default function FlipkartCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Big Billion Days",
      subtitle: "Discounts up to 80% off on Electronics, Fashion & More!",
      gradient: "from-yellow-400 via-red-500 to-pink-500",
    },
    {
      title: "Fashion Sale",
      subtitle: "Trending Styles at Unbeatable Prices - Up to 70% Off!",
      gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      title: "Electronics Fest",
      subtitle: "Latest Gadgets & Tech at Massive Discounts!",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      title: "Home & Living",
      subtitle: "Transform Your Space - Up to 60% Off on Home Essentials!",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-3">
      <div className="relative h-64 md:h-80">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`bg-gradient-to-r ${slide.gradient} text-white h-full flex items-center justify-center`}
            >
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-4">{slide.subtitle}</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <TrendingUp size={24} />
                  <span className="text-lg font-semibold">Trending Deals</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
