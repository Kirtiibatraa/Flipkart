"use client";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Categories />
      <Banner />
      <ProductGrid />
    </div>
  );
}
