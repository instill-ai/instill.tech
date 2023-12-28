// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import { Button, Icons } from "@instill-ai/design-system";
import { SwiperButtonPrev } from "./SwiperButtonPrev";
import { SwiperButtonNext } from "./SwiperButtonNext";
import { Llama2Chat } from "./Llama2Chat";
import { StabilityAIOpenAISticker } from "./StabilityAIOpenAISticker";
import { YOLOv7 } from "./YOLOv7";
import { SEOArticleWriter } from "./SEOArticleWriter";

export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <Swiper
        initialSlide={0}
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        modules={[EffectCards, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperButtonPrev>
          <Button
            variant="secondaryGrey"
            size="lg"
            className="absolute top-96 z-10 hidden rounded-[50px] !p-3 xl:left-7 xl:block"
          >
            <Icons.ChevronLeft className="h-6 w-6 stroke-slate-500" />
          </Button>
        </SwiperButtonPrev>

        <SwiperSlide className="shadow-lg">
          <StabilityAIOpenAISticker />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <YOLOv7 />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <SEOArticleWriter />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <Llama2Chat />
        </SwiperSlide>
        <SwiperButtonNext>
          <Button
            variant="secondaryGrey"
            size="lg"
            className="absolute top-96 z-10 hidden rounded-[50px] !p-3 xl:right-7 xl:block"
          >
            <Icons.ChevronRight className="h-6 w-6 stroke-slate-500" />
          </Button>
        </SwiperButtonNext>
      </Swiper>
    </div>
  );
};
