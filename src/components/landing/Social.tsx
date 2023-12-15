import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

export default function Social() {
  return (
    <div className="my-10">
      <Swiper
        className="!w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="!w-full">
          <img
            src={"/images/social-1.svg"}
            alt=""
            sizes=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-full">
          <img
            src={"/images/social-2.svg"}
            alt=""
            sizes=""
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-full">
          <img
            src={"/images/social-3.svg"}
            alt=""
            sizes=""
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
