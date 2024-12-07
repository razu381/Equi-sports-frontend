import React, { useContext } from "react";
import { AuthContext } from "../Auth.jsx/AuthProvider";

function AddEquipments() {
  let { user } = useContext(AuthContext);
  function handleAdd(e) {
    e.preventDefault();

    console.log("prevent default works fine");
    let formData = new FormData(e.target);
    let productData = Object.fromEntries(formData.entries());
    productData.email = user.email;
    productData.UserName = user.displayName;
    console.log("user submitted data", productData);

    fetch("http://localhost:3000/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="bg-equi-primary-950 py-20 px-[15%]">
      <div className="rounded-lg bg-white bg-opacity-5 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleAdd} action="#" className="space-y-4">
          <h2 className="text-white font-bold text-2xl text-center py-6">
            Add a new equipment
          </h2>
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                name="name"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="image">
                Image Url
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="Image Url"
                type="text"
                name="image"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="price">
                price
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="price "
                type="text"
                id="price"
                name="price"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="category">
                category
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="category"
                type="text"
                id="category"
                name="category"
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="rating">
                rating
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="rating "
                type="text"
                id="rating"
                name="rating"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="customization">
                customization(bat with extra grip, hit paper etc)
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="customization"
                type="text"
                id="customization"
                name="customization"
              />
            </div>
          </div>
          {/* row 4 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="Processing Time ">
                Processing Time(delivery time)
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="Processing Time"
                type="text"
                name="processingTime"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="Stock">
                Stock Status
              </label>
              <input
                className="w-full rounded-lg bg-white   border-gray-200 p-3 text-sm"
                placeholder="Stock"
                type="text"
                id="Stock"
                name="stock"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="Details">
              Details
            </label>

            <textarea
              className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
              placeholder="Details"
              rows="4"
              id="Details"
              name="details"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-equi-primary-600 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEquipments;
