import React from "react";
import Heading from "../../../Shared/Heading";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, price, _id, category, recipe, image } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server side with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/Menu/${_id}`, menuItem);
     
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: "Item Updated",
          icon: "success",
        });
      }
    }
   
  };

  return (
    <div>
      <Heading heading="Update An Item" subHeading="---Update---"></Heading>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              defaultValue={name}
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex items-center gap-6">
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                // defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                 Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                defaultValue={price}
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Write Recipe Details Here"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
            //   defaultValue={image}
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>

          <button className="btn">Update</button>
        </form>
      </div>
    </div>
  );
};


export default UpdateItem;
