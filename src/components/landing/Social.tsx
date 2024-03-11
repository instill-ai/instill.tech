import * as React from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "./Card";

const imageList = [
  { id: 1, src: "/images/social/ubitus.png", href: "https://ubitus.net/" },
  { id: 2, src: "/images/social/rybit.png", href: "https://www.rybit.io/" },
  { id: 3, src: "/images/social/super8.png", href: "https://www.no8.io/" },
  { id: 4, src: "/images/social/oxford.png", href: "https://www.ox.ac.uk/" },
  {
    id: 5,
    src: "/images/social/acadamia.png",
    href: "https://www.sinica.edu.tw/en",
  },
  {
    id: 6,
    src: "/images/social/cheng-kung-university.png",
    href: "https://www.ncku.edu.tw/",
  },
  { id: 7, src: "/images/social/ubitus.png", href: "https://ubitus.net/" },
  { id: 8, src: "/images/social/rybit.png", href: "https://www.rybit.io/" },
  { id: 9, src: "/images/social/super8.png", href: "https://www.no8.io/" },
];

export const Social = () => {
  const FAST_DURATION = 10;
  const SLOW_DURATION = 60;

  const [duration, setDuration] = React.useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);

  React.useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 6;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <React.Fragment>
      <div className="mb-20 !w-full rounded">
        <div className="p-6 xl:p-16">
          <div className="text-center">
            <p className="pb-8 font-sans text-[16px] font-normal leading-9 text-gray-800 text-opacity-80 xl:text-[24px]">
              Customers use Instill Cloud to build the backbone of their AI
              applications
            </p>
          </div>
          <div className="hidden justify-center gap-x-8 xl:flex xl:flex-row xl:gap-x-20">
            <div className="max-w-[800px] overflow-hidden">
              <motion.div
                className="flex xl:flex-row xl:gap-x-20"
                style={{ x: xTranslation }}
                ref={ref}
                onHoverStart={() => {
                  setMustFinish(true);
                  setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                  setMustFinish(true);
                  setDuration(FAST_DURATION);
                }}
              >
                {imageList.map((img) => (
                  <Card image={img} key={img.id} />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-x-12 xl:hidden xl:gap-x-20">
            <a
              href="https://ubitus.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:bg-white xl:p-2"
            >
              <img
                src={"/images/social/ubitus.png"}
                alt=""
                sizes=""
                className="my-auto h-12 transition duration-300 hover:grayscale-0 xl:h-16 xl:grayscale"
              />
            </a>

            <a
              href="https://www.rybit.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:bg-white xl:p-2"
            >
              <img
                src={"/images/social/rybit.png"}
                alt=""
                sizes=""
                className="my-auto h-12 transition duration-300 hover:grayscale-0 xl:h-16 xl:grayscale"
              />
            </a>

            <a
              href="https://www.no8.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:bg-white xl:p-2"
            >
              <img
                src={"/images/social/super8.png"}
                alt=""
                sizes=""
                className="my-auto h-12 transition duration-300 hover:grayscale-0 xl:h-16 xl:grayscale"
              />
            </a>
          </div>
          <div className="mt-5 flex justify-center gap-x-12 xl:hidden">
            <a
              href="https://www.ox.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:bg-white xl:p-2"
            >
              <img
                src={"/images/social/oxford.png"}
                alt=""
                sizes=""
                className="my-auto h-12 transition duration-300 hover:grayscale-0 xl:h-16 xl:grayscale"
              />
            </a>

            <a
              href="https://www.sinica.edu.tw/en"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:bg-white xl:p-2"
            >
              <img
                src={"/images/social/acadamia.png"}
                alt=""
                sizes=""
                className="my-auto h-12 transition duration-300 hover:grayscale-0 xl:h-16 xl:grayscale"
              />
            </a>

            <a
              href="https://www.ncku.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:bg-white xl:p-2"
            >
              <img
                src={"/images/social/cheng-kung-university.png"}
                alt=""
                sizes=""
                className="my-auto h-12 transition duration-300 hover:grayscale-0 xl:h-16 xl:grayscale"
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
