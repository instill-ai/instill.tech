import {
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import * as classNames from "classnames";
import { getElementPosition } from "../../lib/utilities";

interface Props {
  /** The height of scroll container */
  height: number;

  /** ScrollContainer style */
  styleName?: string;

  /** Main scroll item that will take proportion as one of the props */
  targetChildren: ReactElement;

  /** sapnRatio * height = when the scroll position reach the new height, action is finished */
  spanRatio: number;

  /** Other childrens which will be set to the bottom of scroll container that will display as a push in effect */
  children: ReactElement;
}

export const StickyScrollLayout: FC<Props> = ({
  height,
  styleName,
  targetChildren,
  children,
  spanRatio,
}) => {
  const scrollViewRef = useRef<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLDivElement>();
  const scrollChildRef = useRef<HTMLDivElement>();
  const [proportion, setProportion] = useState<number>();

  if (spanRatio > 1) {
    throw new Error("Maximum SpanRatio is 1");
  }

  if (spanRatio <= 0) {
    throw new Error("SpanRatio should not be less than or equal to 0");
  }

  const onScroll = () => {
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const containerPosition = getElementPosition(scrollContainerRef.current);

    const calculateProportation = () => {
      if (scrollTop - containerPosition.y > height * spanRatio) {
        return 1;
      }

      return (scrollTop - containerPosition.y) / (height * spanRatio);
    };

    setProportion(calculateProportation);
  };

  useEffect(() => {
    const throttle = (type: string, name: string, obj?: Window | Element) => {
      obj = obj || window;
      let running = false;
      const func = function () {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle("scroll", "optimizedScroll");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("optimizedScroll", onScroll);
        } else {
          window.removeEventListener("optimizedScroll", onScroll);
        }
      },
      { rootMargin: "0px" }
    );

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }
  }, [scrollContainerRef]);

  return (
    <div ref={scrollViewRef}>
      <div
        className={classNames.default(styleName, "relative flex flex-col")}
        ref={scrollContainerRef}
        style={{ height }}
      >
        <div
          ref={scrollChildRef}
          className={`flex flex-col h-[${height / 8}px] sticky top-0 mb-auto`}
        >
          {cloneElement(targetChildren, { proportion })}
        </div>
        {children}
      </div>
    </div>
  );
};
