import React, { useEffect, useState } from "react";
import Heading from "../../Shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  return (
    <div className="mb-20">
      <Heading
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></Heading>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" flex justify-center items-center my-4"><Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /></div>
              <div className="flex justify-center items-center"><FaQuoteLeft className="text-6xl my-3"/></div>
             
              <div className="text-center">
                <p className="w-8/12  mx-auto">{review.details}</p>
                <h3 className="text-2xl my-2 font text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
