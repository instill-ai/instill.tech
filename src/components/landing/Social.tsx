import * as React from "react";

export default function Social() {
  return (
    <div className="mb-20 !w-full rounded bg-[#F9FAFB]">
      <div className="p-6 xl:p-16">
        <div className="text-center">
          <p className="pb-8 font-sans text-[16px] font-normal leading-9 text-gray-800 text-opacity-80 xl:text-[24px]">
            Customers use Instill Cloud to build the backbone of their AI
            applications
          </p>
        </div>
        <div className="flex justify-center gap-x-8 xl:gap-x-20">
          <a
            href="https://ubitus.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:block"
          >
            <img
              src={"/images/social/ubitus.svg"}
              alt=""
              sizes=""
              className="my-auto h-8 grayscale transition duration-300 hover:grayscale-0 xl:h-16"
            />
          </a>

          <a
            href="https://www.rybit.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"/images/social/rybit.svg"}
              alt=""
              sizes=""
              className="my-auto h-8 grayscale transition duration-300 hover:grayscale-0 xl:h-16"
            />
          </a>

          <a
            href="https://www.no8.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"/images/social/super8.svg"}
              alt=""
              sizes=""
              className="my-auto h-8 grayscale transition duration-300 hover:grayscale-0 xl:h-16"
            />
          </a>

          <a
            href="https://www.ox.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"/images/social/oxford.svg"}
              alt=""
              sizes=""
              className="my-auto h-8 grayscale transition duration-300 hover:grayscale-0 xl:h-16"
            />
          </a>

          <a
            href="https://www.sinica.edu.tw/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"/images/social/acadamia.svg"}
              alt=""
              sizes=""
              className="my-auto h-8 grayscale transition duration-300 hover:grayscale-0 xl:h-16"
            />
          </a>

          <a
            href="https://www.ncku.edu.tw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"/images/social/cheng-kung-university.svg"}
              alt=""
              sizes=""
              className="my-auto h-8 grayscale transition duration-300 hover:grayscale-0 xl:h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
