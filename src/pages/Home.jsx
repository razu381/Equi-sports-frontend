import React from "react";
import Hero from "../components/Home/Hero";
import ProductsSection from "../components/Home/ProductsSection";
import Categories from "../components/Home/Categories";

function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1140px] mx-auto">
        <ProductsSection />
        <Categories />
      </div>
    </div>
  );
}

export default Home;
