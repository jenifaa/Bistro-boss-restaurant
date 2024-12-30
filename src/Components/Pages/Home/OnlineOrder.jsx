import React from "react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide from "../../../assets/home/slide1.jpg";
import slid2 from "../../../assets/home/slide2.jpg";
import slid3 from "../../../assets/home/slide3.jpg";
import slid4 from "../../../assets/home/slide4.jpg";
import slid5 from "../../../assets/home/slide5.jpg";
import Heading from "../../Shared/Heading";

const OnlineOrder = () => {
  return (
    <div className="my-20">
      <section>
        <Heading heading={'ORDER ONLINE'} subHeading={'---From 11:00am to 10:00pm---'}></Heading>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={slide} alt="" />
            <h3 className="text-4xl text-center -mt-12 uppercase font text-white">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slid2} alt="" />
            <h3 className="text-4xl text-center -mt-12 uppercase font text-white">
              pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slid3} alt="" />
            <h3 className="text-4xl text-center -mt-12 font uppercase text-white">
              soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slid4} alt="" />
            <h3 className="text-4xl text-center -mt-12 uppercase font text-white">
              Cake
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slid5} alt="" />
            <h3 className="text-4xl text-center uppercase -mt-12 font text-white">
              soup
            </h3>
          </SwiperSlide>
          ...
        </Swiper>
      </section>
    </div>
  );
};

export default OnlineOrder;
