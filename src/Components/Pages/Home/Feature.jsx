import React from "react";
import feature from "../../../assets/home/featured.jpg";
import Heading from "../../Shared/Heading";

const Feature = () => {
  return (
    <div style={{
        backgroundImage: `url(${feature})`
    }} className="px-32 py-20 text-white bg-fixed my-20">
        <Heading heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></Heading>
      <div className="flex justify-center items-center gap-10 bg-slate-500 bg-opacity-40">
        <img className="w-[400px]" src={feature} alt="" />
        <div>
          <p className="mb-3">
            March 20, 2023 
          </p>
          <p className="">WHERE CAN I GET SOME?</p>
          <p> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.</p>
            <button className="px-5 py-2 border-b-2 border-white rounded-lg my-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
