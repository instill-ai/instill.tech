// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Pagination, Navigation, EffectCards, Autoplay } from "swiper/modules";
import { Icons } from "@instill-ai/design-system";
import { SwiperButtonPrev } from "./SwiperButtonPrev";
import { SwiperButtonNext } from "./SwiperButtonNext";
import { Llama2Chat } from "./Llama2Chat";
import { StabilityAIOpenAISticker } from "./StabilityAIOpenAISticker";
import { YOLOv7 } from "./YOLOv7";
import { SEOArticleWriter } from "./SEOArticleWriter";
import * as React from "react";
import { WebpageSummarization } from "./WebpageSummarization";
import { AskOnPage } from "./AskOnPage";
import { ResponderWithSpeech } from "./ResponderWithSpeech";
+1;

export const Jumbotron = () => {
  const [currentSlide, setCurrentSlide] = React.useState(
    Math.floor(Math.random() * 7)
  );

  React.useEffect(() => {
    const isBeginning = currentSlide === 0 ? true : false;
    const isEnd = currentSlide === 6 ? true : false;

    // Show/hide buttons based on whether it's the first or last card
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    if (prevButton) {
      if (isBeginning) {
        prevButton.classList.add("xl:hidden");
        prevButton.classList.remove("xl:block");
      } else {
        prevButton.classList.add("xl:block");
        prevButton.classList.remove("xl:hidden");
      }
    }

    if (nextButton) {
      if (isEnd) {
        nextButton.classList.add("xl:hidden");
        nextButton.classList.remove("xl:block");
      } else {
        nextButton.classList.add("xl:block");
        nextButton.classList.remove("xl:hidden");
      }
    }
  }, [currentSlide]);

  return (
    <div className="jumbotron">
      <Swiper
        initialSlide={currentSlide}
        onClick={(swiper: any) => {
          if (swiper) {
            swiper.autoplay.stop();
          }
        }}
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        onReachBeginning={() => {
          const prevButton = document.getElementById("prevButton");
          if (prevButton) {
            prevButton.classList.add("xl:hidden");
            prevButton.classList.remove("xl:block");
          }
          setCurrentSlide(0);
        }}
        onReachEnd={() => {
          const nextButton = document.getElementById("nextButton");
          if (nextButton) {
            nextButton.classList.add("xl:hidden");
            nextButton.classList.remove("xl:block");
          }
          setCurrentSlide(6);
        }}
        onSlideChange={(swiper: any) => {
          setCurrentSlide(swiper.activeIndex);
          const prevButton = document.getElementById("prevButton");
          const nextButton = document.getElementById("nextButton");
          if (prevButton) {
            prevButton.classList.add("xl:block");
            prevButton.classList.remove("xl:hidden");
          }
          if (nextButton) {
            nextButton.classList.add("xl:block");
            nextButton.classList.remove("xl:hidden");
          }
        }}
      >
        <SwiperButtonPrev
          onClickHandler={() => setCurrentSlide(currentSlide - 1)}
        >
          <Icons.ChevronLeft className="h-6 w-6 stroke-slate-500" />
        </SwiperButtonPrev>
        <SwiperSlide className="shadow-sm">
          <ResponderWithSpeech />
        </SwiperSlide>
        <SwiperSlide className="shadow-sm">
          <AskOnPage />
        </SwiperSlide>
        <SwiperSlide className="shadow-sm">
          <WebpageSummarization />
        </SwiperSlide>
        <SwiperSlide className="shadow-sm">
          <StabilityAIOpenAISticker />
        </SwiperSlide>
        <SwiperSlide className="shadow-sm">
          <Llama2Chat />
        </SwiperSlide>
        <SwiperSlide className="shadow-sm">
          <SEOArticleWriter />
        </SwiperSlide>
        <SwiperSlide className="shadow-sm">
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
