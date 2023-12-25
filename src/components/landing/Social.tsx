import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

export default function Social() {
  return (
    <div className="my-10">
      <Swiper
        className="!w-full"
        // modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="!w-full rounded bg-[#F9FAFB]">
          <div className="p-6 xl:p-16">
            <div className="text-center">
              <p className="pb-8 font-sans text-[16px] font-normal leading-9 text-gray-800 text-opacity-80 xl:text-[24px]">
                Trusted by
              </p>
            </div>
            <div className="flex justify-center gap-x-8 xl:gap-x-20">
              <img
                src={"/images/social/oxford.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/acadamia.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/cheng-kung-university.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-full rounded bg-[#F9FAFB]">
          <div className="p-6 xl:p-16">
            <div className="text-center">
              <p className="pb-8 font-sans text-[16px] font-normal leading-9 text-gray-800 text-opacity-80 xl:text-[24px]">
                Partnerships
              </p>
            </div>
            <div className="hidden flex-none justify-center gap-x-20 xl:flex">
              <img
                src={"/images/social/nvidia.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/huggingface.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/number-protocol.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />

              <img
                src={"/images/social/google.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
            <div className="flex justify-center gap-x-8 xl:hidden xl:gap-x-20">
              <img
                src={"/images/social/nvidia.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/huggingface.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/number-protocol.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
            <div className="flex justify-center pt-4 xl:hidden">
              <img
                src={"/images/social/google.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-full rounded bg-[#F9FAFB]">
          <div className="p-6 xl:p-16">
            <div className="text-center">
              <p className="pb-8 font-sans text-[16px] font-normal leading-9 text-gray-800 text-opacity-80 xl:text-[24px]">
                Backed by
              </p>
            </div>
            <div className="hidden flex-none justify-center gap-x-20 xl:flex">
              <img
                src={"/images/social/rtp-global.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/lunar-ventures.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/hive-vertures.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/venture.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
            <div className="flex justify-center gap-x-8 xl:hidden">
              <img
                src={"/images/social/rtp-global.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/lunar-ventures.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
            <div className="flex justify-center gap-x-8 pt-4 xl:hidden">
              <img
                src={"/images/social/hive-vertures.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
              <img
                src={"/images/social/venture.svg"}
                alt=""
                sizes=""
                className="my-auto h-8 xl:h-16"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
