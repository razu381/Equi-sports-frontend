import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import ProductCard from "../components/Home/ProductCard";
import Spinner from "../components/Spinner";

function MyEquipments() {
  let { user } = useContext(AuthContext);
  let [equipments, setEquipments] = useState([]);
  let [loading, setLoading] = useState(true);
  //console.log(`https://equisports-backend.vercel.app/my-equipments/${user?.email}`);

  useEffect(() => {
    fetch(`https://equisports-backend.vercel.app/my-equipments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      });
  }, [user]);

  console.log(equipments);

  if (loading) return <Spinner />;
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
