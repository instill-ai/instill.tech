import * as React from "react";

export const Mission = () => {
  return (
    <div className="row mb-0 mt-12 flex w-full flex-col">
      <div className="w-full text-center">
        <p className="mb-6 font-sans text-[32px] font-medium text-black">
          Mission
        </p>
      </div>
      {/* <div className="glow"></div> */}
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/about/glow.png")',
          backgroundPosition: "right",
        }}
      >
        <div className="rounded-sm p-[30px] shadow-lg">
          <p className="font-mono text-[16px] font-normal leading-6 text-[#1D2433]">
            Our mission at Instill AI is crystal clear - We are dedicated to
            making AI accessible to everyone. Our goal is to simplify the AI
            development process and empower users to effortlessly harness the
            transformative power of AI. We are committed to creating a future
            where AI is a tool for all, regardless of complexity, ensuring that
            everyone can reap its benefits with ease.
          </p>
        </div>
      </div>
    </div>
  );
};
