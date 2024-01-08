import { ReactElement } from "react";
import { useSwiper } from "swiper/react";
import { Button } from "@instill-ai/design-system";

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
    <Button
      id="prevButton"
      onClick={() => {
        swiper.slidePrev();
        onClickHandler();
      }}
      variant="secondaryGrey"
      size="lg"
      className="absolute top-96 z-10 hidden rounded-[50px] !p-3 xl:left-6 xl:block"
    >
      {children}
    </Button>
  );
};
