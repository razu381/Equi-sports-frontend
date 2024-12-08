import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaRegEdit, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
  MdDelete,
  MdDeleteForever,
  MdOutlineDeleteForever,
} from "react-icons/md";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { ThemeContext } from "../../Root";

function ProductCard({ product, equipments, setEquipments }) {
  let { isLight } = useContext(ThemeContext);
  let { _id, name, image, price, category } = product;
  let [isEditable, setEditable] = useState(false);

  let location = useLocation().pathname;

  useEffect(() => {
    if (location === "/my-equipments") {
      setEditable(true);
    }
  }, [location]);

  function handleDelete(id) {
    console.log("delete requested", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://equisports-backend.vercel.app/equipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            let remainingEquipments = equipments.filter(
              (equipment) => equipment._id != id
            );
            setEquipments(remainingEquipments);
            console.log(data);
            swal("Poof! Your Equipment has been deleted!", {
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      } else {
        swal("Your Equipment is safe!");
      }
    });
  }

  return (
    <Link
      to={``}
      className={`relative block rounded-tr-3xl border border-grey-100 mb-5 ${
        isLight ? "equi-light-mode" : "equi-dark-mode"
      }`}
    >
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        Save 10%
      </span>

      <img
        src={image}
        alt=""
        className="md:-ml-6 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
      />

      <div className="p-4">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <strong className="text-xl font-medium ">{name}</strong>
            <p className="mt-2  ">Price: {price}</p>
            <p className="mt-2  ">Category: {category}</p>
          </div>
          <div className="justify-self-end flex flex-col justify-center items-center gap-4 col-span-4">
            <button>
              {isEditable ? (
                <MdDeleteForever
                  color="#ff0000"
                  size={25}
                  onClick={() => handleDelete(_id)}
                />
              ) : (
                <IoCartOutline color="#2ecc71" size={25} />
              )}
            </button>
            <button>
              {isEditable ? (
                <Link to={`/update-equipment/${_id}`}>
                  <FaRegEdit color="#2ecc71" size={20} />
                </Link>
              ) : (
                <FaRegHeart color="#2ecc71" size={20} />
              )}
            </button>
          </div>
        </div>
        {isEditable || (
          <Link
            to={`/all-equipment/${_id}`}
            className="mt-4 block rounded-md border border-equi-primary-900 bg-equi-primary-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-equi-primary-500 hover:text-equi-900 text-center"
          >
            Learn More
          </Link>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
