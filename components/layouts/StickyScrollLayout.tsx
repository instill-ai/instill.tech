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
  /** The height of scroll parent */
  height: number;

  /** T */
  styleName?: string;

  children: ReactElement;

  /** sapnRatio * height = when the scroll position reach the new height, action is finished */
  spanRatio: number;
}

export const StickyScrollLayout: FC<Props> = ({
  height,
  styleName,
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
          window.addEventListener("scroll", onScroll);
        } else {
          window.removeEventListener("scroll", onScroll);
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
        className={classNames.default(styleName, "relative")}
        ref={scrollContainerRef}
        style={{ height }}
      >
        <div
          ref={scrollChildRef}
          className={`flex h-[${height / 5}px] sticky top-0`}
        >
          {cloneElement(children, { proportion })}
        </div>
      </div>
    </div>
  );
};
