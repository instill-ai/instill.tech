import * as React from "react";

export const Mission = () => {
  return (
    <div className="my-10 flex w-full flex-col-reverse space-y-10 xl:flex-row">
      <div className="mt-10 w-full text-left xl:w-3/5">
        <p className="mb-5 font-mono text-[48px] font-medium text-black">
          Mission
        </p>
        <p className="font-sans text-base font-normal leading-7 text-zinc-900">
          Our mission at Instill AI is crystal clear - We are dedicated to
          making AI accessible to everyone. Our goal is to simplify the AI
          development process and empower users to effortlessly harness the
          transformative power of AI. We are committed to creating a future
          where AI is a tool for all, regardless of complexity, ensuring that
          everyone can reap its benefits with ease.
        </p>
      </div>
      <div className="mt-10 w-full justify-center xl:w-2/5">
        <img
          src={"/images/about-us-mission.svg"}
          alt=""
          className="mx-auto my-auto"
        />
      </div>
    </div>
  );
};
