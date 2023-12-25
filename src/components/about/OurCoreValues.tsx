import React from "react";

export const OurCoreValues = () => {
  return (
    <div className="my-10 w-full">
      <p className="mb-5 font-mono text-[48px] font-medium text-black">
        Our Core Values
      </p>

      <div className="grid grid-cols-2 gap-5">
        <div className="border-2 border-zinc-900 bg-[#F6F6F6] p-12">
          <p className="mb-2 font-sans text-[24px] font-medium text-zinc-900">
            🤩 User obsession
          </p>
          <p className="font-sans text-base font-normal leading-7 text-zinc-900">
            At the core of our company, we&apos;re driven by the success of our
            customers. We thrive when we deeply understand their needs and go
            the extra mile to provide them with exceptional value, making their
            success our top priority.
          </p>
        </div>

        <div className="border-2 border-zinc-900 bg-[#F6F6F6] p-12">
          <p className="mb-2 font-sans text-[24px] font-medium text-zinc-900">
            🚛 Deliver more than expected
          </p>
          <p className="font-sans text-base font-normal leading-7 text-zinc-900">
            We maintain a relentless commitment to quality and consistency in
            everything we do. Our goal is not just to meet expectations but to
            consistently exceed them, setting a high standard for our work.
          </p>
        </div>

        <div className="border-2 border-zinc-900 bg-[#F6F6F6] p-12">
          <p className="mb-2 font-sans text-[24px] font-medium text-zinc-900">
            🤝 Communication x 3
          </p>
          <p className="font-sans text-base font-normal leading-7 text-zinc-900">
            Being a remote team, we understand the importance of effective
            communication. We emphasize it not just once, but threefold, to
            foster transparency, collaboration, and clarity among our team
            members.
          </p>
        </div>

        <div className="border-2 border-zinc-900 bg-[#F6F6F6] p-12">
          <p className="mb-2 font-sans text-[24px] font-medium text-zinc-900">
            👊🏻 Be proactive and accountable
          </p>
          <p className="font-sans text-base font-normal leading-7 text-zinc-900">
            Taking ownership of our responsibilities and proactively addressing
            challenges is a fundamental part of our work ethic. We hold
            ourselves accountable for our actions and outcomes, driving our
            commitment to success.
          </p>
        </div>
      </div>
    </div>
  );
};
