import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";
import cn from "clsx";
import {
  ArrowRightIcon,
  DiscordIcon,
  GitHubIcon,
  Icons,
  Logos,
  TextButton,
  TwitterIcon,
} from "@instill-ai/design-system";

import { Nullable } from "@/types/instill";

export type CommunityBlockProps = {
  name: "GitHub" | "Discord" | "Twitter";
  title: string;
  link: string;
  linkText: string;
};

export const CommunityBlock = ({
  name,
  title,
  link,
  linkText,
}: CommunityBlockProps) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] =
    useState<Nullable<number>>(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef && containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight);
      }
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  let croppedIcon: Nullable<ReactNode> = null;
  let icon: Nullable<ReactNode> = null;
  const iconProp = {
    width: "w-[30px]",
    height: "h-[30px]",
    position: "my-auto",
    color: "fill-white",
  };
  const croppedIconStyle =
    "absolute top-1/2 -right-0 -translate-y-1/2 fill-white";
  let blockColor: Nullable<string> = null;

  switch (name) {
    case "Discord":
      blockColor = "bg-[#5865F2]";
      icon = <DiscordIcon {...iconProp} />;
      croppedIcon = (
        <svg
          viewBox="-12 0 30 30"
          style={
            containerHeight
              ? {
                  width: `${containerHeight * 1.1}px`,
                  height: `${containerHeight * 1.1}px`,
                }
              : {}
          }
          className={croppedIconStyle}
        >
          <path d="M23.3175 7.49315C21.7613 6.79042 20.1192 6.28887 18.4321 6.00103C18.4168 5.99849 18.4011 6.00068 18.3871 6.00729C18.3732 6.01389 18.3616 6.0246 18.3541 6.03792C18.1426 6.4069 17.9086 6.88951 17.7451 7.26734C15.9265 6.99579 14.0767 6.99579 12.2582 7.26734C12.0758 6.84644 11.8695 6.43599 11.6402 6.03792C11.6325 6.02474 11.6209 6.01416 11.607 6.00758C11.5931 6.00099 11.5774 5.99871 11.5622 6.00103C9.87478 6.2877 8.23249 6.78929 6.67671 7.49315C6.6634 7.49815 6.65227 7.50754 6.64522 7.51972C3.53425 12.0935 2.68076 16.5551 3.09925 20.9607C3.10075 20.9813 3.11425 21.002 3.13075 21.0153C4.94233 22.3356 6.96861 23.3437 9.12319 23.9966C9.1384 24.0013 9.15475 24.0011 9.16985 23.9961C9.18496 23.991 9.19804 23.9814 9.20719 23.9685C9.66918 23.3487 10.0802 22.6948 10.4342 22.0071C10.4391 21.9977 10.4418 21.9874 10.4423 21.9769C10.4428 21.9663 10.441 21.9558 10.4371 21.946C10.4331 21.9362 10.427 21.9274 10.4193 21.9201C10.4115 21.9128 10.4023 21.9072 10.3922 21.9038C9.74593 21.6594 9.12004 21.3658 8.5202 21.0256C8.50924 21.0194 8.50002 21.0106 8.49338 21C8.48674 20.9894 8.48287 20.9773 8.48213 20.9649C8.48138 20.9524 8.48379 20.94 8.48912 20.9287C8.49446 20.9174 8.50256 20.9076 8.5127 20.9002C8.63869 20.8072 8.76469 20.7098 8.88469 20.6124C8.89529 20.604 8.90801 20.5986 8.92149 20.5968C8.93496 20.5949 8.94869 20.5968 8.96119 20.602C12.8896 22.3672 17.1421 22.3672 21.0226 20.602C21.0355 20.5963 21.0498 20.5943 21.0638 20.5961C21.0778 20.5979 21.0911 20.6036 21.1021 20.6124C21.2221 20.7098 21.3481 20.8072 21.4741 20.9002C21.4843 20.9075 21.4925 20.9172 21.4979 20.9284C21.5034 20.9397 21.5059 20.952 21.5053 20.9645C21.5047 20.9769 21.501 20.989 21.4945 20.9997C21.488 21.0103 21.4789 21.0192 21.4681 21.0256C20.8696 21.3688 20.2429 21.6621 19.5946 21.9023C19.5845 21.9061 19.5754 21.9119 19.5679 21.9194C19.5603 21.9269 19.5544 21.9359 19.5505 21.9458C19.5467 21.9557 19.5451 21.9662 19.5457 21.9768C19.5463 21.9874 19.5491 21.9977 19.5541 22.0071C19.9141 22.6934 20.3266 23.3487 20.7796 23.9685C20.7887 23.9814 20.8018 23.991 20.8169 23.9961C20.832 24.0011 20.8484 24.0013 20.8636 23.9966C23.0218 23.3458 25.0513 22.3375 26.865 21.0153C26.874 21.009 26.8815 21.0009 26.887 20.9914C26.8924 20.982 26.8957 20.9715 26.8965 20.9607C27.3975 15.8674 26.058 11.4426 23.3475 7.52119C23.3448 7.51472 23.3407 7.50888 23.3356 7.50405C23.3304 7.49922 23.3243 7.4955 23.3175 7.49315V7.49315ZM11.0207 18.2775C9.83718 18.2775 8.86369 17.209 8.86369 15.8984C8.86369 14.5863 9.81918 13.5177 11.0207 13.5177C12.2312 13.5177 13.1956 14.5951 13.1776 15.8984C13.1776 17.209 12.2222 18.2775 11.0207 18.2775ZM18.9946 18.2775C17.8126 18.2775 16.8376 17.209 16.8376 15.8984C16.8376 14.5863 17.7931 13.5177 18.9946 13.5177C20.2051 13.5177 21.1711 14.5951 21.1516 15.8984C21.1516 17.209 20.2051 18.2775 18.9946 18.2775Z" />
        </svg>
      );

      break;
    case "GitHub":
      blockColor = "bg-[#333333]";
      icon = <GitHubIcon {...iconProp} />;
      croppedIcon = (
        <svg
          viewBox="-12 0 30 30"
          style={
            containerHeight
              ? {
                  width: `${containerHeight * 1.1}px`,
                  height: `${containerHeight * 1.1}px`,
                }
              : {}
          }
          className={croppedIconStyle}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 4C8.9225 4 4 8.8176 4 14.7656C4 19.5294 7.14875 23.553 11.5212 24.9794C12.0712 25.0736 12.2775 24.7507 12.2775 24.4681C12.2775 24.2124 12.2638 23.3646 12.2638 22.463C9.5 22.9609 8.785 21.8036 8.565 21.198C8.44125 20.8885 7.905 19.9331 7.4375 19.6774C7.0525 19.4755 6.5025 18.9776 7.42375 18.9642C8.29 18.9507 8.90875 19.7447 9.115 20.0676C10.105 21.6959 11.6863 21.2384 12.3188 20.9558C12.415 20.256 12.7037 19.785 13.02 19.5159C10.5725 19.2468 8.015 18.3182 8.015 14.2004C8.015 13.0296 8.44125 12.0607 9.1425 11.3071C9.0325 11.038 8.6475 9.93453 9.2525 8.45426C9.2525 8.45426 10.1737 8.17166 12.2775 9.55773C13.1575 9.31551 14.0925 9.19439 15.0275 9.19439C15.9625 9.19439 16.8975 9.31551 17.7775 9.55773C19.8813 8.15821 20.8025 8.45426 20.8025 8.45426C21.4075 9.93453 21.0225 11.038 20.9125 11.3071C21.6138 12.0607 22.04 13.0162 22.04 14.2004C22.04 18.3317 19.4688 19.2468 17.0213 19.5159C17.42 19.8523 17.7638 20.4983 17.7638 21.5075C17.7638 22.9474 17.75 24.1047 17.75 24.4681C17.75 24.7507 17.9563 25.0871 18.5063 24.9794C22.8512 23.553 26 19.5159 26 14.7656C26 8.8176 21.0775 4 15 4Z"
          />
        </svg>
      );
      break;
    default:
      blockColor = "bg-[#1DA1F2]";
      icon = <Logos.TwitterLight className="my-auto h-[25px] w-[25px] p-1" />;
      croppedIcon = (
        <div className="twitter-icon-comunity absolute top-0 h-[250px] xl:left-[163px]">
          <svg
            width="196"
            height="241"
            viewBox="0 0 196 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <g clipPath="url(#clip0_4982_101726)">
                <path
                  d="M158.897 100.049L258.291 -15.488H234.738L148.434 84.8316L79.5033 -15.488H0L104.237 136.213L0 257.372H23.5545L114.694 151.431L187.489 257.372H266.993L158.891 100.049H158.897ZM126.636 137.549L116.074 122.443L32.0416 2.24348H68.2199L136.035 99.2487L146.597 114.355L234.749 240.447H198.57L126.636 137.555V137.549Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4982_101726">
                <rect
                  width="266.993"
                  height="273"
                  fill="white"
                  transform="translate(0 -15.488)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[240px] w-full cursor-pointer flex-col p-5 hover:shadow-instill-solid-10-white",
        blockColor
      )}
      onClick={() => router.push(link)}
    >
      <div className="z-10 mb-auto flex w-1/2 flex-col gap-y-2.5">
        <div className="flex flex-col gap-x-2">
          {icon}
          {/* <div className="my-auto text-base font-normal uppercase text-white">
            {name}
          </div> */}
        </div>
        <h3 className="font-mono text-2xl font-medium text-white">{title}</h3>
      </div>
      <TextButton
        type="button"
        color="primary"
        itemGapX="gap-x-6"
        padding="px-2.5 py-[5px]"
        position="mt-auto z-10"
        endIcon={
          <ArrowRightIcon
            position="my-auto"
            width="w-5"
            height="h-5"
            color="fill-white"
          />
        }
      >
        <p className="text-white text-instill-body-normal">{linkText}</p>
      </TextButton>
      {croppedIcon}
    </div>
  );
};
