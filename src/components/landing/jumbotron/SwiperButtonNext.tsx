import { useSwiper } from "swiper/react";
import { SwiperButtonProps } from "./SwiperButtonPrev";
import { Button } from "@instill-ai/design-system";

export const SwiperButtonNext = ({
  children,
  onClickHandler,
}: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <Button
      id="nextButton"
      onClick={() => {
        swiper.slideNext();
        onClickHandler();
      }}
      variant="secondaryGrey"
      size="lg"
      className="absolute top-96 z-10 hidden rounded-[50px] !p-3 xl:right-7 xl:block"
    >
      {children}
    </Button>
  );
};
