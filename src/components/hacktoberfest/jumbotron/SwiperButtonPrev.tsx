import { ReactElement } from "react";
import { useSwiper } from "swiper/react";

export type SwiperButtonProps = {
  children: ReactElement | string;
};

export const SwiperButtonPrev = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};
