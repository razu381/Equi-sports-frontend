import React, { createContext, useState } from "react";
import Hero from "../components/Home/Hero";
import ProductsSection from "../components/Home/ProductsSection";
import Categories from "../components/Home/Categories";
import InfoSection from "../components/Home/InfoSection";
import BlogsSection from "../components/Home/BlogsSection";

export let ThemeContext = createContext();
function Home() {
  let [isLight, setLight] = useState(true);

  let themeInfo = {
    isLight,
    setLight,
  };

  console.log("light mode is ", isLight);
  return (
    <ThemeContext.Provider value={themeInfo}>
      <div className="relative">
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
    </ThemeContext.Provider>
  );
}

export default Home;
