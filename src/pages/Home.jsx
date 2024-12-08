import React, { createContext, useContext, useState } from "react";
import Hero from "../components/Home/Hero";
import ProductsSection from "../components/Home/ProductsSection";
import Categories from "../components/Home/Categories";
import InfoSection from "../components/Home/InfoSection";
import BlogsSection from "../components/Home/BlogsSection";
import { ThemeContext } from "../Root";

function Home() {
  let [isLight, setLight] = useContext(ThemeContext);
  console.log("light mode is ", isLight);

  return (
    <div className={`relative ${isLight || "bg-equi-primary-950"}`}>
      <input
        onChange={() => setLight(!isLight)}
        type="checkbox"
        className="toggle fixed top-20 right-10 z-10"
        defaultChecked
      />
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
