import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "../Spinner";

function ProductsSection() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://equisports-backend.vercel.app/equipments/for-home")
      .then((res) => res.json())
      .then((productData) => {
        setProducts(productData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="pt-6 pb-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-black sm:text-3xl">
            Product Collection
          </h2>

          <p className="mx-auto mt-4 max-w-lg">
            Discover our newest arrivals in sports gear and equipment, crafted
            to meet the highest standards of quality and performance. Whether
            you're a seasoned athlete or just starting your fitness journey.
          </p>
        </header>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-8 justify-center items-center">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
