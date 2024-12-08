import React from "react";
import Hero from "../components/Home/Hero";
import ProductsSection from "../components/Home/ProductsSection";
import Categories from "../components/Home/Categories";
import InfoSection from "../components/Home/InfoSection";
import BlogsSection from "../components/Home/BlogsSection";

function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1140px] mx-auto">
        <ProductsSection />
        <Categories />
        <InfoSection />
        <BlogsSection />
      </div>
    </div>
  );
}

export default Home;
