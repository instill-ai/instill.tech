import * as React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
  Autoplay,
} from "swiper/modules";
import { Button, Icons } from "@instill-ai/design-system";
import { SwiperButtonPrev } from "./SwiperButtonPrev";
import { SwiperButtonNext } from "./SwiperButtonNext";
import { Llama2Chat } from "./Llama2Chat";
import { StabilityAIOpenAISticker } from "./StabilityAIOpenAISticker";
import { YOLOv7 } from "./YOLOv7";
import { SEOArticleWriter } from "./SEOArticleWriter";
import { Llava13B } from "./Llava13B";

export const Jumbotron = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={500}
        loop={true}
        initialSlide={2}
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
        modules={[
          Autoplay,
          EffectCoverflow,
          Pagination,
          Navigation,
          Scrollbar,
          A11y,
        ]}
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
        <SwiperSlide>
          <Llava13B />
        </SwiperSlide>
        <SwiperSlide>
          <Llama2Chat />
        </SwiperSlide>
        <SwiperSlide>
          <StabilityAIOpenAISticker />
        </SwiperSlide>
        <SwiperSlide>
          <YOLOv7 />
        </SwiperSlide>
        <SwiperSlide>
          <SEOArticleWriter />
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
};
