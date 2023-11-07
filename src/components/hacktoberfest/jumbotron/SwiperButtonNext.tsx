import { useSwiper } from "swiper/react";
import { SwiperButtonProps } from "./SwiperButtonPrev";

export const SwiperButtonNext = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};
