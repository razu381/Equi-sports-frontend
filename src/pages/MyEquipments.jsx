import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth.jsx/AuthProvider";
import ProductCard from "../components/Home/ProductCard";

function MyEquipments() {
  let { user } = useContext(AuthContext);
  let [equipments, setEquipments] = useState([]);
  //console.log(`http://localhost:3000/my-equipments/${user?.email}`);

  useEffect(() => {
    fetch(`http://localhost:3000/my-equipments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, [user]);

  console.log(equipments);
  return (
    <div className="mx-[5%] xl:mx-[10%]">
      <h2 className="font-bold text-center  text-2xl lg:text-3xl mt-10 py-6">
        My Equipments
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-8 justify-center items-center">
        {equipments.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            equipments={equipments}
            setEquipments={setEquipments}
          />
        ))}
      </div>
    </div>
  );
}

export default MyEquipments;
