import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner";
import { ThemeContext } from "../../pages/Home";

function Categories() {
  let { isLight } = useContext(ThemeContext);
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
    <div
      className={`my-10 px-5 lg:px-10 ${
        isLight ? "equi-light-mode" : "equi-dark-mode"
      }`}
    >
      <h2 className="text-xl font-bold sm:text-3xl text-center ">
        Product Categories
      </h2>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 py-6">
        {categories.map((category, idx) => (
          <div
            className={`${
              isLight ? "bg-equi-primary-100" : "bg-equi-primary-700"
            } py-5 px-10`}
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
