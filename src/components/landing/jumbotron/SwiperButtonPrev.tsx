import { ReactElement } from "react";
import { useSwiper } from "swiper/react";

export type SwiperButtonProps = {
  children: ReactElement | string;
  onClickHandler: () => void;
};

export const SwiperButtonPrev = ({
  children,
  onClickHandler,
}: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      id="prevButton"
      onClick={() => {
        swiper.slidePrev();
        onClickHandler();
      }}
    >
      {children}
    </button>
  );
};
