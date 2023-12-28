import { useSwiper } from "swiper/react";
import { SwiperButtonProps } from "./SwiperButtonPrev";

export const SwiperButtonNext = ({
  children,
  onClickHandler,
}: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      id="nextButton"
      onClick={() => {
        swiper.slideNext();
        onClickHandler();
      }}
    >
      {children}
    </button>
  );
};
