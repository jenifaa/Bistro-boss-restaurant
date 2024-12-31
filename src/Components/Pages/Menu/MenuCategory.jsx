import React from "react";
import Cover from "../../Shared/Cover";

const MenuCategory = ({ items ,title,coverImg}) => {
  return (
    <div className="pt-8 ">
         {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-7 my-10">
        {items.map((item) => (
          <div key={item._id} className="flex gap-4 items-center">
            <img
              style={{ borderRadius: "0 200px 200px 200px" }}
              className="w-[105px]"
              src={item.image}
              alt=""
            />
            <div>
              <p className="font text-gray-700">{item.name}-------------</p>
              <p className="text-xs text-gray-500 my-3">{item.recipe}</p>
            </div>
            <p className="text-yellow-600 text-x;">${item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-4">
        {" "}
        <button className="text-xl font py-2 px-3 border-b-2 border-black rounded-xl">
        ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
