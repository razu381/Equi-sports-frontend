import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function AllEquipments() {
  let equipments = useLoaderData();
  console.log(equipments);

  return (
    <div className="px-[5%] lg:px-[10%] mx-auto my-10">
      <table className="table-auto border-collapse border border-equi-primary-500 w-full text-center">
        <thead className="">
          <tr>
            <th className="text-center font-semibold border border-equi-primary-500 py-2">
              Product name
            </th>
            <th className="text-center font-semibold border border-equi-primary-500 py-2">
              Price
            </th>
            <th className="text-center font-semibold border border-equi-primary-500 py-2">
              Rating
            </th>
            <th className="text-center font-semibold border border-equi-primary-500 py-2">
              Details
            </th>
          </tr>
        </thead>

        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment?._id}>
              <td className="border border-equi-primary-500">
                {equipment?.name}
              </td>
              <td className="border border-equi-primary-500">
                {equipment?.price}
              </td>
              <td className="border border-equi-primary-500">
                {equipment?.rating}
              </td>
              <td className="border border-equi-primary-500 px-2 py-2">
                <Link
                  to={`/all-equipment/${equipment?._id}`}
                  className="block lg:inline-block py-1 px-2 bg-equi-primary-600 my-2 text-white"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllEquipments;
