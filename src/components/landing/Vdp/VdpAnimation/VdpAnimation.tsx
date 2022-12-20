import { useEffect, useRef } from "react";
import anime, { AnimeTimelineInstance } from "animejs";
import { Nullable } from "@/types/instill";

type AnimateItem = {
  id: string;
  offset: number;
};

// We haven't found a way to programmatically calculate the duration of each
// animation, right now we just calculate them rougly and adjust the style
// according to the result.

export const VdpAnimation = () => {
  const itemAnimationRef = useRef<Nullable<AnimeTimelineInstance>>(null);
  const sourceArrowAnimationRef = useRef<Nullable<AnimeTimelineInstance>>(null);
  const destinationArrowAnimationRef =
    useRef<Nullable<AnimeTimelineInstance>>(null);

  useEffect(() => {
    const makeItemAnimation = () => {
      if (itemAnimationRef.current) {
        itemAnimationRef.current = null;
      }

      const sourceItems: AnimateItem[] = [
        { id: "#source_item_0", offset: 0 },
        { id: "#source_item_1", offset: 200 },
        { id: "#source_item_2", offset: 400 },
        { id: "#source_item_3", offset: 600 },
        { id: "#source_item_4", offset: 800 },
        { id: "#source_item_5", offset: 1000 },
        { id: "#source_item_6", offset: 1200 },
        { id: "#source_item_7", offset: 1400 },
        { id: "#source_item_8", offset: 1600 },
        { id: "#source_item_9", offset: 1800 },
      ];

      const destinationItem: AnimateItem[] = [
        { id: "#destination_item_0", offset: 2000 },
        { id: "#destination_item_1", offset: 2200 },
        { id: "#destination_item_2", offset: 2400 },
        { id: "#destination_item_3", offset: 2600 },
        { id: "#destination_item_4", offset: 2800 },
        { id: "#destination_item_5", offset: 3000 },
        { id: "#destination_item_6", offset: 3200 },
        { id: "#destination_item_7", offset: 3400 },
        { id: "#destination_item_8", offset: 3600 },
        { id: "#destination_item_9", offset: 3800 },
      ];

      itemAnimationRef.current = anime.timeline({
        duration: 2000,
        easing: "linear",
        complete: () => {
          if (itemAnimationRef.current) {
            itemAnimationRef.current.restart();
          }
        },
      });

      const addSourceItemAnimation = (item: AnimateItem) => {
        if (!itemAnimationRef.current) {
          return;
        }

        // Set the initial value of the item
        anime.set(item.id, { filter: "brightness(100%)", opacity: 100 });

        itemAnimationRef.current.add(
          {
            targets: item.id,
            translateX: 211,
            filter: [
              {
                value: "brightness(100%)",
              },
              {
                value: "brightness(90%)",
              },
              {
                value: "brightness(80%)",
              },
              {
                value: "brightness(60%)",
              },
              {
                value: "brightness(50%)",
              },
            ],
            opacity: [
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 0,
              },
            ],
            translateY: -122,
          },
          item.offset
        );
      };

      const addDestinationItemAnimation = (item: AnimateItem) => {
        if (!itemAnimationRef.current) {
          return;
        }

        // Set the initial value of the item
        anime.set(item.id, { filter: "brightness(100%)", opacity: 0 });
        itemAnimationRef.current.add(
          {
            targets: item.id,
            translateX: 211,
            translateY: 122,
            filter: [
              {
                value: "brightness(100%)",
              },
              {
                value: "brightness(90%)",
              },
              {
                value: "brightness(80%)",
              },
              {
                value: "brightness(60%)",
              },
              {
                value: "brightness(50%)",
              },
            ],
            opacity: [
              {
                value: 0,
              },
              {
                value: 90,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 100,
              },
              {
                value: 90,
              },
              {
                value: 0,
              },
            ],
            direction: "reverse",
          },
          item.offset
        );
      };

      for (const item of sourceItems) {
        addSourceItemAnimation(item);
      }

      for (const item of destinationItem) {
        addDestinationItemAnimation(item);
      }
    };

    const makeSourceArrowAnimation = () => {
      if (itemAnimationRef.current) {
        sourceArrowAnimationRef.current = null;
      }

      const sourceArrowCounts = 10;
      const duration = 6200;
      const delay = duration / sourceArrowCounts;

      sourceArrowAnimationRef.current = anime.timeline({
        duration: delay,
        complete: () => {
          if (sourceArrowAnimationRef.current) {
            sourceArrowAnimationRef.current.restart();
          }
        },
      });

      for (let i = 0; i < sourceArrowCounts; i++) {
        sourceArrowAnimationRef.current.add({
          complete: () => {
            anime({
              targets: `#source_conveyor_arrow_${i}`,
              duration: duration,
              translateX: [
                {
                  value: 0,
                },
                {
                  value: 224,
                },
                {
                  value: 0,
                },
              ],
              translateY: [
                {
                  value: 0,
                },
                {
                  value: -131,
                },
                {
                  value: 0,
                },
              ],
              opacity: [
                {
                  value: 100,
                },
                {
                  value: 0,
                },
                {
                  value: 0,
                },
              ],
              easing: "linear",
            });
          },
        });
      }
    };

    // Because we don't want destination arrow show up at the start.
    // We move the destination arrow to the end of their animation and reverse
    // the cycle of it. We first move to the beginning from the end and back to
    // the end. This is a reverse cycle compare to the source arrow.

    const makeDestinationAnimation = () => {
      if (itemAnimationRef.current) {
        destinationArrowAnimationRef.current = null;
      }

      const destinationArrowCounts = 10;
      const duration = 6200;
      const delay = duration / destinationArrowCounts;

      destinationArrowAnimationRef.current = anime.timeline({
        duration: delay,
        complete: () => {
          if (destinationArrowAnimationRef.current) {
            destinationArrowAnimationRef.current.restart();
          }
        },
      });

      for (let i = 0; i < destinationArrowCounts; i++) {
        destinationArrowAnimationRef.current.add({
          complete: () => {
            anime({
              targets: `#destination_conveyor_arrow_${i}`,
              duration: duration,
              translateX: [
                {
                  value: 0,
                },
                {
                  value: -221,
                },
                {
                  value: 0,
                },
              ],
              translateY: [
                {
                  value: 0,
                },
                {
                  value: -127,
                },
                {
                  value: 0,
                },
              ],
              opacity: [
                {
                  value: 0,
                },
                {
                  value: 0,
                },
                {
                  value: 100,
                },
              ],
              easing: "linear",
            });
          },
        });
      }
    };

    makeItemAnimation();
    makeSourceArrowAnimation();
    makeDestinationAnimation();
  }, []);

  return (
    <>
      <style jsx global>
        {`
          /**
           * The floating animation of the model_kernel 
           * - Because we let the kernel float up 40px, we need to scale
           *   the trajectory for 40px too. And the original length of the 
           *   trajectory is 40px, so the scale will be 2x.
           */

          #model_kernel {
            animation: float-40 4s ease-in-out infinite;
          }

          @keyframes scale-y-2 {
            0% {
              transform: scaleY(1);
              strokedasharray: 7 3;
            }
            50% {
              transform: scaleY(2);
              strokedasharray: 5 5;
            }
            100% {
              transform: scaleY(1);
              strokedasharray: 7 3;
            }
          }

          #middle_trajectory > line {
            transform-origin: 0 100%;
            transform-box: fill-box;
            animation: dash 45s linear infinite,
              scale-y-2 4s ease-in-out infinite;
          }

          @keyframes dash {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 1000;
            }
          }

          /**
           * We will animate the brightness of the source_item, so we 
           * need to give it the initial value
           */

          /**
           *  Hide destination items at the first place and use
           *  animate.js to change their opacity
           */

          #destination_item_0,
          #destination_item_1,
          #destination_item_2,
          #destination_item_3,
          #destination_item_4,
          #destination_item_5,
          #destination_item_6,
          #destination_item_7,
          #destination_item_8,
          #destination_item_9 {
            opacity: 0;
            filter: brightness(100%);
          }

          #destination_conveyor_arrow_0,
          #destination_conveyor_arrow_1,
          #destination_conveyor_arrow_2,
          #destination_conveyor_arrow_3,
          #destination_conveyor_arrow_4,
          #destination_conveyor_arrow_5,
          #destination_conveyor_arrow_6,
          #destination_conveyor_arrow_7,
          #destination_conveyor_arrow_8,
          #destination_conveyor_arrow_9 {
            opacity: 0;
          }

          /**
           * Animation of the floating cube
          */

          #cube_1 {
            animation: float-20 6s ease-in-out infinite;
          }
          #cube_5 {
            animation: float-40 6s ease-in-out infinite;
          }
          #cube_6 {
            animation: float-40 6s ease-in-out infinite;
          }
          #cube_7 {
            animation: float-20 3s ease-in-out infinite;
          }
          #cube_12 {
            animation: float-40 8s ease-in-out infinite;
          }
          #cube_14 {
            animation: float-10 6s ease-in-out infinite;
          }
          #cube_19 {
            animation: float-80 5s ease-in-out infinite;
          }

          @keyframes float-10 {
            0% {
              transform: translatey(0px);
            }
            50% {
              transform: translatey(-10px);
            }
            100% {
              transform: translatey(0px);
            }
          }

          @keyframes float-20 {
            0% {
              transform: translatey(0px);
            }
            50% {
              transform: translatey(-20px);
            }
            100% {
              transform: translatey(0px);
            }
          }

          @keyframes float-40 {
            0% {
              transform: translatey(0px);
            }
            50% {
              transform: translatey(-40px);
            }
            100% {
              transform: translatey(0px);
            }
          }

          @keyframes float-80 {
            0% {
              transform: translatey(0px);
            }
            50% {
              transform: translatey(-80px);
            }
            100% {
              transform: translatey(0px);
            }
          }

          /**
           * Animation about the kernel changing its color
          */

          #kernel_0 {
            animation: fillColor-0 6s step-start infinite;
          }
          #kernel_1 {
            animation: fillColor-0-1 6s step-start infinite;
          }
          #kernel_2 {
            animation: fillColor-1-2 6s step-start infinite;
          }
          #kernel_3 {
            animation: fillColor-2 6s step-start infinite;
          }
          #kernel_4 {
            animation: fillColor-0-3 6s step-start infinite;
          }
          #kernel_5 {
            animation: fillColor-0-1-3-4 6s step-start infinite;
          }
          #kernel_6 {
            animation: fillColor-1-2-4-5 6s step-start infinite;
          }
          #kernel_7 {
            animation: fillColor-2-5 6s step-start infinite;
          }
          #kernel_8 {
            animation: fillColor-3-6 6s step-start infinite;
          }
          #kernel_9 {
            animation: fillColor-3-4-6-7 6s step-start infinite;
          }
          #kernel_10 {
            animation: fillColor-4-5-7-8 6s step-start infinite;
          }
          #kernel_11 {
            animation: fillColor-5-8 6s step-start infinite;
          }
          #kernel_12 {
            animation: fillColor-6 6s step-start infinite;
          }
          #kernel_13 {
            animation: fillColor-6-7 6s step-start infinite;
          }
          #kernel_14 {
            animation: fillColor-7-8 6s step-start infinite;
          }
          #kernel_15 {
            animation: fillColor-8 6s step-start infinite;
          }
          @keyframes fillColor-0 {
            11% {
              fill: #28f67e;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-0-1 {
            11% {
              fill: #28f67e;
            }
            22% {
              fill: #28f67e;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-0-1-3-4 {
            11% {
              fill: #28f67e;
            }
            22% {
              fill: #28f67e;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #28f67e;
            }
            55% {
              fill: #28f67e;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-0-3 {
            11% {
              fill: #28f67e;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #28f67e;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-1-2 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #28f67e;
            }
            33% {
              fill: #28f67e;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-1-2-4-5 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #28f67e;
            }
            33% {
              fill: #28f67e;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #28f67e;
            }
            66% {
              fill: #28f67e;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-2 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #28f67e;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-2-5 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #28f67e;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #28f67e;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-3-6 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #28f67e;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #28f67e;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-3-4-6-7 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #28f67e;
            }
            55% {
              fill: #28f67e;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #28f67e;
            }
            88% {
              fill: #28f67e;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-4-5-7-8 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #28f67e;
            }
            66% {
              fill: #28f67e;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #28f67e;
            }
            99% {
              fill: #28f67e;
            }
          }
          @keyframes fillColor-5-8 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #28f67e;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #28f67e;
            }
          }
          @keyframes fillColor-6 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #28f67e;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-6-7 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #28f67e;
            }
            88% {
              fill: #28f67e;
            }
            99% {
              fill: #f6f6f6;
            }
          }
          @keyframes fillColor-7-8 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #28f67e;
            }
            99% {
              fill: #28f67e;
            }
          }
          @keyframes fillColor-8 {
            11% {
              fill: #f6f6f6;
            }
            22% {
              fill: #f6f6f6;
            }
            33% {
              fill: #f6f6f6;
            }
            44% {
              fill: #f6f6f6;
            }
            55% {
              fill: #f6f6f6;
            }
            66% {
              fill: #f6f6f6;
            }
            77% {
              fill: #f6f6f6;
            }
            88% {
              fill: #f6f6f6;
            }
            99% {
              fill: #28f67e;
            }
          }
        `}
      </style>
      <svg
        width="1128"
        height="612"
        viewBox="0 0 1128 612"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <g id="Frame 715">
          <g clipPath="url(#clip0_3013_97113)">
            <rect width="1128" height="612" fill="#F7F7F7" />
            <g id="floor">
              <path
                id="Rectangle 9"
                d="M270.431 389.071C270.192 388.933 270.192 388.71 270.431 388.572L340.709 348L411.237 388.716C411.476 388.854 411.476 389.078 411.237 389.216L340.959 429.787L270.431 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 33"
                d="M270.431 471.071C270.192 470.933 270.192 470.709 270.431 470.571L340.709 430L411.237 470.716C411.476 470.854 411.476 471.078 411.237 471.216L340.959 511.787L270.431 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 103"
                d="M270.431 553.071C270.192 552.933 270.192 552.709 270.431 552.571L340.709 512L411.237 552.716C411.476 552.854 411.476 553.078 411.237 553.216L340.959 593.787L270.431 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 115"
                d="M270.431 635.071C270.192 634.933 270.192 634.709 270.431 634.571L340.709 594L411.237 634.716C411.476 634.854 411.476 635.078 411.237 635.216L340.959 675.787L270.431 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 13"
                d="M270.431 307.072C270.192 306.933 270.192 306.71 270.431 306.572L340.709 266L411.237 306.716C411.476 306.854 411.476 307.078 411.237 307.216L340.959 347.787L270.431 307.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 17"
                d="M270.431 225.072C270.192 224.933 270.192 224.71 270.431 224.572L340.709 184L411.237 224.716C411.476 224.854 411.476 225.078 411.237 225.216L340.959 265.787L270.431 225.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 21"
                d="M270.431 143.071C270.192 142.933 270.192 142.709 270.431 142.571L340.709 102L411.237 142.716C411.476 142.854 411.476 143.078 411.237 143.216L340.959 183.787L270.431 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 25"
                d="M270.431 61.0712C270.192 60.9331 270.192 60.7093 270.431 60.5712L340.709 20L411.237 60.7157C411.476 60.8538 411.476 61.0776 411.237 61.2157L340.959 101.787L270.431 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 29"
                d="M270.431 -20.9288C270.192 -21.0668 270.192 -21.2907 270.431 -21.4287L340.709 -62L411.237 -21.2842C411.476 -21.1462 411.476 -20.9223 411.237 -20.7843L340.959 19.787L270.431 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 11"
                d="M552.431 389.071C552.192 388.933 552.192 388.71 552.431 388.572L622.709 348L693.237 388.716C693.476 388.854 693.476 389.078 693.237 389.216L622.959 429.787L552.431 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 58"
                d="M693.433 389.071C693.194 388.933 693.194 388.71 693.433 388.572L763.711 348L834.239 388.716C834.478 388.854 834.478 389.078 834.239 389.216L763.961 429.787L693.433 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 65"
                d="M834.435 389.071C834.196 388.933 834.196 388.71 834.435 388.572L904.713 348L975.241 388.716C975.48 388.854 975.48 389.078 975.241 389.216L904.963 429.787L834.435 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 72"
                d="M975.437 389.071C975.198 388.933 975.198 388.709 975.437 388.571L1045.71 348L1116.24 388.716C1116.48 388.854 1116.48 389.078 1116.24 389.216L1045.96 429.787L975.437 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 89"
                d="M1116.43 389.071C1116.19 388.933 1116.19 388.709 1116.43 388.571L1186.71 348L1257.24 388.716C1257.48 388.854 1257.48 389.078 1257.24 389.216L1186.96 429.787L1116.43 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 34"
                d="M552.431 471.071C552.192 470.933 552.192 470.709 552.431 470.571L622.709 430L693.237 470.716C693.476 470.854 693.476 471.078 693.237 471.216L622.959 511.787L552.431 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 104"
                d="M552.431 553.071C552.192 552.933 552.192 552.709 552.431 552.571L622.709 512L693.237 552.716C693.476 552.854 693.476 553.078 693.237 553.216L622.959 593.787L552.431 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 116"
                d="M552.431 635.071C552.192 634.933 552.192 634.709 552.431 634.571L622.709 594L693.237 634.716C693.476 634.854 693.476 635.078 693.237 635.216L622.959 675.787L552.431 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 59"
                d="M693.433 471.071C693.194 470.933 693.194 470.709 693.433 470.571L763.711 430L834.239 470.716C834.478 470.854 834.478 471.078 834.239 471.216L763.961 511.787L693.433 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 105"
                d="M693.433 553.071C693.194 552.933 693.194 552.709 693.433 552.571L763.711 512L834.239 552.716C834.478 552.854 834.478 553.078 834.239 553.216L763.961 593.787L693.433 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 117"
                d="M693.433 635.071C693.194 634.933 693.194 634.709 693.433 634.571L763.711 594L834.239 634.716C834.478 634.854 834.478 635.078 834.239 635.216L763.961 675.787L693.433 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 66"
                d="M834.435 471.071C834.196 470.933 834.196 470.709 834.435 470.571L904.713 430L975.241 470.716C975.48 470.854 975.48 471.078 975.241 471.216L904.963 511.787L834.435 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 106"
                d="M834.435 553.071C834.196 552.933 834.196 552.709 834.435 552.571L904.713 512L975.241 552.716C975.48 552.854 975.48 553.078 975.241 553.216L904.963 593.787L834.435 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 118"
                d="M834.435 635.071C834.196 634.933 834.196 634.709 834.435 634.571L904.713 594L975.241 634.716C975.48 634.854 975.48 635.078 975.241 635.216L904.963 675.787L834.435 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 73"
                d="M975.437 471.071C975.198 470.933 975.198 470.709 975.437 470.571L1045.71 430L1116.24 470.716C1116.48 470.854 1116.48 471.078 1116.24 471.216L1045.96 511.787L975.437 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 107"
                d="M975.437 553.071C975.198 552.933 975.198 552.709 975.437 552.571L1045.71 512L1116.24 552.716C1116.48 552.854 1116.48 553.078 1116.24 553.216L1045.96 593.787L975.437 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 119"
                d="M975.437 635.071C975.198 634.933 975.198 634.709 975.437 634.571L1045.71 594L1116.24 634.716C1116.48 634.854 1116.48 635.078 1116.24 635.216L1045.96 675.787L975.437 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 90"
                d="M1116.43 471.071C1116.19 470.933 1116.19 470.709 1116.43 470.571L1186.71 430L1257.24 470.716C1257.48 470.854 1257.48 471.078 1257.24 471.216L1186.96 511.787L1116.43 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 108"
                d="M1116.43 553.071C1116.19 552.933 1116.19 552.709 1116.43 552.571L1186.71 512L1257.24 552.716C1257.48 552.854 1257.48 553.078 1257.24 553.216L1186.96 593.787L1116.43 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 120"
                d="M1116.43 635.071C1116.19 634.933 1116.19 634.709 1116.43 634.571L1186.71 594L1257.24 634.716C1257.48 634.854 1257.48 635.078 1257.24 635.216L1186.96 675.787L1116.43 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 14"
                d="M552.431 307.072C552.192 306.933 552.192 306.71 552.431 306.572L622.709 266L693.237 306.716C693.476 306.854 693.476 307.078 693.237 307.216L622.959 347.787L552.431 307.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 60"
                d="M693.433 307.071C693.194 306.933 693.194 306.71 693.433 306.572L763.711 266L834.239 306.716C834.478 306.854 834.478 307.078 834.239 307.216L763.961 347.787L693.433 307.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 67"
                d="M834.435 307.071C834.196 306.933 834.196 306.71 834.435 306.572L904.713 266L975.241 306.716C975.48 306.854 975.48 307.078 975.241 307.216L904.963 347.787L834.435 307.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 74"
                d="M975.437 307.071C975.198 306.933 975.198 306.709 975.437 306.571L1045.71 266L1116.24 306.716C1116.48 306.854 1116.48 307.078 1116.24 307.216L1045.96 347.787L975.437 307.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 91"
                d="M1116.43 307.071C1116.19 306.933 1116.19 306.709 1116.43 306.571L1186.71 266L1257.24 306.716C1257.48 306.854 1257.48 307.078 1257.24 307.216L1186.96 347.787L1116.43 307.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 18"
                d="M552.431 225.072C552.192 224.933 552.192 224.71 552.431 224.572L622.709 184L693.237 224.716C693.476 224.854 693.476 225.078 693.237 225.216L622.959 265.787L552.431 225.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 61"
                d="M693.433 225.071C693.194 224.933 693.194 224.71 693.433 224.572L763.711 184L834.239 224.716C834.478 224.854 834.478 225.078 834.239 225.216L763.961 265.787L693.433 225.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 68"
                d="M834.435 225.071C834.196 224.933 834.196 224.71 834.435 224.572L904.713 184L975.241 224.716C975.48 224.854 975.48 225.078 975.241 225.216L904.963 265.787L834.435 225.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 75"
                d="M975.437 225.071C975.198 224.933 975.198 224.709 975.437 224.571L1045.71 184L1116.24 224.716C1116.48 224.854 1116.48 225.078 1116.24 225.216L1045.96 265.787L975.437 225.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 92"
                d="M1116.43 225.071C1116.19 224.933 1116.19 224.709 1116.43 224.571L1186.71 184L1257.24 224.716C1257.48 224.854 1257.48 225.078 1257.24 225.216L1186.96 265.787L1116.43 225.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 22"
                d="M552.431 143.071C552.192 142.933 552.192 142.709 552.431 142.571L622.709 102L693.237 142.716C693.476 142.854 693.476 143.078 693.237 143.216L622.959 183.787L552.431 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 62"
                d="M693.433 143.071C693.194 142.933 693.194 142.709 693.433 142.571L763.711 102L834.239 142.716C834.478 142.854 834.478 143.078 834.239 143.216L763.961 183.787L693.433 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 69"
                d="M834.435 143.071C834.196 142.933 834.196 142.709 834.435 142.571L904.713 102L975.241 142.716C975.48 142.854 975.48 143.078 975.241 143.216L904.963 183.787L834.435 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 76"
                d="M975.437 143.071C975.198 142.933 975.198 142.709 975.437 142.571L1045.71 102L1116.24 142.716C1116.48 142.854 1116.48 143.078 1116.24 143.216L1045.96 183.787L975.437 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 93"
                d="M1116.43 143.071C1116.19 142.933 1116.19 142.709 1116.43 142.571L1186.71 102L1257.24 142.716C1257.48 142.854 1257.48 143.078 1257.24 143.216L1186.96 183.787L1116.43 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 26"
                d="M552.431 61.0712C552.192 60.9332 552.192 60.7093 552.431 60.5713L622.709 20L693.237 60.7158C693.476 60.8538 693.476 61.0777 693.237 61.2157L622.959 101.787L552.431 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 63"
                d="M693.433 61.0712C693.194 60.9332 693.194 60.7093 693.433 60.5713L763.711 20L834.239 60.7158C834.478 60.8538 834.478 61.0777 834.239 61.2157L763.961 101.787L693.433 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 70"
                d="M834.435 61.0712C834.196 60.9332 834.196 60.7093 834.435 60.5713L904.713 20L975.241 60.7158C975.48 60.8538 975.48 61.0777 975.241 61.2157L904.963 101.787L834.435 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 77"
                d="M975.437 61.0712C975.198 60.9332 975.198 60.7093 975.437 60.5713L1045.71 20L1116.24 60.7158C1116.48 60.8538 1116.48 61.0777 1116.24 61.2157L1045.96 101.787L975.437 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 94"
                d="M1116.43 61.0712C1116.19 60.9332 1116.19 60.7093 1116.43 60.5713L1186.71 20L1257.24 60.7158C1257.48 60.8538 1257.48 61.0777 1257.24 61.2157L1186.96 101.787L1116.43 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 30"
                d="M552.431 -20.9288C552.192 -21.0668 552.192 -21.2907 552.431 -21.4287L622.709 -62L693.237 -21.2842C693.476 -21.1462 693.476 -20.9223 693.237 -20.7843L622.959 19.787L552.431 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 64"
                d="M693.433 -20.9288C693.194 -21.0668 693.194 -21.2907 693.433 -21.4287L763.711 -62L834.239 -21.2842C834.478 -21.1462 834.478 -20.9223 834.239 -20.7843L763.961 19.787L693.433 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 71"
                d="M834.435 -20.9288C834.196 -21.0668 834.196 -21.2907 834.435 -21.4287L904.713 -62L975.241 -21.2842C975.48 -21.1462 975.48 -20.9223 975.241 -20.7843L904.963 19.787L834.435 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 78"
                d="M975.437 -20.9288C975.198 -21.0668 975.198 -21.2907 975.437 -21.4287L1045.71 -62L1116.24 -21.2842C1116.48 -21.1462 1116.48 -20.9223 1116.24 -20.7843L1045.96 19.787L975.437 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 95"
                d="M1116.43 -20.9288C1116.19 -21.0668 1116.19 -21.2907 1116.43 -21.4287L1186.71 -62L1257.24 -21.2842C1257.48 -21.1462 1257.48 -20.9223 1257.24 -20.7843L1186.96 19.787L1116.43 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 10"
                d="M129.433 389.071C129.194 388.933 129.194 388.71 129.433 388.572L199.711 348L270.239 388.716C270.478 388.854 270.478 389.078 270.239 389.216L199.961 429.787L129.433 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 37"
                d="M-11.567 389.071C-11.8061 388.933 -11.8061 388.71 -11.567 388.572L58.7107 348L129.239 388.716C129.478 388.854 129.478 389.078 129.239 389.216L58.961 429.787L-11.567 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 35"
                d="M129.433 471.071C129.194 470.933 129.194 470.709 129.433 470.571L199.711 430L270.239 470.716C270.478 470.854 270.478 471.078 270.239 471.216L199.961 511.787L129.433 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 110"
                d="M129.433 553.071C129.194 552.933 129.194 552.709 129.433 552.571L199.711 512L270.239 552.716C270.478 552.854 270.478 553.078 270.239 553.216L199.961 593.787L129.433 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 122"
                d="M129.433 635.071C129.194 634.933 129.194 634.709 129.433 634.571L199.711 594L270.239 634.716C270.478 634.854 270.478 635.078 270.239 635.216L199.961 675.787L129.433 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 38"
                d="M-11.567 471.071C-11.8061 470.933 -11.8061 470.709 -11.567 470.571L58.7107 430L129.239 470.716C129.478 470.854 129.478 471.078 129.239 471.216L58.961 511.787L-11.567 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 111"
                d="M-11.567 553.071C-11.8061 552.933 -11.8061 552.709 -11.567 552.571L58.7107 512L129.239 552.716C129.478 552.854 129.478 553.078 129.239 553.216L58.961 593.787L-11.567 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 123"
                d="M-11.567 635.071C-11.8061 634.933 -11.8061 634.709 -11.567 634.571L58.7107 594L129.239 634.716C129.478 634.854 129.478 635.078 129.239 635.216L58.961 675.787L-11.567 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 15"
                d="M129.433 307.072C129.194 306.933 129.194 306.71 129.433 306.572L199.711 266L270.239 306.716C270.478 306.854 270.478 307.078 270.239 307.216L199.961 347.787L129.433 307.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 39"
                d="M-11.567 307.072C-11.8061 306.933 -11.8061 306.71 -11.567 306.572L58.7107 266L129.239 306.716C129.478 306.854 129.478 307.078 129.239 307.216L58.961 347.787L-11.567 307.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 19"
                d="M129.433 225.072C129.194 224.933 129.194 224.71 129.433 224.572L199.711 184L270.239 224.716C270.478 224.854 270.478 225.078 270.239 225.216L199.961 265.787L129.433 225.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 40"
                d="M-11.567 225.072C-11.8061 224.933 -11.8061 224.71 -11.567 224.572L58.7107 184L129.239 224.716C129.478 224.854 129.478 225.078 129.239 225.216L58.961 265.787L-11.567 225.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 23"
                d="M129.433 143.071C129.194 142.933 129.194 142.709 129.433 142.571L199.711 102L270.239 142.716C270.478 142.854 270.478 143.078 270.239 143.216L199.961 183.787L129.433 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 41"
                d="M-11.567 143.071C-11.8061 142.933 -11.8061 142.709 -11.567 142.571L58.7107 102L129.239 142.716C129.478 142.854 129.478 143.078 129.239 143.216L58.961 183.787L-11.567 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 27"
                d="M129.433 61.0712C129.194 60.9332 129.194 60.7093 129.433 60.5713L199.711 20L270.239 60.7158C270.478 60.8538 270.478 61.0777 270.239 61.2157L199.961 101.787L129.433 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 42"
                d="M-11.567 61.0712C-11.8061 60.9332 -11.8061 60.7093 -11.567 60.5713L58.7107 20L129.239 60.7158C129.478 60.8538 129.478 61.0777 129.239 61.2157L58.961 101.787L-11.567 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 31"
                d="M129.433 -20.9288C129.194 -21.0668 129.194 -21.2907 129.433 -21.4287L199.711 -62L270.239 -21.2842C270.478 -21.1462 270.478 -20.9223 270.239 -20.7843L199.961 19.787L129.433 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 43"
                d="M-11.567 -20.9288C-11.8061 -21.0668 -11.8061 -21.2907 -11.567 -21.4287L58.7107 -62L129.239 -21.2842C129.478 -21.1462 129.478 -20.9223 129.239 -20.7843L58.961 19.787L-11.567 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 12"
                d="M411.433 389.071C411.194 388.933 411.194 388.71 411.433 388.572L481.711 348L552.239 388.716C552.478 388.854 552.478 389.078 552.239 389.216L481.961 429.787L411.433 389.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 36"
                d="M411.433 471.071C411.194 470.933 411.194 470.709 411.433 470.571L481.711 430L552.239 470.716C552.478 470.854 552.478 471.078 552.239 471.216L481.961 511.787L411.433 471.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 114"
                d="M411.433 553.071C411.194 552.933 411.194 552.709 411.433 552.571L481.711 512L552.239 552.716C552.478 552.854 552.478 553.078 552.239 553.216L481.961 593.787L411.433 553.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 126"
                d="M411.433 635.071C411.194 634.933 411.194 634.709 411.433 634.571L481.711 594L552.239 634.716C552.478 634.854 552.478 635.078 552.239 635.216L481.961 675.787L411.433 635.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 16"
                d="M411.433 307.072C411.194 306.933 411.194 306.71 411.433 306.572L481.711 266L552.239 306.716C552.478 306.854 552.478 307.078 552.239 307.216L481.961 347.787L411.433 307.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 20"
                d="M411.433 225.072C411.194 224.933 411.194 224.71 411.433 224.572L481.711 184L552.239 224.716C552.478 224.854 552.478 225.078 552.239 225.216L481.961 265.787L411.433 225.072Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 24"
                d="M411.433 143.071C411.194 142.933 411.194 142.709 411.433 142.571L481.711 102L552.239 142.716C552.478 142.854 552.478 143.078 552.239 143.216L481.961 183.787L411.433 143.071Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 28"
                d="M411.433 61.0712C411.194 60.9331 411.194 60.7093 411.433 60.5712L481.711 20L552.239 60.7157C552.478 60.8538 552.478 61.0776 552.239 61.2157L481.961 101.787L411.433 61.0712Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
              <path
                id="Rectangle 32"
                d="M411.433 -20.9288C411.194 -21.0668 411.194 -21.2907 411.433 -21.4287L481.711 -62L552.239 -21.2842C552.478 -21.1462 552.478 -20.9223 552.239 -20.7843L481.961 19.787L411.433 -20.9288Z"
                stroke="#A5A5A5"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
            </g>
            <g id="main_vdp">
              <g id="Magic cube">
                <g id="cube">
                  <g id="Component 8">
                    <path
                      id="Rectangle 3"
                      d="M552.431 293.505C552.192 293.643 551.998 293.531 551.998 293.255L551.998 211.83L622.271 171.25C622.51 171.112 622.704 171.224 622.704 171.5L622.704 252.926L552.431 293.505Z"
                      fill="#A9DAFF"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                    <rect
                      id="Rectangle 5"
                      width="43.0652"
                      height="43.0652"
                      transform="matrix(-4.37114e-08 -1 0.865988 -0.500065 569 264.601)"
                      fill="#0074CA"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Rectangle 4"
                      d="M551.654 293.481C551.845 293.592 552 293.502 552 293.281L552 211.795L481.344 170.995C481.153 170.884 480.998 170.974 480.998 171.195L480.998 252.681L551.654 293.481Z"
                      fill="#FFD600"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                    <rect
                      id="Rectangle 6"
                      width="43.0652"
                      height="43.0652"
                      transform="matrix(4.37114e-08 -1 -0.865988 -0.500065 534.292 264.601)"
                      fill="#CEAD00"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Rectangle 2"
                      d="M481.431 171.071C481.192 170.933 481.192 170.709 481.431 170.571L551.709 130L622.237 170.716C622.476 170.854 622.476 171.078 622.237 171.216L551.959 211.787L481.431 171.071Z"
                      fill="#00F265"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                    <rect
                      id="Rectangle 8"
                      width="51.7521"
                      height="51.7521"
                      transform="matrix(0.866026 -0.5 0.866063 0.499935 507.475 170.533)"
                      fill="#00AA25"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
                <g id="kernel_trajectory">
                  <g id="middle_trajectory">
                    <line
                      id="model_line_7"
                      x1="587"
                      y1="169"
                      x2="587"
                      y2="129"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                    <line
                      id="model_line_6"
                      x1="575.5"
                      y1="175"
                      x2="575.5"
                      y2="135"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                    <line
                      id="model_line_5"
                      x1="563.5"
                      y1="180"
                      x2="563.5"
                      y2="140"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                    <line
                      id="model_line_4"
                      x1="551.5"
                      y1="189"
                      x2="551.5"
                      y2="149"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                    <line
                      id="model_line_3"
                      x1="539.5"
                      y1="180"
                      x2="539.5"
                      y2="140"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                    <line
                      id="model_line_2"
                      x1="527.5"
                      y1="175"
                      x2="527.5"
                      y2="135"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                    <line
                      id="model_line_1"
                      x1="515.5"
                      y1="169"
                      x2="515.5"
                      y2="129"
                      stroke="#28F77E"
                      strokeDasharray="7 3"
                    />
                  </g>
                  <g id="model_kernel">
                    <path
                      id="kernel_15"
                      d="M604.4 92.3657L586.771 102.488L604.4 112.609L622.021 102.395L604.4 92.3657Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                    />
                    <path
                      id="kernel_14"
                      d="M586.771 102.487L569.15 112.609L586.771 122.723L604.4 112.517L586.771 102.487Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_13"
                      d="M569.15 112.609L551.521 122.722L569.15 132.844L586.771 122.638L569.15 112.609Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_12"
                      d="M551.52 122.723L533.899 132.845L551.52 142.967L569.149 132.761L551.52 122.723Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                    />
                    <path
                      id="kernel_11"
                      d="M586.771 82.2437L569.15 92.3655L586.771 102.487L604.4 92.273L586.771 82.2437Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_10"
                      d="M569.15 92.3657L551.521 102.488L569.15 112.609L586.771 102.395L569.15 92.3657Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_9"
                      d="M551.52 102.487L533.899 112.609L551.52 122.723L569.149 112.517L551.52 102.487Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_8"
                      d="M533.9 112.609L516.271 122.722L533.9 132.844L551.521 122.638L533.9 112.609Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_7"
                      d="M569.15 92.3658L586.771 82.2439L569.15 72.1221L551.521 82.328L569.15 92.3658Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_6"
                      d="M551.52 82.2437L533.899 92.3655L551.52 102.487L569.149 92.273L551.52 82.2437Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_5"
                      d="M533.9 92.3657L516.271 102.488L533.9 112.609L551.521 102.395L533.9 92.3657Z"
                      fill="#28F77E"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_4"
                      d="M516.27 102.487L498.649 112.609L516.27 122.723L533.899 112.517L516.27 102.487Z"
                      fill="#28F77E"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_3"
                      d="M551.52 82.2437L569.149 72.1219L551.52 62L533.899 72.2059L551.52 82.2437Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                    />
                    <path
                      id="kernel_2"
                      d="M533.9 92.3658L551.521 82.2439L533.9 72.1221L516.271 82.328L533.9 92.3658Z"
                      fill="#EAFFF3"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_1"
                      d="M516.27 82.2437L498.649 92.3655L516.27 102.487L533.899 92.273L516.27 82.2437Z"
                      fill="#28F77E"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                    />
                    <path
                      id="kernel_0"
                      d="M498.65 92.3657L481.021 102.488L498.65 112.609L516.271 102.395L498.65 92.3657Z"
                      fill="#28F77E"
                      stroke="#2B2B2B"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Rectangle 11_2"
                      d="M551.615 143.093L621.661 102.652C621.9 102.514 622.094 102.626 622.094 102.902L622.093 112.341L552.047 152.782C551.808 152.92 551.615 152.808 551.615 152.532L551.615 143.093Z"
                      fill="#C2FFDC"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Rectangle 12_2"
                      d="M551.592 143.072L481.433 102.566C481.193 102.428 481 102.54 481 102.816L481 112.257L551.16 152.763C551.399 152.902 551.593 152.79 551.593 152.513L551.592 143.072Z"
                      fill="#F3FFF8"
                      stroke="#2B2B2B"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
              <g id="source_conveyor">
                <g id="source_conveyor_arrow">
                  <rect
                    id="Rectangle 18_2"
                    opacity="0.3"
                    width="239.103"
                    height="20.2685"
                    transform="matrix(-0.866044 0.499967 0.866044 0.499967 505.074 241)"
                    fill="#FFDF3A"
                  />
                  <path
                    id="source_conveyor_edge_0"
                    d="M311.001 373L522.001 251"
                    stroke="#FFDF3A"
                    strokeDasharray="7 3"
                  />
                  <path
                    id="source_conveyor_edge_1"
                    d="M313.988 352L505.988 241"
                    stroke="#FFDF3A"
                    strokeDasharray="7 3"
                  />
                  <g id="source_conveyor_arrow_0">
                    <path
                      id="Union"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_1">
                    <path
                      id="Union_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_2">
                    <path
                      id="Union_3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_3">
                    <path
                      id="Union_4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_4">
                    <path
                      id="Union_5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_5">
                    <path
                      id="Union_6"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_6">
                    <path
                      id="Union_7"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_7">
                    <path
                      id="Union_8"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_8">
                    <path
                      id="Union_9"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                  <g id="source_conveyor_arrow_9">
                    <path
                      id="Union_10"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M294.411 368.24L293.604 368.24L293.604 369.171L294.411 369.171L301.592 369.171L293.08 374.085L292.509 374.415L293.65 375.073L294.221 374.744L302.733 369.83L302.733 373.975L302.733 374.441L304.347 374.441L304.347 373.975L304.347 368.705L303.54 368.239L294.411 368.24Z"
                      fill="#FFDF3A"
                    />
                  </g>
                </g>
                <g id="source_conveyor_item">
                  <g id="source_item_0" clipPath="url(#clip1_3013_97113)">
                    <path
                      id="Vector 2"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_11"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M304.694 365.318L309.891 368.318L305.56 358.818L302.864 361.62L301.23 358.318L297.766 361.318L301.23 363.318L304.694 365.318Z"
                      fill="#2B2B2B"
                    />
                    <circle
                      id="Ellipse 2"
                      r="1.5"
                      transform="matrix(0.866025 0.5 7.53359e-05 1 299.93 353.068)"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_1" clipPath="url(#clip2_3013_97113)">
                    <path
                      id="Vector 2_2"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_12"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M304.694 365.318L309.891 368.318L305.56 358.818L302.864 361.62L301.23 358.318L297.766 361.318L301.23 363.318L304.694 365.318Z"
                      fill="#2B2B2B"
                    />
                    <circle
                      id="Ellipse 2_2"
                      r="1.5"
                      transform="matrix(0.866025 0.5 7.53359e-05 1 299.93 353.068)"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_2" clipPath="url(#clip3_3013_97113)">
                    <path
                      id="Vector 2_3"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_13"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M304.694 365.318L309.891 368.318L305.56 358.818L302.864 361.62L301.23 358.318L297.766 361.318L301.23 363.318L304.694 365.318Z"
                      fill="#2B2B2B"
                    />
                    <circle
                      id="Ellipse 2_3"
                      r="1.5"
                      transform="matrix(0.866025 0.5 7.53359e-05 1 299.93 353.068)"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_3" clipPath="url(#clip4_3013_97113)">
                    <path
                      id="Vector 2_4"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_14"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M304.694 365.318L309.891 368.318L305.56 358.818L302.864 361.62L301.23 358.318L297.766 361.318L301.23 363.318L304.694 365.318Z"
                      fill="#2B2B2B"
                    />
                    <circle
                      id="Ellipse 2_4"
                      r="1.5"
                      transform="matrix(0.866025 0.5 7.53359e-05 1 299.93 353.068)"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_4" clipPath="url(#clip5_3013_97113)">
                    <path
                      id="Vector 2_5"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_15"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M306.425 357.317L298.631 352.817L298.631 359.817L306.426 364.317L306.425 361.442L309.024 364.817L309.023 359.817L306.425 360.192L306.425 357.317Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_5" clipPath="url(#clip6_3013_97113)">
                    <path
                      id="Vector 2_6"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_16"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M306.425 357.317L298.631 352.817L298.631 359.817L306.426 364.317L306.425 361.442L309.024 364.817L309.023 359.817L306.425 360.192L306.425 357.317Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_6" clipPath="url(#clip7_3013_97113)">
                    <path
                      id="Vector 2_7"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_17"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M306.425 357.317L298.631 352.817L298.631 359.817L306.426 364.317L306.425 361.442L309.024 364.817L309.023 359.817L306.425 360.192L306.425 357.317Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_7" clipPath="url(#clip8_3013_97113)">
                    <path
                      id="Vector 2_8"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_18"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M306.425 357.317L298.631 352.817L298.631 359.817L306.426 364.317L306.425 361.442L309.024 364.817L309.023 359.817L306.425 360.192L306.425 357.317Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_8" clipPath="url(#clip9_3013_97113)">
                    <path
                      id="Vector 2_9"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_19"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M306.425 357.317L298.631 352.817L298.631 359.817L306.426 364.317L306.425 361.442L309.024 364.817L309.023 359.817L306.425 360.192L306.425 357.317Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <g id="source_item_9" clipPath="url(#clip10_3013_97113)">
                    <path
                      id="Vector 2_10"
                      d="M311.622 372.317L311.62 354.317L306.424 345.317L296.031 339.317L296.033 363.317L311.622 372.317Z"
                      fill="#FFDF3A"
                      stroke="#2B2B2B"
                    />
                    <path
                      id="Union_20"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M306.425 357.317L298.631 352.817L298.631 359.817L306.426 364.317L306.425 361.442L309.024 364.817L309.023 359.817L306.425 360.192L306.425 357.317Z"
                      fill="#2B2B2B"
                    />
                  </g>
                </g>
                <g id="source">
                  <g id="aws_s3">
                    <g id="Frame 604">
                      <g clipPath="url(#clip11_3013_97113)">
                        <path
                          d="M245.654 401.631L176.377 361.631C176.234 361.548 176.118 361.615 176.118 361.781L176.121 443.189L245.484 483.239C245.579 483.294 245.657 483.249 245.657 483.139L245.654 401.631Z"
                          fill="#FFDF3A"
                        />
                        <g id="AWS S3">
                          <g id="AWS S3_2" clipPath="url(#clip12_3013_97113)">
                            <path
                              id="Vector"
                              d="M198.243 399.496L195.752 399.643L195.754 427.465L198.246 430.479L198.26 430.465L198.258 399.527L198.243 399.496Z"
                              fill="#8C3123"
                            />
                            <path
                              id="Vector_2"
                              d="M211.579 434.139L198.246 430.479L198.243 399.497L211.577 411.145L211.579 434.139Z"
                              fill="#E05243"
                            />
                            <path
                              id="Vector_3"
                              d="M205.56 424.342L211.216 428.524L211.251 428.44L211.282 416.659L211.215 416.528L205.559 414.166L205.56 424.342"
                              fill="#8C3123"
                            />
                            <path
                              id="Vector_4"
                              d="M211.216 433.975L224.187 445.465L224.207 445.435L224.205 414.513L224.184 414.473L211.214 410.981L211.216 433.975"
                              fill="#8C3123"
                            />
                            <path
                              id="Vector_5"
                              d="M216.873 430.874L211.216 428.524L211.215 416.528L216.872 420.697L216.873 430.874Z"
                              fill="#E05243"
                            />
                            <path
                              id="Vector_6"
                              d="M216.872 415.776L211.214 413.821L205.559 409.244L211.207 410.622L216.872 415.776Z"
                              fill="#5E1F18"
                            />
                            <path
                              id="Vector_7"
                              d="M216.873 435.782L211.216 431.195L205.56 429.25L211.209 434.518L216.873 435.782Z"
                              fill="#F2B0A9"
                            />
                            <path
                              id="Vector_8"
                              d="M205.559 409.244L211.214 410.729L211.26 410.737L211.259 398.808L211.213 398.734L205.558 399.067L205.559 409.244Z"
                              fill="#8C3123"
                            />
                            <path
                              id="Vector_9"
                              d="M216.872 415.776L211.214 410.729L211.213 398.734L216.871 405.599L216.872 415.776Z"
                              fill="#E05243"
                            />
                            <path
                              id="Vector_10"
                              d="M211.217 446.291L205.56 439.428L205.56 429.251L211.216 434.297L211.299 434.465L211.278 446.119L211.217 446.291Z"
                              fill="#8C3123"
                            />
                            <path
                              id="Vector_11"
                              d="M211.217 446.291L216.873 445.96L216.873 435.783L211.216 434.297L211.217 446.291V446.291ZM224.185 414.474L226.677 417.498L226.679 445.32L224.187 445.465L224.185 414.474Z"
                              fill="#E05243"
                            />
                          </g>
                        </g>
                      </g>
                      <path
                        d="M245.654 401.631L176.377 361.631C176.234 361.548 176.118 361.615 176.118 361.781L176.121 443.189L245.484 483.239C245.579 483.294 245.657 483.249 245.657 483.139L245.654 401.631Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 605">
                      <path
                        d="M251.388 480.178L251.388 398.811C251.388 398.535 251.194 398.423 250.955 398.561L245.748 401.568L245.748 482.935C245.748 483.211 245.942 483.323 246.181 483.184L251.388 480.178Z"
                        fill="#B88A00"
                      />
                      <path
                        d="M251.388 480.178L251.388 398.811C251.388 398.535 251.194 398.423 250.955 398.561L245.748 401.568L245.748 482.935C245.748 483.211 245.942 483.323 246.181 483.184L251.388 480.178Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 606">
                      <path
                        d="M181.818 358L250.993 397.938C251.28 398.104 251.28 398.372 250.993 398.538L245.694 401.596L176.52 361.658C176.233 361.493 176.233 361.224 176.52 361.058L181.818 358Z"
                        fill="#FFECB5"
                      />
                      <path
                        d="M181.818 358L250.993 397.938C251.28 398.104 251.28 398.372 250.993 398.538L245.694 401.596L176.52 361.658C176.233 361.493 176.233 361.224 176.52 361.058L181.818 358Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                  <g id="gcp">
                    <g id="Frame 604_2">
                      <g clipPath="url(#clip13_3013_97113)">
                        <path
                          d="M326.666 447.631L257.389 407.631C257.246 407.548 257.129 407.615 257.129 407.781L257.132 489.189L326.495 529.239C326.591 529.294 326.669 529.249 326.669 529.139L326.666 447.631Z"
                          fill="#FFDF3A"
                        />
                        <g id="GCS" clipPath="url(#clip14_3013_97113)">
                          <g id="GCS_2">
                            <g id="Group">
                              <path
                                id="Vector_12"
                                d="M280.272 482.69L271.716 458.897C271.387 457.982 271.213 457.06 271.213 456.223C271.213 455.386 271.386 454.664 271.715 454.129L280.269 440.215C280.598 439.68 281.071 439.351 281.641 439.262C282.211 439.172 282.857 439.325 283.515 439.705L300.625 449.584C301.283 449.964 301.929 450.557 302.499 451.305C303.069 452.052 303.542 452.927 303.871 453.842L312.428 477.634C312.757 478.549 312.93 479.471 312.93 480.308C312.93 481.145 312.757 481.868 312.428 482.403L303.874 496.316C303.545 496.851 303.072 497.18 302.503 497.269C301.933 497.359 301.287 497.206 300.629 496.826L283.518 486.948C282.86 486.568 282.214 485.974 281.644 485.227C281.074 484.479 280.601 483.604 280.272 482.689L280.272 482.69Z"
                                fill="url(#paint0_linear_3013_97113)"
                              />
                            </g>
                            <g id="Group_2">
                              <path
                                id="Vector_13"
                                d="M287.285 461.304L285 462.883L286.942 466.475L285.02 469.709L299.648 496.221L301.382 497.222L302.769 497.141L303.462 496.659L309.702 486.586L299.075 466.732L287.285 461.304Z"
                                fill="#417CE0"
                              />
                            </g>
                            <path
                              id="Vector_14"
                              d="M298.818 466.468L285.313 458.671C285.096 458.545 284.918 458.669 284.918 458.946L284.919 462.498C284.919 462.774 285.097 463.103 285.314 463.229L298.818 471.026C299.035 471.151 299.213 471.027 299.213 470.751L299.213 467.198C299.213 466.922 299.035 466.593 298.818 466.467L298.818 466.468ZM296.727 468.567C296.513 468.443 296.308 468.216 296.157 467.936C296.005 467.656 295.92 467.346 295.92 467.073C295.92 466.938 295.941 466.816 295.981 466.715C296.022 466.614 296.081 466.535 296.156 466.483C296.231 466.431 296.32 466.407 296.418 466.412C296.516 466.417 296.621 466.451 296.727 466.512C297.174 466.77 297.535 467.436 297.535 468.006C297.535 468.141 297.515 468.262 297.474 468.364C297.433 468.465 297.374 468.544 297.299 468.596C297.224 468.648 297.135 468.673 297.037 468.668C296.938 468.663 296.833 468.629 296.727 468.567V468.567ZM298.818 473.295L285.314 465.499C285.096 465.374 284.919 465.498 284.919 465.775L284.919 469.326C284.919 469.602 285.097 469.932 285.314 470.057L298.819 477.854C299.036 477.979 299.214 477.855 299.214 477.579L299.214 474.027C299.214 473.751 299.036 473.421 298.819 473.295L298.818 473.295ZM296.728 475.395C296.514 475.271 296.308 475.044 296.157 474.764C296.006 474.484 295.921 474.174 295.92 473.901C295.92 473.766 295.941 473.645 295.982 473.543C296.022 473.442 296.082 473.363 296.157 473.311C296.232 473.259 296.321 473.235 296.419 473.24C296.517 473.245 296.622 473.279 296.728 473.34C296.836 473.397 296.945 473.482 297.047 473.59C297.149 473.698 297.241 473.827 297.32 473.968C297.399 474.109 297.461 474.261 297.504 474.413C297.546 474.565 297.568 474.714 297.568 474.853C297.568 474.991 297.546 475.116 297.504 475.219C297.461 475.321 297.399 475.401 297.32 475.451C297.242 475.502 297.149 475.523 297.047 475.513C296.945 475.504 296.837 475.463 296.728 475.395"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                      <path
                        d="M326.666 447.631L257.389 407.631C257.246 407.548 257.129 407.615 257.129 407.781L257.132 489.189L326.495 529.239C326.591 529.294 326.669 529.249 326.669 529.139L326.666 447.631Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 605_2">
                      <path
                        d="M332.4 526.178L332.4 444.811C332.4 444.535 332.206 444.423 331.967 444.561L326.76 447.568L326.76 528.935C326.76 529.211 326.954 529.323 327.193 529.184L332.4 526.178Z"
                        fill="#B88A00"
                      />
                      <path
                        d="M332.4 526.178L332.4 444.811C332.4 444.535 332.206 444.423 331.967 444.561L326.76 447.568L326.76 528.935C326.76 529.211 326.954 529.323 327.193 529.184L332.4 526.178Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 606_2">
                      <path
                        d="M262.83 404L332.004 443.938C332.291 444.104 332.291 444.372 332.004 444.538L326.706 447.596L257.531 407.658C257.244 407.493 257.244 407.224 257.531 407.058L262.83 404Z"
                        fill="#FFECB5"
                      />
                      <path
                        d="M262.83 404L332.004 443.938C332.291 444.104 332.291 444.372 332.004 444.538L326.706 447.596L257.531 407.658C257.244 407.493 257.244 407.224 257.531 407.058L262.83 404Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                  <g id="iot">
                    <g id="Frame 604_3">
                      <g clipPath="url(#clip15_3013_97113)">
                        <path
                          d="M245.654 306.631L176.377 266.631C176.234 266.548 176.118 266.615 176.118 266.781L176.121 348.189L245.484 388.239C245.579 388.294 245.657 388.249 245.657 388.139L245.654 306.631Z"
                          fill="#FFDF3A"
                        />
                        <g id="IoT" clipPath="url(#clip16_3013_97113)">
                          <g id="IoT_2" clipPath="url(#clip17_3013_97113)">
                            <path
                              id="Combined Shape"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M211.249 328.385L211.248 317.512C211.688 317.489 212.043 317.232 212.253 316.783C212.464 316.333 212.519 315.719 212.408 315.039C212.298 314.359 212.029 313.653 211.646 313.038C211.263 312.423 210.787 311.935 210.297 311.652C209.808 311.369 209.332 311.309 208.949 311.481C208.566 311.654 208.297 312.048 208.187 312.601C208.076 313.154 208.131 313.832 208.342 314.524C208.553 315.217 208.907 315.884 209.348 316.415L209.348 327.263L201.234 322.578L201.233 315.657C201.663 315.614 202.004 315.344 202.203 314.888C202.403 314.432 202.448 313.818 202.332 313.143C202.216 312.468 201.945 311.772 201.563 311.165C201.181 310.559 200.71 310.078 200.225 309.799C199.742 309.525 199.274 309.467 198.896 309.637C198.517 309.806 198.25 310.192 198.136 310.732C198.023 311.273 198.069 311.939 198.269 312.622C198.469 313.306 198.809 313.968 199.238 314.505L199.238 321.45L198.82 321.209C197.754 320.588 196.703 319.673 195.74 318.528C194.777 317.382 193.926 316.035 193.248 314.582C192.57 313.129 192.081 311.606 191.816 310.12C191.551 308.634 191.516 307.222 191.715 305.985C191.913 304.748 192.34 303.715 192.964 302.96C193.589 302.206 194.396 301.748 195.327 301.618C196.259 301.489 197.294 301.693 198.357 302.214C199.42 302.735 200.486 303.56 201.479 304.633C202.273 302.89 203.535 301.755 205.117 301.358C206.7 300.962 208.539 301.32 210.419 302.393C212.299 303.466 214.143 305.208 215.737 307.416C217.33 309.625 218.607 312.209 219.419 314.868C220.174 314.983 220.963 315.273 221.757 315.727C223.687 316.841 225.539 318.9 226.904 321.451C228.269 324.002 229.036 326.836 229.036 329.329C229.036 331.821 228.27 333.77 226.905 334.744C225.54 335.719 223.689 335.64 221.758 334.526L221.283 334.252L221.283 327.232C221.711 327.189 222.052 326.918 222.251 326.462C222.45 326.007 222.495 325.393 222.379 324.719C222.263 324.044 221.992 323.349 221.611 322.743C221.23 322.137 220.759 321.656 220.275 321.376C219.791 321.096 219.32 321.034 218.939 321.2C218.558 321.366 218.288 321.749 218.172 322.29C218.056 322.83 218.101 323.496 218.3 324.181C218.498 324.866 218.839 325.531 219.268 326.069L219.269 333.015L211.249 328.385Z"
                              fill="#4285F4"
                            />
                            <path
                              id="Vector_15"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M201.353 329.826C202.198 330.567 202.949 331.614 203.478 332.791C204.008 333.968 204.285 335.204 204.262 336.29C204.263 337.217 204.059 338.008 203.673 338.572C203.288 339.137 202.736 339.452 202.08 339.482C201.424 339.513 200.69 339.257 199.963 338.745C199.235 338.232 198.543 337.483 197.964 336.583C197.385 335.682 196.943 334.667 196.689 333.651C196.434 332.636 196.377 331.662 196.523 330.839C196.67 330.016 197.014 329.377 197.517 328.996C198.021 328.615 198.663 328.506 199.37 328.682L199.37 321.6L201.258 322.69L201.353 329.826ZM200.353 336.426C200.854 336.715 201.334 336.74 201.688 336.496C202.042 336.252 202.241 335.758 202.241 335.124C202.241 334.489 202.042 333.766 201.688 333.113C201.334 332.46 200.853 331.93 200.353 331.641C199.852 331.352 199.371 331.327 199.017 331.571C198.663 331.815 198.464 332.309 198.464 332.943C198.464 333.578 198.663 334.301 199.018 334.954C199.372 335.608 199.852 336.137 200.353 336.426ZM221.275 341.328C222.193 342.166 222.991 343.347 223.52 344.651C224.049 345.955 224.273 347.293 224.151 348.415C224.028 349.537 223.567 350.366 222.854 350.748C222.141 351.13 221.224 351.038 220.275 350.49C219.326 349.942 218.409 348.975 217.695 347.77C216.982 346.564 216.521 345.203 216.399 343.939C216.276 342.676 216.5 341.597 217.029 340.904C217.558 340.211 218.356 339.951 219.273 340.173L219.273 333.115L221.274 334.27L221.275 341.328ZM220.275 347.928C220.727 348.22 221.174 348.3 221.532 348.155C221.89 348.009 222.136 347.648 222.225 347.137C222.315 346.625 222.241 345.998 222.018 345.369C221.795 344.74 221.438 344.152 221.011 343.712C220.756 343.448 220.484 343.247 220.213 343.12C219.943 342.993 219.681 342.944 219.445 342.977C219.209 343.01 219.005 343.123 218.845 343.309C218.686 343.495 218.576 343.75 218.523 344.056C218.469 344.362 218.474 344.712 218.536 345.082C218.598 345.452 218.716 345.834 218.882 346.201C219.048 346.569 219.259 346.913 219.499 347.211C219.739 347.509 220.004 347.754 220.275 347.928V347.928ZM211.305 341.721C212.226 342.544 213.031 343.717 213.568 345.019C214.106 346.321 214.338 347.662 214.222 348.788C214.106 349.915 213.65 350.75 212.939 351.136C212.228 351.523 211.311 351.433 210.362 350.885C209.412 350.337 208.496 349.368 207.785 348.161C207.073 346.953 206.617 345.591 206.501 344.33C206.384 343.07 206.617 341.997 207.154 341.316C207.691 340.634 208.496 340.391 209.417 340.63L209.416 327.472L211.417 328.627L211.305 341.721ZM210.286 348.309C210.69 348.54 211.084 348.6 211.407 348.48C211.731 348.36 211.969 348.067 212.085 347.643C212.201 347.219 212.19 346.688 212.053 346.127C211.916 345.565 211.66 345.004 211.324 344.526C210.987 344.047 210.587 343.676 210.183 343.468C209.779 343.26 209.393 343.226 209.08 343.37C208.767 343.514 208.544 343.829 208.445 344.269C208.346 344.708 208.376 345.249 208.53 345.812C208.678 346.33 208.924 346.838 209.237 347.274C209.549 347.71 209.914 348.053 210.286 348.262L210.286 348.309Z"
                              fill="#669DF6"
                            />
                          </g>
                        </g>
                      </g>
                      <path
                        d="M245.654 306.631L176.377 266.631C176.234 266.548 176.118 266.615 176.118 266.781L176.121 348.189L245.484 388.239C245.579 388.294 245.657 388.249 245.657 388.139L245.654 306.631Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 605_3">
                      <path
                        d="M251.388 385.178L251.388 303.811C251.388 303.535 251.194 303.423 250.955 303.561L245.748 306.568L245.748 387.935C245.748 388.211 245.942 388.323 246.181 388.184L251.388 385.178Z"
                        fill="#B88A00"
                      />
                      <path
                        d="M251.388 385.178L251.388 303.811C251.388 303.535 251.194 303.423 250.955 303.561L245.748 306.568L245.748 387.935C245.748 388.211 245.942 388.323 246.181 388.184L251.388 385.178Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 606_3">
                      <path
                        d="M181.818 263L250.993 302.938C251.28 303.104 251.28 303.372 250.993 303.538L245.694 306.596L176.52 266.658C176.233 266.493 176.233 266.224 176.52 266.058L181.818 263Z"
                        fill="#FFECB5"
                      />
                      <path
                        d="M181.818 263L250.993 302.938C251.28 303.104 251.28 303.372 250.993 303.538L245.694 306.596L176.52 266.658C176.233 266.493 176.233 266.224 176.52 266.058L181.818 263Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                  <g id="mongodb">
                    <g id="Frame 604_4">
                      <g clipPath="url(#clip18_3013_97113)">
                        <path
                          d="M326.666 352.631L257.389 312.631C257.246 312.548 257.129 312.615 257.129 312.781L257.132 394.189L326.495 434.239C326.591 434.294 326.669 434.249 326.669 434.139L326.666 352.631Z"
                          fill="#FFDF3A"
                        />
                        <g
                          id="Mongo DB Atalas"
                          clipPath="url(#clip19_3013_97113)"
                        >
                          <g id="Mongo DB" clipPath="url(#clip20_3013_97113)">
                            <g id="logo">
                              <g id="mongodb_2">
                                <path
                                  id="Path"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M297.879 370.535C295.686 356.966 291.117 351.053 289.951 348.065C289.47 346.768 289.044 345.462 288.676 344.156C288.615 345.213 288.502 345.837 287.772 346.244C286.306 347.061 280.079 349.922 279.556 363.598C279.069 376.35 287.089 389.017 288.149 390.46C288.963 391.44 289.956 391.514 290.44 391.325C294.305 390.182 299.586 384.232 297.883 370.538"
                                  fill="#10AA50"
                                />
                                <path
                                  id="Path_2"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M289.011 384.018C288.81 387.127 288.665 388.918 288.153 390.466C288.153 390.466 288.49 393.731 288.726 397.121L289.562 397.604C289.762 395.428 290.066 393.33 290.474 391.319C289.391 390.017 289.053 386.873 289.011 384.018Z"
                                  fill="#B8C4C2"
                                />
                                <path
                                  id="Path_3"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M290.472 391.32C289.378 390.046 289.062 386.852 289.013 384.019C289.283 379.547 289.362 374.95 289.248 370.247C289.191 367.78 289.274 347.721 288.775 344.49C289.116 345.684 289.509 346.877 289.951 348.063C291.116 351.053 295.687 356.967 297.879 370.535C299.586 384.21 294.334 390.153 290.472 391.32Z"
                                  fill="#12924F"
                                />
                              </g>
                              <g id="Atlas">
                                <path
                                  id="bg 2"
                                  d="M297.914 401.544C303.468 404.75 307.97 401.622 307.969 394.556C307.968 387.49 303.466 379.163 297.912 375.957C292.359 372.75 287.857 375.879 287.858 382.945C287.858 390.01 292.361 398.338 297.914 401.544Z"
                                  fill="white"
                                />
                                <path
                                  id="Ellipse 1 2"
                                  d="M297.747 399.315C302.375 401.987 306.126 399.38 306.125 393.492C306.125 387.604 302.373 380.664 297.745 377.992C293.117 375.32 289.366 377.928 289.366 383.816C289.367 389.704 293.119 396.643 297.747 399.315Z"
                                  fill="#12924F"
                                />
                                <path
                                  id="A"
                                  d="M295.408 392.009L294.158 391.288L296.965 382.984L298.324 383.769L301.132 395.314L299.883 394.593L297.677 385.198L297.616 385.163L295.408 392.009ZM295.617 388.243L299.669 390.583L299.67 391.843L295.617 389.503L295.617 388.243Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <path
                        d="M326.666 352.631L257.389 312.631C257.246 312.548 257.129 312.615 257.129 312.781L257.132 394.189L326.495 434.239C326.591 434.294 326.669 434.249 326.669 434.139L326.666 352.631Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 605_4">
                      <path
                        d="M332.4 431.178L332.4 349.811C332.4 349.535 332.206 349.423 331.967 349.561L326.76 352.568L326.76 433.935C326.76 434.211 326.954 434.323 327.193 434.184L332.4 431.178Z"
                        fill="#B88A00"
                      />
                      <path
                        d="M332.4 431.178L332.4 349.811C332.4 349.535 332.206 349.423 331.967 349.561L326.76 352.568L326.76 433.935C326.76 434.211 326.954 434.323 327.193 434.184L332.4 431.178Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                    <g id="Frame 606_4">
                      <path
                        d="M262.83 309L332.004 348.938C332.291 349.104 332.291 349.372 332.004 349.538L326.706 352.596L257.531 312.658C257.244 312.493 257.244 312.224 257.531 312.058L262.83 309Z"
                        fill="#FFECB5"
                      />
                      <path
                        d="M262.83 309L332.004 348.938C332.291 349.104 332.291 349.372 332.004 349.538L326.706 352.596L257.531 312.658C257.244 312.493 257.244 312.224 257.531 312.058L262.83 309Z"
                        stroke="#2B2B2B"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="destination_conveyor">
                <g id="destination_conveyor_arrow">
                  <rect
                    id="Rectangle 18_3"
                    opacity="0.3"
                    width="239.103"
                    height="20.2685"
                    transform="matrix(0.866044 0.499967 -0.866044 0.499967 597.913 240)"
                    fill="#40A8F5"
                  />
                  <path
                    id="destination_conveyor_edge_1"
                    d="M789 351L597 240"
                    stroke="#40A8F5"
                    strokeDasharray="7 3"
                  />
                  <path
                    id="destination_conveyor_edge_0"
                    d="M792 372L581 250"
                    stroke="#40A8F5"
                    strokeDasharray="7 3"
                  />
                  <g id="destination_conveyor_arrow_0">
                    <path
                      id="Union_21"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_1">
                    <path
                      id="Union_22"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_2">
                    <path
                      id="Union_23"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_3">
                    <path
                      id="Union_24"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_4">
                    <path
                      id="Union_25"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_5">
                    <path
                      id="Union_26"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_6">
                    <path
                      id="Union_27"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_7">
                    <path
                      id="Union_28"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_8">
                    <path
                      id="Union_29"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                  <g id="destination_conveyor_arrow_9">
                    <path
                      id="Union_30"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M786.411 364.32L785.604 364.32L785.604 363.389L786.411 363.389L793.592 363.389L785.08 358.475L784.509 358.145L785.65 357.487L786.221 357.816L794.733 362.73L794.733 358.585L794.733 358.119L796.347 358.119L796.347 358.585L796.346 363.855L795.54 364.321L786.411 364.32Z"
                      fill="#40A8F5"
                    />
                  </g>
                </g>
                <g id="destination_conveyor_item">
                  <g id="destination_item_0" clipPath="url(#clip21_3013_97113)">
                    <path
                      id="Vector 2_11"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_1" clipPath="url(#clip22_3013_97113)">
                    <path
                      id="Vector 2_12"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_2">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_2">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_2" clipPath="url(#clip23_3013_97113)">
                    <path
                      id="Vector 2_13"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_3">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_3">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_3" clipPath="url(#clip24_3013_97113)">
                    <path
                      id="Vector 2_14"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_4">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_4">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_4" clipPath="url(#clip25_3013_97113)">
                    <path
                      id="Vector 2_15"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_5">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_5">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_5" clipPath="url(#clip26_3013_97113)">
                    <path
                      id="Vector 2_16"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_6">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_6">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_6" clipPath="url(#clip27_3013_97113)">
                    <path
                      id="Vector 2_17"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_7">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_7">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_7" clipPath="url(#clip28_3013_97113)">
                    <path
                      id="Vector 2_18"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_8">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_8">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_8" clipPath="url(#clip29_3013_97113)">
                    <path
                      id="Vector 2_19"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_9">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_9">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_item_9" clipPath="url(#clip30_3013_97113)">
                    <path
                      id="Vector 2_20"
                      d="M596.434 240.507L596.435 222.507L591.239 219.507L580.847 225.507L580.846 249.507L596.434 240.507Z"
                      fill="#40A8F5"
                      stroke="#2B2B2B"
                    />
                    <g id="Frame 565_10">
                      <rect
                        width="22"
                        height="7.53699"
                        transform="matrix(0.866007 -0.500033 -3.76274e-05 1 579.115 237.507)"
                        fill="#2B2B2B"
                      />
                      <g id="JSON_10">
                        <path
                          d="M585.602 235.82L585.602 238.353C585.602 238.496 585.58 238.639 585.538 238.781C585.496 238.923 585.435 239.058 585.356 239.185C585.279 239.311 585.187 239.428 585.08 239.536C584.972 239.64 584.855 239.729 584.728 239.803C584.501 239.933 584.315 239.974 584.168 239.925C584.021 239.873 583.924 239.737 583.879 239.519L584.219 239.239C584.233 239.3 584.251 239.355 584.274 239.404C584.299 239.448 584.332 239.481 584.371 239.504C584.414 239.522 584.465 239.527 584.524 239.519C584.583 239.51 584.654 239.483 584.736 239.435C584.897 239.342 585.022 239.218 585.109 239.063C585.2 238.903 585.245 238.71 585.245 238.485L585.245 236.383L584.176 237.001L584.176 236.643L585.602 235.82Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M587.373 238.275C587.107 238.429 586.89 238.499 586.72 238.486C586.55 238.47 586.41 238.405 586.3 238.292L586.559 237.898C586.675 237.998 586.796 238.051 586.924 238.06C587.054 238.066 587.208 238.018 587.386 237.915C587.601 237.791 587.765 237.639 587.878 237.459C587.991 237.28 588.048 237.087 588.048 236.881C588.048 236.715 588.007 236.61 587.925 236.565C587.843 236.518 587.7 236.534 587.496 236.612L587.165 236.739C587.021 236.793 586.9 236.819 586.801 236.818C586.704 236.815 586.627 236.789 586.567 236.742C586.508 236.691 586.465 236.624 586.44 236.541C586.415 236.454 586.402 236.357 586.402 236.25C586.402 235.936 586.491 235.648 586.669 235.385C586.847 235.122 587.088 234.903 587.39 234.728C587.628 234.591 587.827 234.522 587.989 234.52C588.153 234.517 588.284 234.57 588.383 234.679L588.133 235.074C588.051 234.997 587.952 234.953 587.836 234.941C587.72 234.93 587.57 234.977 587.386 235.084C587.185 235.199 587.031 235.337 586.924 235.498C586.816 235.658 586.762 235.836 586.762 236.032C586.762 236.185 586.802 236.288 586.881 236.34C586.963 236.387 587.109 236.372 587.318 236.294L587.636 236.174C587.781 236.12 587.902 236.094 588.001 236.095C588.1 236.097 588.179 236.121 588.239 236.169C588.301 236.214 588.345 236.28 588.37 236.367C588.396 236.454 588.408 236.552 588.408 236.663C588.408 236.98 588.318 237.281 588.137 237.565C587.959 237.847 587.704 238.084 587.373 238.275Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M589.926 236.801C589.745 236.906 589.589 236.957 589.459 236.953C589.329 236.947 589.221 236.893 589.136 236.792C589.052 236.69 588.989 236.542 588.95 236.346C588.91 236.15 588.89 235.912 588.89 235.631C588.89 235.353 588.91 235.093 588.95 234.852C588.989 234.607 589.052 234.385 589.137 234.185C589.221 233.986 589.329 233.81 589.459 233.656C589.589 233.5 589.745 233.369 589.926 233.264C590.107 233.16 590.262 233.111 590.392 233.117C590.522 233.121 590.63 233.173 590.715 233.274C590.8 233.375 590.862 233.526 590.901 233.725C590.941 233.921 590.961 234.158 590.961 234.435C590.961 234.716 590.941 234.977 590.901 235.219C590.862 235.461 590.8 235.681 590.715 235.88C590.63 236.08 590.522 236.258 590.392 236.414C590.262 236.568 590.107 236.697 589.926 236.801ZM589.926 236.444C590.044 236.375 590.145 236.291 590.227 236.192C590.309 236.089 590.377 235.973 590.43 235.844C590.484 235.715 590.522 235.575 590.545 235.425C590.57 235.27 590.583 235.106 590.583 234.933L590.583 234.374C590.583 234.204 590.57 234.056 590.545 233.931C590.522 233.803 590.484 233.706 590.431 233.639C590.377 233.572 590.309 233.536 590.227 233.531C590.145 233.523 590.044 233.554 589.926 233.622C589.807 233.691 589.706 233.776 589.624 233.879C589.542 233.979 589.475 234.093 589.421 234.222C589.367 234.351 589.327 234.493 589.302 234.648C589.279 234.802 589.268 234.964 589.268 235.133L589.268 235.692C589.268 235.865 589.279 236.015 589.302 236.143C589.327 236.265 589.367 236.36 589.421 236.427C589.474 236.494 589.542 236.531 589.624 236.539C589.706 236.544 589.807 236.512 589.926 236.444Z"
                          fill="#40A8F5"
                        />
                        <path
                          d="M591.888 232.714L591.859 232.731L591.858 235.627L591.536 235.813L591.536 232.393L592.041 232.102L593.051 234.385L593.08 234.368L593.08 231.502L593.403 231.316L593.403 234.735L592.898 235.026L591.888 232.714Z"
                          fill="#40A8F5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="destination">
                  <g id="destination_back">
                    <g id="mongodb_3">
                      <g id="Frame 604_5">
                        <g clipPath="url(#clip31_3013_97113)">
                          <path
                            d="M784.858 297.631L854.135 257.631C854.278 257.548 854.395 257.615 854.395 257.781L854.392 339.189L785.029 379.239C784.933 379.294 784.855 379.249 784.855 379.139L784.858 297.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="Mongo DB_2">
                            <g id="Mongo DB_3">
                              <path
                                id="Vector_16"
                                d="M824.349 295.037C822.389 293.502 820.7 291.749 820.357 291.388C820.35 291.38 820.34 291.376 820.329 291.375C820.318 291.375 820.306 291.379 820.294 291.386C820.281 291.393 820.269 291.404 820.258 291.417C820.247 291.43 820.237 291.445 820.23 291.461C819.887 292.219 818.198 295.921 816.238 299.72C799.434 334.096 818.887 339.513 818.887 339.513L819.044 339.548C819.192 342.039 819.558 345.529 819.558 345.529L821.022 344.684C821.022 344.684 821.387 340.787 821.535 338.127L821.694 337.892C821.694 337.892 841.149 310.012 824.349 295.037ZM820.29 338.341C820.29 338.341 819.418 337.987 819.183 337.693L819.181 337.648L820.238 310.174C820.238 310.157 820.244 310.138 820.254 310.121C820.265 310.104 820.278 310.09 820.292 310.082C820.307 310.074 820.32 310.072 820.33 310.078C820.341 310.083 820.347 310.095 820.347 310.111L821.4 336.367L821.398 336.414C821.163 336.979 820.29 338.341 820.29 338.341Z"
                                fill="#00684A"
                              />
                            </g>
                          </g>
                        </g>
                        <path
                          d="M784.858 297.631L854.135 257.631C854.278 257.548 854.395 257.615 854.395 257.781L854.392 339.189L785.029 379.239C784.933 379.294 784.855 379.249 784.855 379.139L784.858 297.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_5">
                        <path
                          d="M779.124 376.178L779.124 294.811C779.124 294.535 779.318 294.423 779.557 294.561L784.764 297.568L784.764 378.935C784.764 379.211 784.57 379.323 784.331 379.184L779.124 376.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M779.124 376.178L779.124 294.811C779.124 294.535 779.318 294.423 779.557 294.561L784.764 297.568L784.764 378.935C784.764 379.211 784.57 379.323 784.331 379.184L779.124 376.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_5">
                        <path
                          d="M848.694 254L779.52 293.938C779.233 294.104 779.233 294.372 779.52 294.538L784.818 297.596L853.993 257.658C854.28 257.493 854.28 257.224 853.993 257.058L848.694 254Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M848.694 254L779.52 293.938C779.233 294.104 779.233 294.372 779.52 294.538L784.818 297.596L853.993 257.658C854.28 257.493 854.28 257.224 853.993 257.058L848.694 254Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="snowflake">
                      <g id="Frame 604_6">
                        <g clipPath="url(#clip32_3013_97113)">
                          <path
                            d="M865.858 250.631L935.135 210.631C935.278 210.548 935.395 210.615 935.395 210.781L935.392 292.189L866.029 332.239C865.933 332.294 865.855 332.249 865.855 332.139L865.858 250.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="Snowflake" clipPath="url(#clip33_3013_97113)">
                            <g id="Snowflake_2">
                              <path
                                id="Vector_17"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M898.996 264.286C898.996 265.137 898.755 265.939 898.272 266.784C897.549 268.053 896.343 268.938 895.539 268.74L887.5 267.898C887.459 267.921 887.439 267.909 887.419 267.897C887.399 267.885 887.379 267.874 887.338 267.897C886.213 267.79 885.892 266.274 886.615 264.532C887.258 262.837 888.706 261.624 889.831 261.824L894.333 262.346L894.334 256.105C894.334 254.592 895.379 252.759 896.666 252.017C897.952 251.274 898.997 251.9 898.997 253.412L898.996 264.286ZM893.609 273.637C894.413 273.645 894.815 274.359 894.815 275.399C894.815 276.439 894.412 277.617 893.689 278.507L885.648 288.633L885.488 288.726C884.282 290.178 882.915 290.495 882.272 289.448C881.629 288.401 882.111 286.515 883.237 285.109L887.82 279.343L883.238 278.868C883.197 278.891 883.177 278.879 883.157 278.867C883.137 278.855 883.117 278.843 883.077 278.866C881.951 278.76 881.63 277.244 882.354 275.502C882.997 273.807 884.444 272.593 885.57 272.794L893.609 273.637ZM898.994 292.558L898.995 281.59C899.075 281.165 898.914 280.785 898.754 280.594C898.111 279.547 896.583 279.956 895.458 281.363L887.417 291.489C887.377 291.512 887.357 291.547 887.336 291.583C887.316 291.618 887.296 291.653 887.256 291.676C886.131 293.083 885.809 294.97 886.533 295.876C887.175 296.829 888.623 296.371 889.748 294.871L894.331 289.104L894.331 295.251C894.331 296.763 895.376 297.389 896.662 296.646C897.948 295.904 898.994 294.071 898.994 292.558ZM903.175 290.144L903.175 279.46C903.095 279.033 903.256 278.278 903.416 277.713C904.06 276.018 905.507 274.709 906.632 274.816L914.672 275.659C914.712 275.635 914.732 275.647 914.752 275.659C914.772 275.671 914.792 275.684 914.833 275.66C915.958 275.767 916.28 277.283 915.556 279.025C914.913 280.72 913.465 281.933 912.34 281.733L907.838 281.306L907.837 287.452C907.837 288.965 906.792 290.797 905.506 291.54C904.219 292.283 903.174 291.657 903.175 290.144ZM908.563 265.003C907.759 265.94 907.357 267.118 907.357 268.158C907.276 269.244 907.758 269.911 908.482 269.871L916.522 270.714C916.562 270.691 916.582 270.703 916.602 270.715C916.622 270.727 916.642 270.739 916.682 270.716C917.888 270.776 919.255 269.42 919.898 267.725C920.541 265.935 920.059 264.605 918.934 264.499L914.351 264.025L918.934 258.258C918.975 258.235 918.995 258.2 919.015 258.165C919.035 258.13 919.055 258.094 919.095 258.071C920.221 256.665 920.542 254.778 919.819 253.871C919.176 252.919 917.729 253.376 916.603 254.877L908.563 265.003ZM903.177 250.999L903.177 261.684C903.096 262.297 903.257 262.772 903.417 263.152C904.061 264.104 905.508 263.741 906.633 262.335L914.674 252.209C914.714 252.186 914.734 252.151 914.754 252.115C914.774 252.08 914.794 252.045 914.834 252.022C915.96 250.615 916.282 248.728 915.558 247.822C914.915 246.869 913.468 247.327 912.342 248.827L907.84 254.453L907.84 248.306C907.84 246.794 906.795 246.168 905.509 246.911C904.223 247.653 903.178 249.486 903.177 250.999ZM901.488 266.346C901.729 266.207 901.89 266.208 902.051 266.304L905.186 268.277C905.347 268.373 905.427 268.515 905.427 268.799L905.427 269.745C905.427 269.934 905.347 270.264 905.266 270.499L902.05 276.138C901.889 276.42 901.728 276.608 901.487 276.747L900.683 277.211C900.442 277.35 900.281 277.348 900.121 277.252L896.905 275.327C896.744 275.23 896.664 275.088 896.664 274.804L896.664 273.858C896.664 273.575 896.744 273.339 896.905 273.058L900.121 267.418C900.282 267.137 900.443 266.949 900.684 266.81L901.488 266.346ZM901.166 269.935C901.327 269.843 901.488 269.844 901.568 269.893L902.533 270.47C902.613 270.518 902.694 270.661 902.694 270.85C902.694 271.039 902.613 271.275 902.533 271.416L901.568 273.108C901.487 273.248 901.327 273.436 901.166 273.529C901.005 273.622 900.844 273.62 900.764 273.572L899.799 272.994C899.719 272.946 899.638 272.803 899.638 272.614C899.638 272.425 899.719 272.189 899.799 272.048L900.764 270.357C900.844 270.216 901.005 270.028 901.166 269.935Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                        <path
                          d="M865.858 250.631L935.135 210.631C935.278 210.548 935.395 210.615 935.395 210.781L935.392 292.189L866.029 332.239C865.933 332.294 865.855 332.249 865.855 332.139L865.858 250.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_6">
                        <path
                          d="M860.124 329.178L860.124 247.811C860.124 247.535 860.318 247.423 860.557 247.561L865.764 250.568L865.764 331.935C865.764 332.211 865.57 332.323 865.331 332.184L860.124 329.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M860.124 329.178L860.124 247.811C860.124 247.535 860.318 247.423 860.557 247.561L865.764 250.568L865.764 331.935C865.764 332.211 865.57 332.323 865.331 332.184L860.124 329.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_6">
                        <path
                          d="M929.694 207L860.52 246.938C860.233 247.104 860.233 247.372 860.52 247.538L865.818 250.596L934.993 210.658C935.28 210.493 935.28 210.224 934.993 210.058L929.694 207Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M929.694 207L860.52 246.938C860.233 247.104 860.233 247.372 860.52 247.538L865.818 250.596L934.993 210.658C935.28 210.493 935.28 210.224 934.993 210.058L929.694 207Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="slack">
                      <g id="Frame 604_7">
                        <g clipPath="url(#clip34_3013_97113)">
                          <path
                            d="M865.858 347.631L935.135 307.631C935.278 307.548 935.395 307.615 935.395 307.781L935.392 389.189L866.029 429.239C865.933 429.294 865.855 429.249 865.855 429.139L865.858 347.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="Slack" clipPath="url(#clip35_3013_97113)">
                            <g id="Slack_2">
                              <g id="Group_3">
                                <path
                                  id="Vector_18"
                                  d="M890.039 380.341C890.039 382.832 888.277 385.884 886.12 387.13C883.962 388.375 882.2 387.358 882.2 384.867C882.201 382.376 883.963 379.324 886.12 378.078L890.04 375.816L890.039 380.341Z"
                                  fill="#E01E5A"
                                />
                                <path
                                  id="Vector_19"
                                  d="M892.014 379.201C892.014 376.71 893.777 373.658 895.934 372.412C898.091 371.167 899.853 372.184 899.853 374.675L899.852 386.007C899.852 388.498 898.09 391.55 895.932 392.796C893.775 394.041 892.013 393.024 892.013 390.533L892.014 379.201Z"
                                  fill="#E01E5A"
                                />
                              </g>
                              <g id="Group_4">
                                <path
                                  id="Vector_20"
                                  d="M895.935 358.765C893.778 360.01 892.016 358.993 892.016 356.502C892.016 354.011 893.778 350.959 895.936 349.713C898.093 348.468 899.855 349.485 899.855 351.976L899.854 356.502L895.935 358.765Z"
                                  fill="#36C5F0"
                                />
                                <path
                                  id="Vector_21"
                                  d="M895.935 361.045C898.092 359.8 899.854 360.817 899.854 363.308C899.854 365.799 898.091 368.851 895.934 370.097L886.12 375.763C883.963 377.008 882.201 375.991 882.201 373.5C882.202 371.009 883.964 367.957 886.121 366.711L895.935 361.045Z"
                                  fill="#36C5F0"
                                />
                              </g>
                              <g id="Group_5">
                                <path
                                  id="Vector_22"
                                  d="M911.673 356.485C911.673 353.994 913.435 350.941 915.593 349.696C917.75 348.451 919.512 349.468 919.512 351.959C919.512 354.45 917.749 357.502 915.592 358.747L911.673 361.01L911.673 356.485Z"
                                  fill="#2EB67D"
                                />
                                <path
                                  id="Vector_23"
                                  d="M909.698 357.625C909.698 360.116 907.935 363.168 905.778 364.413C903.621 365.659 901.859 364.641 901.859 362.151L901.86 350.819C901.86 348.328 903.623 345.275 905.78 344.03C907.937 342.784 909.699 343.802 909.699 346.293L909.698 357.625Z"
                                  fill="#2EB67D"
                                />
                              </g>
                              <g id="Group_6">
                                <path
                                  id="Vector_24"
                                  d="M905.777 378.061C907.934 376.815 909.697 377.833 909.696 380.324C909.696 382.815 907.934 385.867 905.777 387.112C903.619 388.358 901.857 387.34 901.858 384.85L901.858 380.324L905.777 378.061Z"
                                  fill="#ECB22E"
                                />
                                <path
                                  id="Vector_25"
                                  d="M905.777 375.78C903.62 377.026 901.858 376.008 901.858 373.518C901.859 371.027 903.621 367.974 905.778 366.729L915.592 361.063C917.749 359.818 919.511 360.835 919.511 363.326C919.511 365.817 917.748 368.869 915.591 370.114L905.777 375.78Z"
                                  fill="#ECB22E"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <path
                          d="M865.858 347.631L935.135 307.631C935.278 307.548 935.395 307.615 935.395 307.781L935.392 389.189L866.029 429.239C865.933 429.294 865.855 429.249 865.855 429.139L865.858 347.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_7">
                        <path
                          d="M860.124 426.178L860.124 344.811C860.124 344.535 860.318 344.423 860.557 344.561L865.764 347.568L865.764 428.935C865.764 429.211 865.57 429.323 865.331 429.184L860.124 426.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M860.124 426.178L860.124 344.811C860.124 344.535 860.318 344.423 860.557 344.561L865.764 347.568L865.764 428.935C865.764 429.211 865.57 429.323 865.331 429.184L860.124 426.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_7">
                        <path
                          d="M929.694 304L860.52 343.938C860.233 344.104 860.233 344.372 860.52 344.538L865.818 347.596L934.993 307.658C935.28 307.493 935.28 307.224 934.993 307.058L929.694 304Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M929.694 304L860.52 343.938C860.233 344.104 860.233 344.372 860.52 344.538L865.818 347.596L934.993 307.658C935.28 307.493 935.28 307.224 934.993 307.058L929.694 304Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="shopify">
                      <g id="Frame 604_8">
                        <g clipPath="url(#clip36_3013_97113)">
                          <path
                            d="M784.858 394.631L854.135 354.631C854.278 354.548 854.395 354.615 854.395 354.781L854.392 436.189L785.029 476.239C784.933 476.294 784.855 476.249 784.855 476.139L784.858 394.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="Shopify" clipPath="url(#clip37_3013_97113)">
                            <g id="Shopify_2">
                              <path
                                id="Vector_26"
                                d="M833.586 392.393C833.556 392.162 833.375 392.124 833.223 392.211C833.072 392.299 830.079 393.956 830.079 393.956C830.079 393.956 827.569 392.559 827.327 392.378C827.085 392.233 826.601 392.584 826.42 392.76C826.42 392.76 825.936 393.217 825.15 393.955C825.029 393.527 824.817 393.045 824.545 392.561C823.668 391.075 822.338 390.776 820.766 391.684C820.645 391.754 820.554 391.806 820.433 391.912C820.373 391.875 820.342 391.822 820.282 391.821C819.586 391.369 818.71 391.448 817.651 392.095C815.625 393.335 813.599 396.248 811.936 400.268C810.787 403.102 809.909 406.312 809.637 408.568C807.309 410.766 805.676 412.314 805.615 412.349C804.436 413.457 804.406 413.51 804.254 414.913C804.194 415.944 801.108 445.795 801.108 445.795L826.991 436.117L838.21 426.367C838.18 426.384 833.616 392.625 833.586 392.393ZM823.85 395.204C823.245 395.767 822.58 396.4 821.854 397.104C821.854 395.894 821.703 394.274 821.249 393.112C822.792 392.507 823.547 394.134 823.85 395.204ZM820.493 398.352C819.132 399.635 817.651 401.024 816.169 402.414C816.592 400.284 817.379 397.98 818.346 396.176C818.709 395.504 819.223 394.709 819.798 394.093C820.403 395.131 820.523 397.018 820.493 398.352ZM817.712 393.661C818.195 393.381 818.589 393.261 818.921 393.354C818.377 393.988 817.832 394.8 817.349 395.72C816.048 398.107 815.05 401.21 814.657 403.891C813.417 405.07 812.208 406.195 811.119 407.215C811.845 402.918 814.597 395.566 817.712 393.661Z"
                                fill="#95BF47"
                              />
                              <g id="Group_7">
                                <path
                                  id="Vector_27"
                                  d="M833.223 392.211C833.072 392.299 830.079 393.956 830.079 393.956C830.079 393.956 827.569 392.559 827.327 392.378C827.236 392.324 827.115 392.323 826.994 392.392L826.991 436.117L838.21 426.367C838.21 426.367 833.647 392.607 833.616 392.376C833.556 392.162 833.375 392.124 833.223 392.211Z"
                                  fill="#5E8E3E"
                                />
                                <path
                                  id="Vector_28"
                                  d="M820.765 406.199L819.464 412.678C819.464 412.678 818.013 412.733 816.289 413.871C813.749 415.515 813.749 417.401 813.749 417.863C813.9 420.338 819.615 417.607 819.947 423.428C820.188 428.02 817.83 432.619 814.382 434.858C810.27 437.482 808.002 435.945 808.002 435.945L808.88 431.063C808.88 431.063 811.178 431.764 812.992 430.574C814.171 429.822 814.625 428.386 814.564 427.638C814.383 424.399 809.726 427.301 809.424 421.961C809.183 417.475 811.754 411.331 817.438 407.622C819.646 406.169 820.765 406.199 820.765 406.199Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <path
                          d="M784.858 394.631L854.135 354.631C854.278 354.548 854.395 354.615 854.395 354.781L854.392 436.189L785.029 476.239C784.933 476.294 784.855 476.249 784.855 476.139L784.858 394.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_8">
                        <path
                          d="M779.124 473.178L779.124 391.811C779.124 391.535 779.318 391.423 779.557 391.561L784.764 394.568L784.764 475.935C784.764 476.211 784.57 476.323 784.331 476.184L779.124 473.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M779.124 473.178L779.124 391.811C779.124 391.535 779.318 391.423 779.557 391.561L784.764 394.568L784.764 475.935C784.764 476.211 784.57 476.323 784.331 476.184L779.124 473.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_8">
                        <path
                          d="M848.694 351L779.52 390.938C779.233 391.104 779.233 391.372 779.52 391.538L784.818 394.596L853.993 354.658C854.28 354.493 854.28 354.224 853.993 354.058L848.694 351Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M848.694 351L779.52 390.938C779.233 391.104 779.233 391.372 779.52 391.538L784.818 394.596L853.993 354.658C854.28 354.493 854.28 354.224 853.993 354.058L848.694 351Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="destination_front">
                    <g id="mysql">
                      <g id="Frame 604_9">
                        <g clipPath="url(#clip38_3013_97113)">
                          <path
                            d="M827.858 342.631L897.135 302.631C897.278 302.548 897.395 302.615 897.395 302.781L897.392 384.189L828.029 424.239C827.933 424.294 827.855 424.249 827.855 424.139L827.858 342.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="MySQL" clipPath="url(#clip39_3013_97113)">
                            <g id="MySQL_2">
                              <path
                                id="Vector_29"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M853.315 349.531C857.744 344.107 866.208 339.221 870.637 339.53C870.843 339.626 871.154 339.542 871.399 339.57C871.886 339.554 872.286 339.688 872.785 339.65C872.982 339.816 873.304 339.766 873.547 339.85C874.368 340.002 875.055 340.385 875.834 340.611C876.328 340.901 876.75 341.316 877.289 341.531C877.585 341.95 878.01 342.148 878.328 342.531C878.615 342.807 878.826 343.215 879.159 343.411C879.289 343.8 879.542 343.975 879.713 344.291C879.906 344.57 880.036 344.959 880.268 345.171C881.145 347.039 881.862 349.183 882.069 352.212C882.112 352.43 881.98 352.952 882.138 352.972C882.138 353.585 882.138 354.199 882.138 354.812C881.98 355.014 882.112 355.384 882.068 355.652C881.861 358.92 881.144 361.893 880.266 364.774C880.034 365.253 879.905 365.792 879.712 366.294C879.54 366.808 879.287 367.275 879.157 367.814C878.824 368.395 878.613 369.046 878.326 369.654C878.008 370.404 877.583 371.092 877.286 371.854C876.748 372.69 876.326 373.594 875.831 374.455C875.053 375.579 874.366 376.756 873.544 377.855C873.301 378.221 872.979 378.542 872.782 378.935C872.283 379.474 871.883 380.07 871.396 380.616C871.151 380.927 870.84 381.201 870.634 381.536C866.204 386.96 857.741 391.846 853.311 391.537C853.105 391.441 852.794 391.525 852.549 391.497C852.063 391.513 851.662 391.379 851.163 391.417C850.967 391.251 850.645 391.302 850.401 391.217C849.58 391.066 848.893 390.682 848.115 390.457C847.62 390.167 847.198 389.751 846.66 389.537C846.363 389.117 845.938 388.919 845.621 388.537C845.334 388.26 845.123 387.852 844.789 387.656C844.66 387.267 844.407 387.092 844.235 386.776C844.042 386.497 843.913 386.108 843.681 385.896C842.804 384.029 842.086 381.884 841.88 378.855C841.837 378.637 841.969 378.115 841.811 378.095C841.811 377.482 841.811 376.868 841.811 376.255C841.969 376.053 841.837 375.683 841.88 375.415C842.087 372.147 842.805 369.174 843.682 366.293C843.914 365.814 844.044 365.275 844.237 364.773C844.409 364.259 844.662 363.792 844.791 363.253C845.125 362.672 845.336 362.021 845.623 361.413C845.941 360.663 846.365 359.975 846.662 359.212C847.201 358.377 847.623 357.473 848.118 356.612C848.896 355.488 849.583 354.311 850.404 353.212C850.648 352.846 850.97 352.525 851.167 352.132C851.666 351.593 852.066 350.997 852.552 350.451C852.798 350.14 853.108 349.866 853.315 349.531ZM860.798 343.691C856.891 346.209 854.001 349.314 851.444 352.612C851.173 352.963 850.86 353.289 850.681 353.692C850.21 354.193 849.895 354.785 849.503 355.332C849.145 355.899 848.744 356.441 848.464 357.053C847.552 358.42 846.83 359.897 846.177 361.413C845.823 361.982 845.608 362.631 845.345 363.253C845.152 363.755 844.905 364.226 844.791 364.774C844.524 365.233 844.388 365.768 844.237 366.294C843.31 369.146 842.584 372.114 842.434 375.415C842.276 375.617 842.408 375.987 842.365 376.255C842.365 376.655 842.365 377.055 842.365 377.455C842.408 377.673 842.276 378.196 842.434 378.215C842.583 381.344 843.309 383.474 844.235 385.256C844.387 385.606 844.522 385.986 844.789 386.136C844.903 386.553 845.15 386.738 845.344 387.016C845.606 387.335 845.821 387.736 846.175 387.896C846.828 388.658 847.55 389.302 848.461 389.617C848.742 389.905 849.142 389.984 849.501 390.137C849.892 390.232 850.207 390.46 850.679 390.417C850.857 390.614 851.17 390.578 851.441 390.617C853.998 390.961 856.887 390.73 860.795 388.736C861.419 388.509 862.526 387.87 863.151 387.376C867.058 384.858 869.948 381.753 872.505 378.455C872.775 378.105 873.088 377.779 873.267 377.375C873.739 376.874 874.054 376.282 874.445 375.735C874.804 375.169 875.204 374.626 875.485 374.015C876.397 372.648 877.118 371.17 877.771 369.654C878.126 369.085 878.341 368.436 878.603 367.814C878.797 367.312 879.044 366.842 879.158 366.294C879.425 365.835 879.56 365.299 879.712 364.774C880.639 361.921 881.365 358.953 881.514 355.652C881.672 355.45 881.54 355.081 881.583 354.812C881.583 354.412 881.583 354.012 881.583 353.612C881.54 353.394 881.672 352.872 881.514 352.852C881.365 349.724 880.64 347.593 879.713 345.811C879.562 345.461 879.426 345.082 879.159 344.931C879.046 344.514 878.798 344.329 878.605 344.051C878.343 343.732 878.128 343.331 877.773 343.171C877.12 342.409 876.399 341.765 875.487 341.451C875.207 341.163 874.806 341.083 874.448 340.931C874.056 340.835 873.742 340.607 873.27 340.651C873.091 340.454 872.778 340.489 872.508 340.45C869.951 340.106 867.061 340.337 863.154 342.331C862.53 342.558 861.422 343.197 860.798 343.691Z"
                                fill="#577FA2"
                              />
                              <path
                                id="Vector_30"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M857.61 363.453C856.633 362.321 855.607 361.425 855.601 358.693C855.588 353.378 857.726 346.77 862.184 343.451C862.28 343.578 862.666 343.202 862.877 343.131C866.723 341.243 869.615 341.008 872.231 341.251C872.428 341.417 872.75 341.366 872.993 341.451C873.189 341.458 873.288 341.633 873.547 341.531C874.447 341.918 875.35 342.302 876.18 342.811C876.477 343.23 876.902 343.428 877.219 343.811C877.506 344.087 877.717 344.495 878.051 344.691C878.18 345.081 878.433 345.255 878.605 345.571C878.798 345.85 878.928 346.239 879.159 346.451C881.479 349.946 881.478 358.599 879.158 364.774C878.926 365.253 878.797 365.792 878.603 366.294C878.432 366.808 878.178 367.275 878.049 367.814C877.716 368.395 877.505 369.046 877.217 369.654C876.9 370.404 876.475 371.092 876.178 371.854C875.348 373.322 874.445 374.748 873.545 376.175C873.286 376.372 873.186 376.661 872.99 376.895C872.747 377.261 872.425 377.582 872.228 377.975C869.806 381.004 867.129 383.885 863.705 386.336C866.942 382.817 868.672 378.429 869.318 373.415C869.477 373.16 869.344 372.736 869.388 372.414C869.476 368.849 868.73 366.727 867.31 365.774C867.038 365.55 866.738 365.377 866.409 365.254C864.051 364.298 860.926 364.669 858.441 363.933C858.193 363.723 857.916 363.563 857.61 363.453ZM869.32 348.291C867.964 347.814 866.737 347.112 864.332 348.451C863.642 347.879 860.856 348.22 860.729 350.292C860.653 351.529 861.806 351.628 862.183 352.332C862.827 353.534 862.944 355.179 863.777 355.412C862.861 357.532 863.174 362.684 864.954 361.453C865.785 360.878 865.501 359.766 865.855 358.773C866.234 359.824 866.931 360.323 867.795 360.533C868.04 360.724 868.442 361.065 868.765 360.853C868.47 360.805 868.298 360.541 868.003 360.493C867.086 359.627 866.396 358.37 865.717 357.093C865.078 358.137 864.955 359.48 864.746 360.773C864.144 360.669 863.962 359.838 863.846 358.893C863.846 358.466 863.846 358.039 863.846 357.613C863.751 356.758 864.496 355.666 864.331 354.852C864.272 354.561 863.851 354.437 863.708 354.252C863.251 353.666 863.106 352.576 862.668 351.812C862.215 351.019 861.365 350.832 861.352 349.772C862.38 348.804 863.34 349.234 863.985 349.451C865.979 348.258 867.097 348.548 868.142 348.891C869.92 349.475 870.666 350.773 871.676 352.692C872.085 353.47 872.527 354.933 873.2 355.092C873.847 355.245 874.684 354.815 875.348 354.892C875.997 354.968 876.614 354.934 877.149 355.372C875.956 355.99 875.02 356.757 874.308 357.653C874.606 358.562 875.402 358.734 876.248 358.773C877.09 358.811 877.94 358.886 878.604 359.013C877.925 357.789 876.354 358.109 875.417 357.332C876.28 356.657 877.145 355.983 877.981 355.292C877.071 354.014 875.477 353.921 873.685 354.172C872.404 352.444 871.759 349.614 870.013 348.691C869.811 348.508 869.58 348.374 869.32 348.291ZM864.331 350.612C864.481 351.02 864.863 351.024 864.955 351.532C865.65 350.853 865.175 349.828 864.331 350.612Z"
                                fill="#FFA230"
                              />
                              <path
                                id="Vector_31"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M862.184 343.451C862.394 343.379 862.781 343.004 862.877 343.131C862.666 343.202 862.28 343.578 862.184 343.451Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_32"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M853.869 350.491C855.543 348.71 857.27 346.961 859.343 345.411C859.401 345.61 858.904 346.047 858.581 346.491C856.469 349.391 855.019 353.333 854.7 357.372C854.54 357.76 854.676 358.318 854.631 358.772C854.671 367.369 861.167 364.786 865.37 366.173C865.618 366.384 865.895 366.544 866.201 366.653C867.147 367.62 868.261 368.769 868.349 371.414C868.454 374.593 867.63 378.852 866.2 381.455C865.94 381.838 865.709 382.239 865.507 382.655C864.431 384.589 863.175 386.388 861.35 387.696C858.756 389.555 855.855 389.58 853.866 389.936C853.66 389.84 853.349 389.925 853.104 389.896C852.618 389.912 852.217 389.779 851.718 389.816C851.522 389.65 851.2 389.701 850.956 389.616C850.135 389.465 849.448 389.081 848.67 388.856C848.393 388.616 848.132 388.348 847.769 388.256C847.472 387.837 847.048 387.639 846.73 387.256C846.443 386.98 846.232 386.572 845.898 386.376C845.769 385.986 845.516 385.811 845.344 385.496C845.151 385.217 845.022 384.828 844.79 384.616C843.913 382.748 843.196 380.603 842.989 377.575C842.946 377.357 843.078 376.834 842.92 376.815C842.92 376.628 842.92 376.441 842.92 376.255C843.078 376.052 842.946 375.683 842.989 375.415C843.196 372.147 843.914 369.174 844.791 366.293C845.023 365.814 845.153 365.275 845.346 364.773C845.518 364.259 845.771 363.792 845.9 363.253C846.234 362.672 846.445 362.021 846.732 361.413C847.05 360.663 847.474 359.975 847.771 359.213C848.134 358.702 848.395 358.132 848.672 357.572C849.451 356.448 850.138 355.271 850.959 354.172C851.202 353.806 851.524 353.485 851.721 353.092C852.22 352.553 852.62 351.957 853.107 351.411C853.352 351.1 853.663 350.826 853.869 350.491ZM860.381 373.134C860.475 373.988 859.731 375.08 859.895 375.894C859.955 376.189 860.374 376.308 860.519 376.495C860.975 377.081 861.121 378.171 861.558 378.935C862.012 379.728 862.869 379.906 862.874 380.975C861.847 381.943 860.886 381.513 860.241 381.295C858.248 382.494 857.121 382.195 856.084 381.855C854.309 381.273 853.532 379.978 852.551 378.055C852.149 377.268 851.691 375.812 851.027 375.654C850.362 375.497 849.463 376.062 848.809 375.974C848.139 375.884 847.657 375.702 847.077 375.374C848.275 374.759 849.192 373.982 849.918 373.094C849.534 371.634 847.941 372.158 846.8 372.014C846.348 371.957 846.09 371.561 845.622 371.734C846.31 372.943 847.874 372.634 848.81 373.414C847.96 374.097 847.074 374.759 846.246 375.454C847.16 376.725 848.754 376.818 850.542 376.575C851.825 378.297 852.467 381.133 854.213 382.055C854.415 382.239 854.646 382.372 854.906 382.455C856.263 382.933 857.489 383.635 859.895 382.295C860.591 382.863 863.366 382.524 863.498 380.455C863.576 379.229 862.417 379.113 862.043 378.415C861.4 377.214 861.278 375.571 860.45 375.334C861.362 373.233 861.046 368.048 859.272 369.294C858.445 369.874 858.733 370.982 858.371 371.974C858 370.963 857.35 370.436 856.501 370.254C856.229 370.057 855.817 369.68 855.461 369.894C855.78 369.956 855.974 370.232 856.293 370.294C857.072 371.265 857.915 372.123 858.371 373.654C859.264 372.73 859.2 371.252 859.48 369.974C860.089 370.039 860.234 370.909 860.381 371.774C860.381 372.227 860.381 372.681 860.381 373.134ZM859.895 380.135C859.756 379.71 859.349 379.747 859.272 379.215C858.593 379.904 859.043 380.913 859.895 380.135Z"
                                fill="#577FA2"
                              />
                              <path
                                id="Vector_33"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M854.7 357.372C854.655 357.826 854.791 358.385 854.631 358.772C854.676 358.318 854.54 357.76 854.7 357.372Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_34"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M863.846 357.612C863.846 358.039 863.846 358.466 863.846 358.892C863.731 358.716 863.731 357.921 863.846 357.612Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_35"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M841.811 376.255C841.855 375.986 841.723 375.617 841.881 375.415C841.837 375.683 841.969 376.052 841.811 376.255Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_36"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M882.069 352.211C882.227 352.231 882.095 352.753 882.138 352.972C881.98 352.952 882.112 352.43 882.069 352.211Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_37"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M842.435 375.415C842.435 375.681 842.435 375.948 842.435 376.215C842.411 376.228 842.388 376.241 842.365 376.255C842.409 375.986 842.277 375.617 842.435 375.415Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_38"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M881.515 352.852C881.673 352.872 881.54 353.394 881.584 353.612C881.561 353.625 881.538 353.639 881.515 353.652C881.515 353.385 881.515 353.118 881.515 352.852Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_39"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M842.92 376.254C842.964 375.986 842.831 375.616 842.989 375.414C842.946 375.683 843.078 376.052 842.92 376.254Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_40"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M842.366 376.255C842.389 376.241 842.412 376.228 842.435 376.215C842.435 376.615 842.435 377.015 842.435 377.415C842.412 377.428 842.389 377.441 842.366 377.455C842.366 377.055 842.366 376.655 842.366 376.255Z"
                                fill="#FEFEFE"
                              />
                              <path
                                id="Vector_41"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M881.515 353.652C881.538 353.639 881.561 353.625 881.584 353.612C881.584 354.012 881.584 354.412 881.584 354.812C881.561 354.825 881.537 354.839 881.514 354.852C881.514 354.452 881.515 354.052 881.515 353.652Z"
                                fill="#FEFEFE"
                              />
                              <path
                                id="Vector_42"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M842.92 376.815C843.078 376.834 842.946 377.357 842.989 377.575C842.831 377.555 842.964 377.033 842.92 376.815Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_43"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M842.365 377.455C842.388 377.442 842.411 377.428 842.434 377.415C842.434 377.682 842.434 377.948 842.434 378.215C842.276 378.195 842.409 377.673 842.365 377.455Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_44"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M881.514 354.852C881.537 354.839 881.561 354.825 881.584 354.812C881.54 355.08 881.672 355.45 881.514 355.652C881.514 355.385 881.514 355.119 881.514 354.852Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_45"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M841.811 378.095C841.969 378.114 841.837 378.637 841.88 378.855C841.722 378.835 841.854 378.313 841.811 378.095Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_46"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M882.138 354.812C882.095 355.08 882.227 355.45 882.069 355.652C882.112 355.384 881.98 355.014 882.138 354.812Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_47"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M860.38 371.774C860.495 371.977 860.495 372.799 860.38 373.134C860.38 372.681 860.38 372.228 860.38 371.774Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_48"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M869.318 373.415C869.363 373.093 869.229 372.669 869.388 372.414C869.343 372.736 869.477 373.16 869.318 373.415Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_49"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M852.553 350.452C852.726 350.098 853.026 349.818 853.315 349.531C853.108 349.866 852.798 350.14 852.553 350.452Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_50"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M850.404 353.212C850.583 352.808 850.896 352.482 851.167 352.132C850.97 352.525 850.648 352.846 850.404 353.212Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_51"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M846.662 359.213C847.138 358.341 847.565 357.441 848.117 356.612C847.623 357.474 847.201 358.377 846.662 359.213Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_52"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M844.791 363.253C845.054 362.631 845.269 361.982 845.623 361.413C845.336 362.021 845.125 362.672 844.791 363.253Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_53"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M843.683 366.293C843.835 365.768 843.97 365.232 844.237 364.773C844.044 365.275 843.915 365.814 843.683 366.293Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_54"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M843.681 385.896C843.913 386.108 844.043 386.497 844.236 386.776C843.969 386.625 843.833 386.246 843.681 385.896Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_55"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M845.621 388.536C845.267 388.376 845.052 387.975 844.789 387.656C845.123 387.852 845.334 388.26 845.621 388.536Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_56"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M848.115 390.457C847.563 390.266 847.136 389.859 846.66 389.537C847.198 389.751 847.62 390.167 848.115 390.457Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_57"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M851.164 391.417C850.893 391.378 850.58 391.414 850.401 391.217C850.645 391.302 850.967 391.251 851.164 391.417Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_58"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M853.312 391.537C853.023 391.583 852.723 391.65 852.549 391.497C852.795 391.525 853.105 391.441 853.312 391.537Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_59"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M870.634 381.535C870.841 381.201 871.151 380.927 871.397 380.615C871.223 380.968 870.923 381.249 870.634 381.535Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_60"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M872.783 378.935C872.979 378.542 873.301 378.221 873.545 377.855C873.366 378.258 873.053 378.584 872.783 378.935Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_61"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M875.831 374.454C876.326 373.593 876.748 372.69 877.287 371.854C876.81 372.726 876.383 373.626 875.831 374.454Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_62"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M879.158 367.813C878.896 368.435 878.681 369.085 878.326 369.654C878.613 369.046 878.824 368.394 879.158 367.813Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_63"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M880.267 364.773C880.115 365.299 879.98 365.834 879.712 366.293C879.905 365.792 880.035 365.253 880.267 364.773Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_64"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M879.714 344.291C879.981 344.442 880.116 344.821 880.268 345.171C880.036 344.959 879.907 344.57 879.714 344.291Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M878.328 342.53C878.683 342.69 878.898 343.091 879.16 343.411C878.826 343.215 878.615 342.807 878.328 342.53Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_66"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M875.834 340.61C876.386 340.801 876.813 341.208 877.289 341.53C876.751 341.316 876.329 340.9 875.834 340.61Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_67"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M872.785 339.65C873.056 339.689 873.369 339.653 873.548 339.85C873.304 339.765 872.982 339.816 872.785 339.65Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_68"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M870.638 339.53C870.926 339.484 871.226 339.417 871.4 339.57C871.154 339.542 870.844 339.626 870.638 339.53Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_69"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M850.682 353.692C850.861 353.288 851.174 352.962 851.444 352.612C851.247 353.005 850.925 353.326 850.682 353.692Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_70"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M848.464 357.052C848.745 356.44 849.145 355.898 849.504 355.332C849.21 355.936 848.801 356.473 848.464 357.052Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_71"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M845.345 363.253C845.608 362.631 845.823 361.982 846.177 361.413C845.89 362.021 845.679 362.672 845.345 363.253Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_72"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M844.237 366.294C844.389 365.768 844.524 365.232 844.791 364.773C844.598 365.275 844.469 365.814 844.237 366.294Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_73"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M844.236 385.256C844.467 385.468 844.597 385.857 844.79 386.136C844.523 385.985 844.387 385.606 844.236 385.256Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_74"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M845.344 387.016C845.677 387.212 845.888 387.62 846.175 387.896C845.821 387.736 845.606 387.335 845.344 387.016Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_75"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M848.462 389.616C848.799 389.806 849.207 389.872 849.501 390.136C849.143 389.984 848.742 389.904 848.462 389.616Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_76"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M850.679 390.416C850.922 390.501 851.244 390.45 851.441 390.616C851.171 390.578 850.858 390.613 850.679 390.416Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_77"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M872.505 378.455C872.702 378.062 873.024 377.741 873.267 377.375C873.088 377.778 872.775 378.104 872.505 378.455Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_78"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M874.446 375.734C874.74 375.131 875.148 374.593 875.485 374.014C875.205 374.626 874.804 375.168 874.446 375.734Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_79"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M877.772 369.654C878.059 369.046 878.27 368.395 878.603 367.814C878.341 368.436 878.126 369.085 877.772 369.654Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_80"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M879.158 366.293C879.351 365.791 879.481 365.253 879.713 364.773C879.561 365.299 879.425 365.834 879.158 366.293Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_81"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M879.714 345.811C879.482 345.599 879.353 345.21 879.16 344.931C879.427 345.081 879.562 345.461 879.714 345.811Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_82"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M878.605 344.051C878.271 343.855 878.061 343.447 877.774 343.171C878.128 343.331 878.343 343.732 878.605 344.051Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_83"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M874.448 340.93C874.807 341.082 875.208 341.162 875.488 341.45C875.151 341.26 874.742 341.195 874.448 340.93Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_84"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M873.27 340.65C873.027 340.565 872.705 340.616 872.508 340.45C872.778 340.489 873.091 340.454 873.27 340.65Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_85"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M857.61 363.453C857.916 363.563 858.193 363.723 858.441 363.933C858.135 363.823 857.858 363.663 857.61 363.453Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_86"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M866.409 365.253C866.738 365.376 867.038 365.55 867.31 365.773C866.98 365.65 866.68 365.477 866.409 365.253Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_87"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M872.228 377.975C872.425 377.582 872.747 377.261 872.991 376.895C872.812 377.298 872.499 377.624 872.228 377.975Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_88"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M873.545 376.175C874.445 374.747 875.348 373.322 876.178 371.854C875.408 373.356 874.51 374.785 873.545 376.175Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_89"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M878.049 367.814C877.787 368.436 877.572 369.085 877.217 369.654C877.505 369.046 877.716 368.395 878.049 367.814Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_90"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M879.158 364.773C879.006 365.299 878.87 365.834 878.603 366.294C878.796 365.792 878.926 365.253 879.158 364.773Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_91"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M878.605 345.571C878.872 345.722 879.007 346.101 879.159 346.451C878.927 346.239 878.798 345.85 878.605 345.571Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_92"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M877.219 343.811C877.574 343.971 877.789 344.372 878.051 344.691C877.717 344.495 877.506 344.087 877.219 343.811Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_93"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M873.548 341.53C874.512 341.806 875.41 342.198 876.18 342.81C875.351 342.301 874.448 341.918 873.548 341.53Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_94"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M872.231 341.25C872.502 341.289 872.815 341.253 872.993 341.45C872.75 341.365 872.428 341.416 872.231 341.25Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_95"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M853.107 351.412C853.28 351.058 853.58 350.778 853.869 350.491C853.662 350.826 853.352 351.1 853.107 351.412Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_96"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M850.958 354.172C851.137 353.769 851.45 353.443 851.721 353.092C851.524 353.485 851.202 353.806 850.958 354.172Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_97"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M847.771 359.213C848.079 358.67 848.328 358.094 848.672 357.572C848.395 358.132 848.134 358.702 847.771 359.213Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_98"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M845.9 363.253C846.163 362.631 846.378 361.982 846.732 361.413C846.445 362.021 846.234 362.672 845.9 363.253Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_99"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M844.791 366.293C844.943 365.768 845.078 365.232 845.345 364.773C845.152 365.275 845.023 365.814 844.791 366.293Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_100"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M844.79 384.616C845.021 384.828 845.151 385.217 845.344 385.496C845.077 385.345 844.942 384.966 844.79 384.616Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_101"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M846.73 387.256C846.376 387.096 846.161 386.695 845.898 386.376C846.232 386.572 846.443 386.98 846.73 387.256Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_102"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M848.67 388.856C848.326 388.732 848.077 388.443 847.769 388.256C848.132 388.348 848.393 388.616 848.67 388.856Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_103"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M851.718 389.817C851.448 389.778 851.135 389.813 850.956 389.616C851.199 389.701 851.521 389.651 851.718 389.817Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_104"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M853.866 389.936C853.577 389.983 853.277 390.049 853.104 389.896C853.349 389.925 853.659 389.841 853.866 389.936Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_105"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M865.507 382.655C865.709 382.239 865.94 381.839 866.2 381.455C865.998 381.872 865.767 382.272 865.507 382.655Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_106"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M865.37 366.173C865.676 366.283 865.953 366.443 866.201 366.653C865.895 366.544 865.618 366.383 865.37 366.173Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_107"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M868.003 360.493C868.298 360.541 868.469 360.805 868.765 360.853C868.441 361.065 868.039 360.724 867.795 360.533C867.895 360.433 867.964 360.747 868.003 360.493Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_108"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M870.013 348.692C871.759 349.615 872.404 352.445 873.685 354.172C875.477 353.922 877.071 354.014 877.981 355.292C877.145 355.983 876.28 356.657 875.417 357.333C876.354 358.11 877.925 357.789 878.604 359.013C877.94 358.886 877.09 358.812 876.248 358.773C875.402 358.734 874.605 358.563 874.308 357.653C875.02 356.757 875.955 355.99 877.149 355.372C876.614 354.935 875.997 354.968 875.348 354.892C874.684 354.815 873.847 355.246 873.2 355.092C872.527 354.933 872.085 353.47 871.676 352.692C870.666 350.773 869.92 349.475 868.142 348.892C867.096 348.548 865.979 348.258 863.985 349.452C863.34 349.234 862.379 348.804 861.352 349.772C861.365 350.832 862.214 351.019 862.668 351.812C863.106 352.576 863.251 353.666 863.707 354.252C863.851 354.437 864.272 354.561 864.331 354.852C864.495 355.667 863.751 356.759 863.846 357.613C863.731 357.922 863.73 358.717 863.846 358.893C863.962 359.838 864.144 360.669 864.746 360.773C864.954 359.48 865.078 358.138 865.717 357.093C866.395 358.37 867.086 359.627 868.003 360.493C867.964 360.747 867.895 360.433 867.795 360.533C866.931 360.323 866.233 359.824 865.855 358.773C865.501 359.766 865.785 360.879 864.954 361.453C863.174 362.685 862.861 357.532 863.777 355.413C862.944 355.18 862.827 353.534 862.183 352.332C861.806 351.628 860.652 351.529 860.728 350.292C860.856 348.22 863.642 347.879 864.331 348.452C866.737 347.112 867.964 347.814 869.32 348.292C869.522 348.475 869.753 348.608 870.013 348.692Z"
                                fill="#FEFEFE"
                              />
                              <path
                                id="Vector_109"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M869.32 348.291C869.58 348.374 869.811 348.507 870.013 348.691C869.753 348.608 869.522 348.475 869.32 348.291Z"
                                fill="#FFCE92"
                              />
                              <path
                                id="Vector_110"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M864.955 351.532C864.863 351.024 864.481 351.02 864.331 350.612C865.174 349.828 865.65 350.853 864.955 351.532Z"
                                fill="#FEFEFE"
                              />
                              <path
                                id="Vector_111"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M854.213 382.055C854.473 382.138 854.704 382.272 854.906 382.455C854.646 382.372 854.415 382.239 854.213 382.055Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_112"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M856.293 370.294C855.974 370.232 855.78 369.956 855.461 369.894C855.817 369.68 856.229 370.058 856.501 370.254C856.401 370.354 856.331 370.04 856.293 370.294Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_113"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M854.213 382.055C852.467 381.133 851.825 378.298 850.541 376.575C848.753 376.818 847.16 376.725 846.245 375.455C847.073 374.759 847.96 374.097 848.809 373.414C847.874 372.634 846.31 372.943 845.622 371.734C846.09 371.561 846.348 371.957 846.8 372.014C847.941 372.158 849.533 371.635 849.918 373.094C849.191 373.982 848.275 374.759 847.077 375.375C847.656 375.702 848.138 375.884 848.809 375.975C849.463 376.063 850.362 375.497 851.026 375.655C851.69 375.812 852.149 377.268 852.55 378.055C853.532 379.978 854.309 381.273 856.084 381.855C857.12 382.195 858.247 382.494 860.241 381.295C860.886 381.513 861.847 381.943 862.874 380.975C862.869 379.907 862.012 379.728 861.558 378.935C861.12 378.171 860.975 377.081 860.519 376.495C860.374 376.308 859.955 376.189 859.895 375.895C859.731 375.08 860.475 373.989 860.38 373.134C860.495 372.799 860.496 371.977 860.38 371.774C860.233 370.909 860.089 370.039 859.48 369.974C859.2 371.253 859.264 372.73 858.371 373.654C857.915 372.124 857.072 371.265 856.293 370.294C856.331 370.04 856.401 370.354 856.5 370.254C857.35 370.436 858 370.963 858.371 371.974C858.733 370.982 858.445 369.874 859.272 369.294C861.046 368.048 861.362 373.233 860.449 375.335C861.278 375.571 861.4 377.214 862.043 378.415C862.417 379.113 863.576 379.229 863.498 380.455C863.366 382.524 860.591 382.863 859.895 382.295C857.489 383.635 856.263 382.933 854.906 382.455C854.704 382.272 854.473 382.139 854.213 382.055Z"
                                fill="#FEFEFE"
                              />
                              <path
                                id="Vector_114"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M859.272 379.215C859.349 379.747 859.756 379.71 859.895 380.135C859.043 380.913 858.593 379.904 859.272 379.215Z"
                                fill="#FEFEFE"
                              />
                              <path
                                id="Vector_115"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M860.798 343.691C861.422 343.197 862.53 342.558 863.154 342.331C862.369 342.784 861.584 343.237 860.798 343.691Z"
                                fill="#ADC0D1"
                              />
                              <path
                                id="Vector_116"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M860.795 388.736C861.58 388.283 862.365 387.829 863.151 387.376C862.527 387.87 861.419 388.509 860.795 388.736Z"
                                fill="#ADC0D1"
                              />
                            </g>
                          </g>
                        </g>
                        <path
                          d="M827.858 342.631L897.135 302.631C897.278 302.548 897.395 302.615 897.395 302.781L897.392 384.189L828.029 424.239C827.933 424.294 827.855 424.249 827.855 424.139L827.858 342.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_9">
                        <path
                          d="M822.124 421.178L822.124 339.811C822.124 339.535 822.318 339.423 822.557 339.561L827.764 342.568L827.764 423.935C827.764 424.211 827.57 424.323 827.331 424.184L822.124 421.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M822.124 421.178L822.124 339.811C822.124 339.535 822.318 339.423 822.557 339.561L827.764 342.568L827.764 423.935C827.764 424.211 827.57 424.323 827.331 424.184L822.124 421.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_9">
                        <path
                          d="M891.694 299L822.52 338.938C822.233 339.104 822.233 339.372 822.52 339.538L827.818 342.596L896.993 302.658C897.28 302.493 897.28 302.224 896.993 302.058L891.694 299Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M891.694 299L822.52 338.938C822.233 339.104 822.233 339.372 822.52 339.538L827.818 342.596L896.993 302.658C897.28 302.493 897.28 302.224 896.993 302.058L891.694 299Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="portgresql">
                      <g id="Frame 604_10">
                        <g clipPath="url(#clip40_3013_97113)">
                          <path
                            d="M908.858 295.631L978.135 255.631C978.278 255.548 978.395 255.615 978.395 255.781L978.392 337.189L909.029 377.239C908.933 377.294 908.855 377.249 908.855 377.139L908.858 295.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="PostgreSQL" clipPath="url(#clip41_3013_97113)">
                            <g id="PostgreSQL_2">
                              <g id="Vector_117">
                                <path
                                  d="M953.506 322.786C953.769 320.052 953.69 319.719 955.325 319.193L955.74 318.997C956.997 318.338 958.642 317.084 959.608 315.998C961.688 313.662 962.921 311.056 960.87 312.738C956.192 316.573 955.871 314.896 955.871 314.896C960.811 303.425 962.877 291.292 961.095 289.643C956.234 285.144 947.819 293.457 947.678 293.628L947.634 293.663C946.709 293.971 945.675 294.434 944.513 295.082C942.396 296.264 940.79 297.885 939.572 299.675C939.572 299.675 924.561 301.068 925.258 317.085C925.407 320.492 929.514 341.059 934.415 331.301C936.206 327.733 937.937 324.592 937.937 324.592C938.796 324.767 939.825 324.516 940.905 323.769L940.988 323.638C940.962 323.967 940.973 324.268 941.021 324.605C939.759 326.992 940.13 327.07 937.606 329.138C935.052 331.231 936.553 331.467 937.532 331.189C938.719 330.853 941.466 329.762 943.323 325.634L943.249 326.025C943.744 326.205 943.71 329.108 943.78 331.127C943.851 333.146 943.968 335.001 944.325 335.928C944.682 336.855 945.103 339.531 948.42 336.78C951.192 334.481 953.312 332.252 953.506 322.786"
                                  fill="#2B2B2B"
                                />
                                <path
                                  d="M953.506 322.786C953.769 320.052 953.69 319.719 955.325 319.193L955.74 318.997C956.997 318.338 958.642 317.084 959.608 315.998C961.688 313.662 962.921 311.056 960.87 312.738C956.192 316.573 955.871 314.896 955.871 314.896C960.811 303.425 962.877 291.292 961.095 289.643C956.234 285.144 947.819 293.457 947.678 293.628L947.634 293.663C946.709 293.971 945.675 294.434 944.513 295.082C942.396 296.264 940.79 297.885 939.572 299.675C939.572 299.675 924.561 301.068 925.258 317.085C925.407 320.492 929.514 341.059 934.415 331.301C936.206 327.733 937.937 324.592 937.937 324.592C938.796 324.767 939.825 324.516 940.905 323.769L940.988 323.638C940.962 323.967 940.973 324.268 941.021 324.605C939.759 326.992 940.13 327.07 937.606 329.138C935.052 331.231 936.553 331.467 937.532 331.189C938.719 330.853 941.466 329.762 943.323 325.634L943.249 326.025C943.744 326.205 943.71 329.108 943.78 331.127C943.851 333.146 943.968 335.001 944.325 335.928C944.682 336.855 945.103 339.531 948.42 336.78C951.192 334.481 953.312 332.252 953.506 322.786"
                                  stroke="#2B2B2B"
                                  strokeWidth="1.48488"
                                />
                              </g>
                              <path
                                id="Vector_118"
                                d="M960.871 312.737C956.193 316.573 955.871 314.895 955.871 314.895C960.811 303.424 962.877 291.291 961.095 289.641C956.235 285.143 947.82 293.456 947.679 293.627L947.634 293.663C946.71 293.971 945.676 294.433 944.513 295.082C942.396 296.264 940.791 297.884 939.572 299.674C939.572 299.674 924.561 301.068 925.258 317.085C925.407 320.492 929.513 341.059 934.415 331.301C936.206 327.733 937.937 324.592 937.937 324.592C938.796 324.767 939.825 324.515 940.904 323.77L940.988 323.638C940.962 323.967 940.974 324.268 941.021 324.605C939.759 326.992 940.13 327.07 937.606 329.138C935.052 331.231 936.552 331.467 937.532 331.189C938.719 330.853 941.466 329.762 943.323 325.634L943.249 326.025C943.743 326.206 944.091 328.57 944.032 330.929C943.974 333.288 943.935 334.906 944.324 335.928C944.714 336.95 945.102 339.531 948.42 336.78C951.192 334.481 952.629 331.841 952.829 328.705C952.971 326.476 953.292 326.608 953.313 324.677L953.57 323.619C953.867 320.537 953.617 319.742 955.325 319.193L955.74 318.996C956.997 318.338 958.643 317.083 959.608 315.998C961.688 313.662 962.921 311.055 960.871 312.737L960.871 312.737Z"
                                fill="#336791"
                              />
                              <path
                                id="Vector_119"
                                d="M947.663 293.564C947.143 294.056 956.019 284.924 961.063 289.592C962.844 291.241 960.779 303.375 955.839 314.846M943.524 324.421C943.395 329.911 943.555 335.271 944.006 336.337C944.457 337.402 945.421 339.423 948.739 336.671C951.511 334.372 952.52 332.437 952.958 329.199C953.281 326.816 953.902 320.357 953.982 319.061L943.524 324.421ZM939.549 299.566C939.549 299.566 924.528 301.018 925.225 317.035C925.374 320.443 929.481 341.01 934.382 331.251C936.173 327.684 937.793 324.761 937.793 324.761L939.549 299.566Z"
                                stroke="white"
                                strokeWidth="0.494959"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_120"
                                d="M955.839 314.846C955.839 314.846 956.16 316.524 960.839 312.687C962.889 311.006 961.655 313.613 959.576 315.949C957.87 317.865 954.045 320.312 953.982 319.061C953.822 315.834 955.996 315.588 955.839 314.846C955.697 314.179 954.725 314.005 954.082 312.542C953.521 311.266 946.383 303.114 956.063 299.348C956.417 299.057 953.539 289.977 944.48 295.033C935.423 300.087 935.719 313.189 935.719 313.189"
                                stroke="white"
                                strokeWidth="0.494959"
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                              />
                              <path
                                id="Vector_121"
                                d="M940.99 324.555C939.727 326.942 940.098 327.019 937.574 329.088C935.021 331.181 936.521 331.417 937.5 331.139C938.687 330.803 941.435 329.712 943.291 325.583C943.856 324.326 943.288 323.17 942.511 323.239C942.136 323.273 941.635 323.334 940.99 324.555V324.555Z"
                                stroke="white"
                                strokeWidth="0.494959"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_122"
                                d="M940.905 324.575C940.778 323.673 941.178 322.281 941.607 320.676C942.25 318.267 943.736 315.372 942.548 309.596C941.663 305.292 935.722 312.535 935.719 313.19C935.715 313.845 935.987 316.344 935.619 319.651C935.139 323.965 937.803 325.842 940.871 323.721"
                                stroke="white"
                                strokeWidth="0.494959"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_123"
                                d="M939.494 310.912C939.467 311.151 939.841 311.53 940.329 311.328C940.815 311.127 941.232 310.421 941.259 310.183C941.285 309.945 940.912 309.915 940.424 310.116C939.937 310.318 939.52 310.675 939.494 310.912L939.494 310.912Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="0.164986"
                              />
                              <path
                                id="Vector_124"
                                d="M954.32 301.897C954.347 302.105 953.973 302.916 953.485 303.277C952.998 303.638 952.582 303.414 952.555 303.206C952.529 302.998 952.903 302.537 953.39 302.176C953.877 301.814 954.294 301.69 954.32 301.898L954.32 301.897Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="0.0825131"
                              />
                              <path
                                id="Vector_125"
                                d="M956.063 299.348C956.143 301.051 955.742 302.474 955.692 304.365C955.617 307.115 956.788 309.537 955.022 313.658"
                                stroke="white"
                                strokeWidth="0.494959"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </g>
                        </g>
                        <path
                          d="M908.858 295.631L978.135 255.631C978.278 255.548 978.395 255.615 978.395 255.781L978.392 337.189L909.029 377.239C908.933 377.294 908.855 377.249 908.855 377.139L908.858 295.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_10">
                        <path
                          d="M903.124 374.178L903.124 292.811C903.124 292.535 903.318 292.423 903.557 292.561L908.764 295.568L908.764 376.935C908.764 377.211 908.57 377.323 908.331 377.184L903.124 374.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M903.124 374.178L903.124 292.811C903.124 292.535 903.318 292.423 903.557 292.561L908.764 295.568L908.764 376.935C908.764 377.211 908.57 377.323 908.331 377.184L903.124 374.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_10">
                        <path
                          d="M972.694 252L903.52 291.938C903.233 292.104 903.233 292.372 903.52 292.538L908.818 295.596L977.993 255.658C978.28 255.493 978.28 255.224 977.993 255.058L972.694 252Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M972.694 252L903.52 291.938C903.233 292.104 903.233 292.372 903.52 292.538L908.818 295.596L977.993 255.658C978.28 255.493 978.28 255.224 977.993 255.058L972.694 252Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="aws_dynamodb">
                      <g id="Frame 604_11">
                        <g clipPath="url(#clip42_3013_97113)">
                          <path
                            d="M908.858 392.631L978.135 352.631C978.278 352.548 978.395 352.615 978.395 352.781L978.392 434.189L909.029 474.239C908.933 474.294 908.855 474.249 908.855 474.139L908.858 392.631Z"
                            fill="#7CBEFF"
                          />
                          <g id="AWS RDS" clipPath="url(#clip43_3013_97113)">
                            <g
                              id="AWS RDS_2"
                              clipPath="url(#clip44_3013_97113)"
                            >
                              <path
                                id="Vector_126"
                                d="M963.612 417.834L959.005 427.022L958.591 426.666L958.594 384.904L959.008 384.034L963.614 387.901L963.612 417.834"
                                fill="#1A476F"
                              />
                              <path
                                id="Vector_127"
                                d="M959.004 427.023L950.202 437.427L949.836 436.926L949.834 384.571L950.2 383.803L959.007 384.023L959.004 427.023Z"
                                fill="#1F5B98"
                              />
                              <path
                                id="Vector_128"
                                d="M924.269 410.617L928.877 401.43L929.393 401.33L929.287 443.647L928.874 444.418L924.267 440.55L924.269 410.617Z"
                                fill="#2D72B8"
                              />
                              <path
                                id="Vector_129"
                                d="M937.675 444.659L928.874 444.418L928.877 401.418L937.686 391.028L938.102 391.469L938.092 443.644L937.675 444.659"
                                fill="#5294CF"
                              />
                              <path
                                id="Vector_130"
                                d="M950.2 383.803L937.686 391.028L937.682 444.656L950.196 437.431L950.2 383.803Z"
                                fill="#2D72B8"
                              />
                            </g>
                          </g>
                        </g>
                        <path
                          d="M908.858 392.631L978.135 352.631C978.278 352.548 978.395 352.615 978.395 352.781L978.392 434.189L909.029 474.239C908.933 474.294 908.855 474.249 908.855 474.139L908.858 392.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_11">
                        <path
                          d="M903.124 471.178L903.124 389.811C903.124 389.535 903.318 389.423 903.557 389.561L908.764 392.568L908.764 473.935C908.764 474.211 908.57 474.323 908.331 474.184L903.124 471.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M903.124 471.178L903.124 389.811C903.124 389.535 903.318 389.423 903.557 389.561L908.764 392.568L908.764 473.935C908.764 474.211 908.57 474.323 908.331 474.184L903.124 471.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_11">
                        <path
                          d="M972.694 349L903.52 388.938C903.233 389.104 903.233 389.372 903.52 389.538L908.818 392.596L977.993 352.658C978.28 352.493 978.28 352.224 977.993 352.058L972.694 349Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M972.694 349L903.52 388.938C903.233 389.104 903.233 389.372 903.52 389.538L908.818 392.596L977.993 352.658C978.28 352.493 978.28 352.224 977.993 352.058L972.694 349Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="big_query">
                      <g id="Frame 604_12">
                        <g clipPath="url(#clip45_3013_97113)">
                          <path
                            d="M827.858 439.631L897.135 399.631C897.278 399.548 897.395 399.615 897.395 399.781L897.392 481.189L828.029 521.239C827.933 521.294 827.855 521.249 827.855 521.139L827.858 439.631Z"
                            fill="#7CBEFF"
                          />
                          <g
                            id="Google Bigquery"
                            clipPath="url(#clip46_3013_97113)"
                          >
                            <g id="Google Bigquery_2">
                              <path
                                id="Vector_131"
                                d="M851.056 487.526L842.368 474.842C842.034 474.354 841.858 473.683 841.858 472.898C841.858 472.112 842.034 471.238 842.369 470.365L851.059 447.646C851.394 446.773 851.874 445.93 852.453 445.203C853.032 444.476 853.688 443.89 854.357 443.504L871.736 433.47C872.404 433.085 873.061 432.913 873.639 432.971C874.218 433.03 874.698 433.318 875.033 433.806L883.721 446.49C884.055 446.978 884.231 447.648 884.231 448.434C884.231 449.22 884.055 450.094 883.72 450.967L875.03 473.685C874.695 474.559 874.215 475.401 873.636 476.128C873.057 476.855 872.401 477.441 871.733 477.827L854.353 487.861C853.685 488.247 853.029 488.419 852.45 488.36C851.871 488.301 851.391 488.014 851.056 487.526L851.056 487.526Z"
                                fill="url(#paint1_linear_3013_97113)"
                              />
                              <path
                                id="Vector_132"
                                d="M881.211 457.339L868.311 450.343L862.808 451.788L857.865 456.803L855.955 463.755L857.49 469.381L871.371 477.895L872.777 477.084L873.916 475.685L874.534 474.83L875.236 473.185L881.211 457.339Z"
                                fill="#417CE0"
                              />
                              <g id="Group_8">
                                <path
                                  id="Vector_133"
                                  d="M863.045 451.635C858.805 454.083 855.367 460.111 855.366 465.099C855.366 470.086 858.803 472.145 863.044 469.696C867.284 467.248 870.722 461.22 870.722 456.233C870.723 451.245 867.285 449.187 863.045 451.635ZM863.044 467.518C859.826 469.375 857.218 467.814 857.218 464.029C857.219 460.245 859.827 455.672 863.045 453.814C866.263 451.956 868.871 453.518 868.871 457.302C868.87 461.086 866.262 465.66 863.044 467.518"
                                  fill="white"
                                />
                                <path
                                  id="Vector_134"
                                  d="M859.4 462.421L859.4 465.228C859.753 465.737 860.251 466.048 860.85 466.133L860.85 461.584L859.4 462.421ZM862.275 458.395L862.275 465.952C862.521 465.863 862.774 465.75 863.033 465.6C863.269 465.464 863.499 465.301 863.726 465.126L863.726 457.557L862.275 458.395ZM865.284 460.19L865.284 463.524C865.892 462.718 866.392 461.8 866.735 460.856L866.735 459.353L865.284 460.19ZM868.57 463.038L867.774 464.434C867.707 464.552 867.669 464.681 867.669 464.793C867.669 464.906 867.707 464.991 867.774 465.032L870.791 466.837C870.859 466.878 870.95 466.869 871.045 466.814C871.141 466.759 871.232 466.662 871.3 466.544L872.095 465.149C872.162 465.031 872.2 464.902 872.2 464.79C872.2 464.678 872.162 464.592 872.095 464.551L869.078 462.744C869.01 462.705 868.919 462.713 868.824 462.768C868.729 462.823 868.637 462.92 868.57 463.038Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <path
                          d="M827.858 439.631L897.135 399.631C897.278 399.548 897.395 399.615 897.395 399.781L897.392 481.189L828.029 521.239C827.933 521.294 827.855 521.249 827.855 521.139L827.858 439.631Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 605_12">
                        <path
                          d="M822.124 518.178L822.124 436.811C822.124 436.535 822.318 436.423 822.557 436.561L827.764 439.568L827.764 520.935C827.764 521.211 827.57 521.323 827.331 521.184L822.124 518.178Z"
                          fill="#DAECFF"
                        />
                        <path
                          d="M822.124 518.178L822.124 436.811C822.124 436.535 822.318 436.423 822.557 436.561L827.764 439.568L827.764 520.935C827.764 521.211 827.57 521.323 827.331 521.184L822.124 518.178Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Frame 606_12">
                        <path
                          d="M891.694 396L822.52 435.938C822.233 436.104 822.233 436.372 822.52 436.538L827.818 439.596L896.993 399.658C897.28 399.493 897.28 399.224 896.993 399.058L891.694 396Z"
                          fill="#B8DDFF"
                        />
                        <path
                          d="M891.694 396L822.52 435.938C822.233 436.104 822.233 436.372 822.52 436.538L827.818 439.596L896.993 399.658C897.28 399.493 897.28 399.224 896.993 399.058L891.694 396Z"
                          stroke="#2B2B2B"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="cube_19" opacity="0.6">
              <path
                id="Vector_135"
                d="M1061.44 565.404V584.198L1045.22 593.596V574.801L1061.44 565.404Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_136"
                d="M1061.44 565.403L1045.22 574.801L1029 565.403L1045.22 556L1061.44 565.403Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_137"
                d="M1045.22 574.801V593.596L1029 584.198V565.404L1045.22 574.801Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_18">
              <path
                id="Vector_138"
                d="M1045.44 556.404V575.198L1029.22 584.596V565.801L1045.44 556.404Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_139"
                d="M1045.44 556.403L1029.22 565.801L1013 556.403L1029.22 547L1045.44 556.403Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_140"
                d="M1029.22 565.801V584.596L1013 575.198V556.404L1029.22 565.801Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_17">
              <path
                id="Vector_141"
                d="M1078.44 84.4037V103.198L1062.22 112.596V93.801L1078.44 84.4037Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_142"
                d="M1078.44 84.4035L1062.22 93.8007L1046 84.4035L1062.22 75L1078.44 84.4035Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_143"
                d="M1062.22 93.801V112.596L1046 103.198V84.4037L1062.22 93.801Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_16">
              <path
                id="Vector_144"
                d="M850.445 196.595V215.39L834.219 224.787V205.992L850.445 196.595Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_145"
                d="M850.445 196.595L834.219 205.992L818 196.595L834.219 187.191L850.445 196.595Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_146"
                d="M834.219 205.992V224.787L818 215.39V196.595L834.219 205.992Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_15" opacity="0.6">
              <path
                id="Vector_147"
                d="M850.445 177.999V196.794L834.219 206.191V187.397L850.445 177.999Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_148"
                d="M850.445 177.999L834.219 187.396L818 177.999L834.219 168.596L850.445 177.999Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_149"
                d="M834.219 187.397V206.191L818 196.794V177.999L834.219 187.397Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_14">
              <path
                id="Vector_150"
                d="M850.445 159.404V178.198L834.219 187.596V168.801L850.445 159.404Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_151"
                d="M850.445 159.403L834.219 168.801L818 159.403L834.219 150L850.445 159.403Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_152"
                d="M834.219 168.801V187.596L818 178.198V159.404L834.219 168.801Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_13" opacity="0.6">
              <path
                id="Vector_153"
                d="M781.445 73.9994V92.794L765.219 102.191V83.3967L781.445 73.9994Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_154"
                d="M781.445 73.9992L765.219 83.3964L749 73.9992L765.219 64.5957L781.445 73.9992Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_155"
                d="M765.219 83.3967V102.191L749 92.794V73.9994L765.219 83.3967Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_12">
              <path
                id="Vector_156"
                d="M781.445 55.4037V74.1983L765.219 83.5955V64.801L781.445 55.4037Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_157"
                d="M781.445 55.4035L765.219 64.8007L749 55.4035L765.219 46L781.445 55.4035Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_158"
                d="M765.219 64.801V83.5955L749 74.1983V55.4037L765.219 64.801Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_11">
              <path
                id="Vector_159"
                d="M690.445 454.404V473.198L674.219 482.596V463.801L690.445 454.404Z"
                fill="#7CBEFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_160"
                d="M690.445 454.403L674.219 463.801L658 454.403L674.219 445L690.445 454.403Z"
                fill="#B8DDFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_161"
                d="M674.219 463.801V482.596L658 473.198V454.404L674.219 463.801Z"
                fill="#DAECFF"
                stroke="#2EA6FF"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_10" opacity="0.6">
              <path
                id="Vector_162"
                d="M428.445 525.404V544.198L412.219 553.596V534.801L428.445 525.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_163"
                d="M428.445 525.403L412.219 534.801L396 525.403L412.219 516L428.445 525.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_164"
                d="M412.219 534.801V553.596L396 544.198V525.404L412.219 534.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_9">
              <path
                id="Vector_165"
                d="M373.445 166.404V185.198L357.219 194.596V175.801L373.445 166.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_166"
                d="M373.445 166.403L357.219 175.801L341 166.403L357.219 157L373.445 166.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_167"
                d="M357.219 175.801V194.596L341 185.198V166.404L357.219 175.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_8">
              <path
                id="Vector_168"
                d="M373.445 147.404V166.198L357.219 175.596V156.801L373.445 147.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_169"
                d="M373.445 147.403L357.219 156.801L341 147.403L357.219 138L373.445 147.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_170"
                d="M357.219 156.801V175.596L341 166.198V147.404L357.219 156.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_7" opacity="0.6">
              <path
                id="Vector_171"
                d="M373.445 128.404V147.198L357.219 156.596V137.801L373.445 128.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_172"
                d="M373.445 128.403L357.219 137.801L341 128.403L357.219 119L373.445 128.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_173"
                d="M357.219 137.801V156.596L341 147.198V128.404L357.219 137.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_6">
              <path
                id="Vector_174"
                d="M107.445 484.404V503.198L91.2192 512.596V493.801L107.445 484.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_175"
                d="M107.445 484.403L91.2193 493.801L75 484.403L91.2193 475L107.445 484.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_176"
                d="M91.2193 493.801V512.596L75 503.198V484.404L91.2193 493.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_5">
              <path
                id="Vector_177"
                d="M107.445 465.404V484.198L91.2192 493.596V474.801L107.445 465.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_178"
                d="M107.445 465.403L91.2193 474.801L75 465.403L91.2193 456L107.445 465.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_179"
                d="M91.2193 474.801V493.596L75 484.198V465.404L91.2193 474.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_4" opacity="0.6">
              <path
                id="Vector_180"
                d="M91.4447 493.404V512.198L75.2192 521.596V502.801L91.4447 493.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_181"
                d="M91.4447 493.403L75.2193 502.801L59 493.403L75.2193 484L91.4447 493.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_182"
                d="M75.2193 502.801V521.596L59 512.198V493.404L75.2193 502.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_3">
              <path
                id="Vector_183"
                d="M91.4447 166.404V185.198L75.2192 194.596V175.801L91.4447 166.404Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_184"
                d="M91.4447 166.403L75.2193 175.801L59 166.403L75.2193 157L91.4447 166.403Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_185"
                d="M75.2193 175.801V194.596L59 185.198V166.404L75.2193 175.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_2">
              <path
                id="Vector_186"
                d="M145.445 63.4037V82.1983L129.219 91.5955V72.801L145.445 63.4037Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_187"
                d="M145.445 63.4035L129.219 72.8007L113 63.4035L129.219 54L145.445 63.4035Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_188"
                d="M129.219 72.801V91.5955L113 82.1983V63.4037L129.219 72.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
            <g id="cube_1" opacity="0.6">
              <path
                id="Vector_189"
                d="M145.445 44.4037V63.1983L129.219 72.5955V53.801L145.445 44.4037Z"
                fill="#B88A00"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_190"
                d="M145.445 44.4035L129.219 53.8007L113 44.4035L129.219 35L145.445 44.4035Z"
                fill="#FFECB5"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
              <path
                id="Vector_191"
                d="M129.219 53.801V72.5955L113 63.1983V44.4037L129.219 53.801Z"
                fill="#FFDF3A"
                stroke="#AF9300"
                strokeLinejoin="bevel"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_3013_97113"
            x1="292.07"
            y1="444.645"
            x2="271.646"
            y2="480.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4387FD" />
            <stop offset="1" stopColor="#4683EA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3013_97113"
            x1="863.046"
            y1="438.488"
            x2="882.223"
            y2="471.702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4387FD" />
            <stop offset="1" stopColor="#4683EA" />
          </linearGradient>
          <clipPath id="clip0_3013_97113">
            <rect width="1128" height="612" fill="white" />
          </clipPath>
          <clipPath id="clip1_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip2_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip3_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip4_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip5_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip6_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip7_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip8_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip9_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip10_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 291 334)"
            />
          </clipPath>
          <clipPath id="clip11_3013_97113">
            <path
              d="M245.654 401.631L176.377 361.631C176.234 361.548 176.118 361.615 176.118 361.781L176.121 443.189L245.484 483.239C245.579 483.294 245.657 483.249 245.657 483.139L245.654 401.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip12_3013_97113">
            <rect
              width="35.7175"
              height="47.645"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 195.748 389.805)"
            />
          </clipPath>
          <clipPath id="clip13_3013_97113">
            <path
              d="M326.666 447.631L257.389 407.631C257.246 407.548 257.129 407.615 257.129 407.781L257.132 489.189L326.495 529.239C326.591 529.294 326.669 529.249 326.669 529.139L326.666 447.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip14_3013_97113">
            <rect
              width="80.077"
              height="88.2314"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 257.34 404.301)"
            />
          </clipPath>
          <clipPath id="clip15_3013_97113">
            <path
              d="M245.654 306.631L176.377 266.631C176.234 266.548 176.118 266.615 176.118 266.781L176.121 348.189L245.484 388.239C245.579 388.294 245.657 388.249 245.657 388.139L245.654 306.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip16_3013_97113">
            <rect
              width="80.077"
              height="88.2314"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 176.329 263.301)"
            />
          </clipPath>
          <clipPath id="clip17_3013_97113">
            <rect
              width="43.2416"
              height="48.5273"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 191.587 291.52)"
            />
          </clipPath>
          <clipPath id="clip18_3013_97113">
            <path
              d="M326.666 352.631L257.389 312.631C257.246 312.548 257.129 312.615 257.129 312.781L257.132 394.189L326.495 434.239C326.591 434.294 326.669 434.249 326.669 434.139L326.666 352.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip19_3013_97113">
            <rect
              width="80.077"
              height="88.2314"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 257.34 309.301)"
            />
          </clipPath>
          <clipPath id="clip20_3013_97113">
            <rect
              width="49.6477"
              height="54.7035"
              fill="white"
              transform="matrix(0.866025 0.5 7.53359e-05 1 270.518 332.79)"
            />
          </clipPath>
          <clipPath id="clip21_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip22_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip23_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip24_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip25_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip26_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip27_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip28_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip29_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip30_3013_97113">
            <rect
              width="29.3932"
              height="29.3932"
              fill="white"
              transform="matrix(0.866007 -0.500033 -3.76274e-05 1 575.001 225.698)"
            />
          </clipPath>
          <clipPath id="clip31_3013_97113">
            <path
              d="M784.858 297.631L854.135 257.631C854.278 257.548 854.395 257.615 854.395 257.781L854.392 339.189L785.029 379.239C784.933 379.294 784.855 379.249 784.855 379.139L784.858 297.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip32_3013_97113">
            <path
              d="M865.858 250.631L935.135 210.631C935.278 210.548 935.395 210.615 935.395 210.781L935.392 292.189L866.029 332.239C865.933 332.294 865.855 332.249 865.855 332.139L865.858 250.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip33_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 865.807 250.825)"
            />
          </clipPath>
          <clipPath id="clip34_3013_97113">
            <path
              d="M865.858 347.631L935.135 307.631C935.278 307.548 935.395 307.615 935.395 307.781L935.392 389.189L866.029 429.239C865.933 429.294 865.855 429.249 865.855 429.139L865.858 347.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip35_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 865.807 347.825)"
            />
          </clipPath>
          <clipPath id="clip36_3013_97113">
            <path
              d="M784.858 394.631L854.135 354.631C854.278 354.548 854.395 354.615 854.395 354.781L854.392 436.189L785.029 476.239C784.933 476.294 784.855 476.249 784.855 476.139L784.858 394.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip37_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 784.807 394.825)"
            />
          </clipPath>
          <clipPath id="clip38_3013_97113">
            <path
              d="M827.858 342.631L897.135 302.631C897.278 302.548 897.395 302.615 897.395 302.781L897.392 384.189L828.029 424.239C827.933 424.294 827.855 424.249 827.855 424.139L827.858 342.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip39_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 827.807 342.825)"
            />
          </clipPath>
          <clipPath id="clip40_3013_97113">
            <path
              d="M908.858 295.631L978.135 255.631C978.278 255.548 978.395 255.615 978.395 255.781L978.392 337.189L909.029 377.239C908.933 377.294 908.855 377.249 908.855 377.139L908.858 295.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip41_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 908.807 295.825)"
            />
          </clipPath>
          <clipPath id="clip42_3013_97113">
            <path
              d="M908.858 392.631L978.135 352.631C978.278 352.548 978.395 352.615 978.395 352.781L978.392 434.189L909.029 474.239C908.933 474.294 908.855 474.249 908.855 474.139L908.858 392.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip43_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 908.807 392.825)"
            />
          </clipPath>
          <clipPath id="clip44_3013_97113">
            <rect
              width="45.441"
              height="53.7208"
              fill="white"
              transform="matrix(-0.866025 0.5 -7.53359e-05 1 963.619 376.055)"
            />
          </clipPath>
          <clipPath id="clip45_3013_97113">
            <path
              d="M827.858 439.631L897.135 399.631C897.278 399.548 897.395 399.615 897.395 399.781L897.392 481.189L828.029 521.239C827.933 521.294 827.855 521.249 827.855 521.139L827.858 439.631Z"
              fill="white"
            />
          </clipPath>
          <clipPath id="clip46_3013_97113">
            <rect
              width="81.1447"
              height="82.6474"
              fill="white"
              transform="matrix(0.866025 -0.5 -7.53359e-05 1 827.807 439.825)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
