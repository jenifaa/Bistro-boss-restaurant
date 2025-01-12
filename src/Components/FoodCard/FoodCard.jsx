import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios()
  const [cart,refetch]= useCart()
  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });


          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "You Need To Login For This Work",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <h2 className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 py-1">
        ${price}
      </h2>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="rounded-xl border-b-2 border-yellow-700 px-10 py-2 text-yellow-700 my-4 bg-base-300 hover:bg-slate-800"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
