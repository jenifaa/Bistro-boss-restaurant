import React from "react";
import Cover from "../../Shared/Cover";
import img from "../../../assets/contact/banner.jpg";
import Heading from "../../Shared/Heading";
import { FaClock, FaPhone, FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
const ContactUs = () => {
  return (
    <div className="">
      <Cover img={img} title="Contact us"></Cover>
      <Heading subHeading="---Visit Us---" heading="OUR LOCATION"></Heading>
      <div>
        <div className="md:flex w-9/12 mx-auto justify-between items-center my-10 ">
          <div className="mb-5">
            <div className="bg-[#D1A054] py-3 w-72 flex justify-center items-center">
              <FaPhoneVolume
                className="text-white "
                style={{
                  transform: "rotate(-35deg)",
                }}
              />
            </div>
            <div className="w-72 border px-4 pb-4">
              <div className="text-center px-5 py-10  bg-base-200">
                <h2 className="font-semibold text-xl">Phone</h2>
                <p className="text-sm mt-3">+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="bg-[#D1A054] py-3 w-72 flex justify-center items-center">
              <FaLocationDot className="text-white " />
            </div>
            <div className="w-72 border px-4 pb-4">
              <div className="text-center px-5 py-10  bg-base-200">
                <h2 className="font-semibold text-xl">Address</h2>
                <p className="text-sm mt-3">+38 (012) 34 56 789</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="bg-[#D1A054] py-3 w-72 flex justify-center items-center">
              <FaClock className="text-white " />
            </div>
            <div className="w-72 border px-4 pb-4">
              <div className="text-center px-5 py-10  bg-base-200">
                <h2 className="font-semibold text-xl">Working Hour</h2>
                <p className="text-sm mt-3">Mon - Fri: 08:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading
        subHeading="---Send Us a Message---"
        heading="CONTACT FORM"
      ></Heading>
      <div className="w-9/12 mx-auto bg-base-200 p-10 mb-36">
        <div className="md:flex justify-between items-center mb-8">
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Write your name"
              className="input input-bordered w-full max-w-sm"
            />
          </label>

          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Write your email"
              className="input input-bordered w-full max-w-sm"
            />
          </label>
        </div>
        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Phone</span>
          </div>
          <input
            type="text"
            placeholder="Write your Phone Number"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-40"
           
          ></textarea>
        </label>
        <div className="flex justify-center items-center my-5">
          <button className="flex items-center gap-1 bg-gradient-to-r from-[#835D23] to-[#B58130] px-3 py-2 text-white">Send Message <IoIosSend /></button>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
