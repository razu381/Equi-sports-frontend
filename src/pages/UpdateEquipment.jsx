import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

function UpdateEquipment() {
  let { user } = useContext(AuthContext);
  let currData = useLoaderData();
  console.log(currData);
  let { id } = useParams();
  console.log(id);

  //handle update function
  function handleUpdate(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let UpdatedData = Object.fromEntries(formData.entries());
    UpdatedData.email = user.email;
    UpdatedData.Username = user.displayName;

    fetch(`https://equisports-backend.vercel.app/equipments/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update req data", data);
        toast.success("Equipment udpdated successfully");
      })
      .catch((err) =>
        toast.error("There was an error updating your equipment")
      );
  }
  return (
    <div className="bg-equi-primary-950 py-20 px-5 lg:px-[15%]">
      <div className="rounded-lg bg-white bg-opacity-5 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleUpdate} action="#" className="space-y-4">
          <h2 className="text-white font-bold text-2xl text-center py-6">
            Update an equipment
          </h2>
          {/* Row 0 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="userName">
                Username
              </label>
              <input
                className="w-full rounded-lg bg-white  border-gray-200 p-3 text-sm"
                placeholder="Username"
                type="text"
                name="UserName"
                defaultValue={user?.displayName}
                disabled
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg bg-white border-gray-200 p-3 text-sm"
                placeholder="Email"
                type="text"
                name="emial"
                defaultValue={user.email}
                disabled
              />
            </div>
          </div>
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
                defaultValue={currData?.name}
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
                defaultValue={currData?.image}
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
                defaultValue={currData?.price}
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
                defaultValue={currData?.category}
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
                defaultValue={currData?.rating}
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
                defaultValue={currData?.customization}
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
                // prettier-ignore
                defaultValue={currData?.["processingTime"]}
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
                defaultValue={currData?.stock}
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
              defaultValue={currData?.details}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-equi-primary-600 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Update Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEquipment;
