import React, { useEffect, useState } from "react";

function Categories() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-xl font-bold text-black sm:text-3xl text-center ">
        Product Categories
      </h2>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 py-6">
        {categories.map((category) => (
          <div className="bg-equi-primary-100 py-5 px-10">
            <h3 className="text-center">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
