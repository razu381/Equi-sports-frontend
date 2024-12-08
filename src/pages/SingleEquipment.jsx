import React from "react";
import { useLoaderData } from "react-router-dom";

function SingleEquipment() {
  console.log(useLoaderData());
  let {
    _id,
    name,
    image,
    price,
    category,
    stock,
    rating,
    details,
    customization,
    processingTime,
  } = useLoaderData();

  return (
    <section className="py-6 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                {name}
              </h2>

              <p className="mt-4 text-equi-text">{details}</p>
              <p className="mt-4 text-equi-text">
                <strong>Category: </strong> {category}
              </p>
              <p className="mt-4 text-equi-text">
                <strong>Price: </strong> {price}
              </p>
              <p className="mt-4 text-equi-text">
                <strong>Customization: </strong> {customization}
              </p>
              <p className="mt-4 text-equi-text">
                <strong>Rating: </strong> {rating}
              </p>
              <p className="mt-4 text-equi-text">
                <strong>Stock: </strong> {stock}
              </p>
              <p className="mt-4 text-equi-text">
                <strong>Processing Time: </strong> {processingTime}
              </p>
            </div>
          </div>

          <div>
            <img src={image} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleEquipment;
