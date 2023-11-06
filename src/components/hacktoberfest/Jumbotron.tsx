import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import SwiperButtonNext from "@/components/hacktoberfest/SwiperButtonNext";
import SwiperButtonPrev from "@/components/hacktoberfest/SwiperButtonPrev";
import { Button, Icons } from "@instill-ai/design-system";

export default function Jumbotron() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar, A11y]}
        className="mySwiper relative"
      >
        <SwiperButtonPrev>
          <Button
            variant="secondaryGrey"
            size="lg"
            className="absolute left-32 top-96 z-10 rounded-[50px] !p-3"
          >
            <Icons.ChevronLeft className="h-6 w-6 stroke-slate-500" />
          </Button>
        </SwiperButtonPrev>
        <SwiperSlide className="relative">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperButtonNext>
          <Button
            variant="secondaryGrey"
            size="lg"
            className="absolute right-32 top-96 z-10 rounded-[50px] !p-3"
          >
            <Icons.ChevronRight className="h-6 w-6 stroke-slate-500" />
          </Button>
        </SwiperButtonNext>
      </Swiper>
    </>
  );
}
