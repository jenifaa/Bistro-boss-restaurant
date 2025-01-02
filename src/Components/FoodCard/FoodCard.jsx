import React from "react";

const FoodCard = ({item}) => {
  const {name,image,price,recipe} = item
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
         
        />
      </figure>
      <h2 className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 py-1">${price}</h2>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      
        <p>{recipe}</p>
        <div className="card-actions justify-center ">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
