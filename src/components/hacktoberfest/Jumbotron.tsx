import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SwiperButtonNext from "@/components/hacktoberfest/SwiperButtonNext";
import SwiperButtonPrev from "@/components/hacktoberfest/SwiperButtonPrev";
import { Button, Icons, Input } from "@instill-ai/design-system";

export default function Jumbotron() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        initialSlide={2}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[
          Autoplay,
          EffectCoverflow,
          Pagination,
          Navigation,
          Scrollbar,
          A11y,
        ]}
        className="mySwiper relative"
      >
        <SwiperButtonPrev>
          <Button
            variant="secondaryGrey"
            size="lg"
            className="absolute left-32 top-96 z-10 rounded-[50px] !p-3"
          >
            <Icons.ChevronLeft className="h-6 w-6 stroke-slate-500" />
          </Button>
        </SwiperButtonPrev>
        <SwiperSlide>
          <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6 ">
            <h3 className="mb-3 font-semibold leading-none">Llava-13B</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              Create and inspire using the worlds fastest growing open source AI
              platform
            </p>

            <div className="my-6 flex gap-x-4">
              <Input.Root className="w-full">
                <Input.Core
                  disabled={false}
                  type="text"
                  placeholder="Send a message"
                  value="Tell me a short story"
                />
              </Input.Root>
              <Button variant="primary" size="lg">
                Genrate
              </Button>
            </div>

            <div>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
            <h3 className="font-semibold leading-none">Llama2-7B-chat</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              Create and inspire using the worlds fastest growing open source AI
              platform
            </p>

            <div className="my-6 flex gap-x-4">
              <Input.Root className="w-full">
                <Input.Core
                  disabled={false}
                  type="text"
                  placeholder="Send a message"
                  value="Tell me a short story"
                />
              </Input.Root>
              <Button variant="primary" size="lg">
                Genrate
              </Button>
            </div>

            <div>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
            <h3 className="font-semibold leading-none">
              Stability AI + Open AI for Sticker
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              Create and inspire using the worlds fastest growing open source AI
              platform
            </p>

            <div className="my-6 flex gap-x-4">
              <Input.Root className="w-full">
                <Input.Core
                  disabled={false}
                  type="text"
                  placeholder="Send a message"
                  value="Tell me a short story"
                />
              </Input.Root>
              <Button variant="primary" size="lg">
                Genrate
              </Button>
            </div>

            <div>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
            <h3 className="font-semibold leading-none">YOLOv7</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              Create and inspire using the worlds fastest growing open source AI
              platform
            </p>

            <div className="my-6 flex gap-x-4">
              <Input.Root className="w-full">
                <Input.Core
                  disabled={false}
                  type="text"
                  placeholder="Send a message"
                  value="Tell me a short story"
                />
              </Input.Root>
              <Button variant="primary" size="lg">
                Genrate
              </Button>
            </div>

            <div>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
            <h3 className="font-semibold leading-none">SEO article writer</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-600">
              Create and inspire using the worlds fastest growing open source AI
              platform
            </p>

            <div className="my-6 flex gap-x-4">
              <Input.Root className="w-full">
                <Input.Core
                  disabled={false}
                  type="text"
                  placeholder="Send a message"
                  value="Tell me a short story"
                />
              </Input.Root>
              <Button variant="primary" size="lg">
                Genrate
              </Button>
            </div>

            <div>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperButtonNext>
          <Button
            variant="secondaryGrey"
            size="lg"
            className="absolute right-32 top-96 z-10 rounded-[50px] !p-3"
          >
            <Icons.ChevronRight className="h-6 w-6 stroke-slate-500" />
          </Button>
        </SwiperButtonNext>
      </Swiper>
    </>
  );
}
