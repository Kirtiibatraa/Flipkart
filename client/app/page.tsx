"use client";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 mt-20 px-20">
      <Header />
      <Categories />
      <Banner />
      <ProductGrid />
    </div>
  );
}
