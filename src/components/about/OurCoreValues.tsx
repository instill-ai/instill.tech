import { Icons, Separator } from "@instill-ai/design-system";
import * as React from "react";

export const OurCoreValues = () => {
  return (
    <div className="my-12 w-full text-left">
      <div className="mb-6 text-center">
        <p className="font-sans text-[32px] font-medium text-black">
          Our Core Values
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="flex flex-col rounded-sm bg-[#FFFFFF99] p-[30px] shadow-lg">
          <div className="flex flex-row">
            <div className="mb-5 rounded-sm border p-2.5 shadow-sm">
              <Icons.User01 className="h-5 w-5 stroke-black" />
            </div>
          </div>
          <p className="mb-2 font-sans text-[16px] font-medium text-black">
            User obsession
          </p>
          <Separator className="my-2" />
          <p className="font-mono text-[14px] font-normal leading-5 text-[#000000B2]">
            At the core of our company, we&apos;re driven by the success of our
            users. We thrive when we deeply understand their needs and go the
            extra mile to provide them with exceptional value, making their
            success our top priority.
          </p>
        </div>

        <div className="rounded-sm bg-[#FFFFFF99] p-[30px] shadow-lg">
          <div className="flex flex-row">
            <div className="mb-5 rounded-sm border p-2.5 shadow-sm">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0827 13.6829V5.51628C14.0827 4.58286 14.0827 4.11614 13.901 3.75963C13.7412 3.44602 13.4863 3.19105 13.1727 3.03127C12.8161 2.84961 12.3494 2.84961 11.416 2.84961H5.08268C4.14926 2.84961 3.68255 2.84961 3.32603 3.03127C3.01243 3.19105 2.75746 3.44602 2.59767 3.75963C2.41602 4.11614 2.41602 4.58286 2.41602 5.51628V11.0163C2.41602 11.9497 2.41602 12.4164 2.59767 12.7729C2.75746 13.0865 3.01243 13.3415 3.32603 13.5013C3.68255 13.6829 4.14926 13.6829 5.08268 13.6829H14.0827ZM14.0827 13.6829H17.7493C18.2161 13.6829 18.4494 13.6829 18.6277 13.5921C18.7845 13.5122 18.912 13.3847 18.9919 13.2279C19.0827 13.0497 19.0827 12.8163 19.0827 12.3496V10.0686C19.0827 9.86474 19.0827 9.76282 19.0597 9.66692C19.0392 9.58189 19.0056 9.5006 18.9599 9.42604C18.9083 9.34194 18.8363 9.26988 18.6922 9.12575L16.9732 7.4068C16.8291 7.26267 16.757 7.19061 16.6729 7.13908C16.5984 7.09339 16.5171 7.05971 16.432 7.0393C16.3361 7.01628 16.2342 7.01628 16.0304 7.01628H14.0827M8.24935 15.7663C8.24935 16.9169 7.31661 17.8496 6.16602 17.8496C5.01542 17.8496 4.08268 16.9169 4.08268 15.7663C4.08268 14.6157 5.01542 13.6829 6.16602 13.6829C7.31661 13.6829 8.24935 14.6157 8.24935 15.7663ZM17.416 15.7663C17.416 16.9169 16.4833 17.8496 15.3327 17.8496C14.1821 17.8496 13.2493 16.9169 13.2493 15.7663C13.2493 14.6157 14.1821 13.6829 15.3327 13.6829C16.4833 13.6829 17.416 14.6157 17.416 15.7663Z"
                  stroke="#1D2433"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-sans text-[16px] font-medium text-black">
            Deliver more than expected
          </p>
          <Separator className="my-2" />
          <p className="font-mono text-[14px] font-normal leading-5 text-[#000000B2]">
            We maintain a relentless commitment to quality and consistency in
            everything we do. Our goal is not just to meet expectations but to
            consistently exceed them, setting a high standard for our work.
          </p>
        </div>

        <div className="rounded-sm bg-[#FFFFFF99] p-[30px] shadow-lg">
          <div className="flex flex-row">
            <div className="mb-5 rounded-sm border p-2.5 shadow-sm">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08268 12.0169L5.39489 17.2657C5.43179 17.4134 5.45024 17.4872 5.47207 17.5516C5.68532 18.1812 6.25228 18.6239 6.91478 18.6781C6.9826 18.6836 7.05868 18.6836 7.21084 18.6836C7.40138 18.6836 7.49665 18.6836 7.57691 18.6758C8.37018 18.5989 8.99796 17.9711 9.0749 17.1778C9.08268 17.0976 9.08268 17.0023 9.08268 16.8118V4.9336M16.166 11.6003C17.7768 11.6003 19.0827 10.2944 19.0827 8.6836C19.0827 7.07277 17.7768 5.76693 16.166 5.76693M9.29101 4.9336H6.16602C4.09495 4.9336 2.41601 6.61253 2.41602 8.6836C2.41602 10.7547 4.09495 12.4336 6.16602 12.4336H9.29102C10.763 12.4336 12.5637 13.2227 13.9529 13.98C14.7634 14.4218 15.1686 14.6427 15.434 14.6102C15.6801 14.58 15.8662 14.4695 16.0104 14.2679C16.166 14.0504 16.166 13.6153 16.166 12.745V4.62217C16.166 3.75193 16.166 3.31681 16.0104 3.09934C15.8662 2.89769 15.6801 2.78718 15.434 2.75704C15.1686 2.72454 14.7634 2.94543 13.9529 3.38723C12.5637 4.14453 10.763 4.9336 9.29101 4.9336Z"
                  stroke="#1D2433"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-sans text-[16px] font-medium text-black">
            Communication x 3
          </p>
          <Separator className="my-2" />
          <p className="font-mono text-[14px] font-normal leading-5 text-[#000000B2]">
            Being a remote team, we understand the importance of effective
            communication. We emphasize it not just once, but threefold, to
            foster transparency, collaboration, and clarity among our team
            members.
          </p>
        </div>

        <div className="rounded-sm bg-[#FFFFFF99] p-[30px] shadow-lg">
          <div className="flex flex-row">
            <div className="mb-5 rounded-sm border p-2.5 shadow-sm">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.24935 14.9329H3.66602M6.16602 10.3496H2.41602M8.24935 5.76628H4.08268M14.916 2.84961L9.41899 10.5454C9.17568 10.8861 9.05403 11.0564 9.0593 11.1984C9.06388 11.322 9.12316 11.4372 9.2211 11.5128C9.33358 11.5996 9.54288 11.5996 9.96147 11.5996H14.0827L13.2493 17.8496L18.7464 10.1538C18.9897 9.81314 19.1113 9.64283 19.1061 9.50084C19.1015 9.37721 19.0422 9.26201 18.9443 9.18643C18.8318 9.09961 18.6225 9.09961 18.2039 9.09961H14.0827L14.916 2.84961Z"
                  stroke="#1D2433"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-sans text-[16px] font-medium text-black">
            Be proactive and accountable
          </p>
          <Separator className="my-2" />
          <p className="font-mono text-[14px] font-normal leading-5 text-[#000000B2]">
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
