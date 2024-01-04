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
import * as React from "react";

export const Jumbotron = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  React.useEffect(() => {
    const isBeginning = currentSlide === 1 ? 1 : 0;
    const isEnd = currentSlide === 4 ? 1 : 0;

    //   // Show/hide buttons based on whether it's the first or last card
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    if (prevButton) {
      prevButton.style.display = isBeginning ? "none" : "block";
    }

    if (nextButton) {
      nextButton.style.display = isEnd ? "none" : "block";
    }
  }, [currentSlide]);

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
        onReachBeginning={() => {
          const prevButton = document.getElementById("prevButton");
          if (prevButton) {
            prevButton.style.display = "none";
          }
          setCurrentSlide(1);
        }}
        onReachEnd={() => {
          const nextButton = document.getElementById("nextButton");
          if (nextButton) {
            nextButton.style.display = "none";
          }
          setCurrentSlide(4);
        }}
        onSlideChange={() => {
          const prevButton = document.getElementById("prevButton");
          const nextButton = document.getElementById("nextButton");
          if (prevButton) {
            prevButton.style.display = "block";
          }
          if (nextButton) {
            nextButton.style.display = "block";
          }
        }}
      >
        <SwiperButtonPrev
          onClickHandler={() => setCurrentSlide(currentSlide - 1)}
        >
          <Icons.ChevronLeft className="h-6 w-6 stroke-slate-500" />
        </SwiperButtonPrev>
        <SwiperSlide className="shadow-lg">
          <StabilityAIOpenAISticker />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <Llama2Chat />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <SEOArticleWriter />
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <YOLOv7 />
        </SwiperSlide>
        <SwiperButtonNext
          onClickHandler={() => setCurrentSlide(currentSlide + 1)}
        >
          <Icons.ChevronRight className="h-6 w-6 stroke-slate-500" />
        </SwiperButtonNext>
      </Swiper>
    </div>
  );
};
