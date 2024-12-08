import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";

function Categories() {
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://equisports-backend.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="my-10 px-5 lg:px-10">
      <h2 className="text-xl font-bold text-black sm:text-3xl text-center ">
        Product Categories
      </h2>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 py-6">
        {categories.map((category, idx) => (
          <div
            className="bg-equi-primary-100 py-5 px-10"
            key={`category-${idx}`}
          >
            <h3 className="text-center">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
