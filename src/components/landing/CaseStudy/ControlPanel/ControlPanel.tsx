import { useMutationObservable } from "@/hooks/useMutationObservable";
import { useRefPosition } from "@/hooks/useRefPosition";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Nullable } from "@/types/instill";
import {
  DataDestinationIcon,
  DataSourceIcon,
  ElementPosition,
  getElementPosition,
  ModelIcon,
} from "@instill-ai/design-system";
import useResizeObserver from "@react-hook/resize-observer";
import { ReactElement, useRef, useState, useCallback, useEffect } from "react";

export type ControlPanelProps = {
  source: ReactElement;
  model: ReactElement;
  destination: ReactElement;
};

type LineStat = {
  x: number;
  y: number;
  width: number;
  height: number;
};

// Because we use useEffect to update DOM in BasicSingleSelect, this component
// won't get notified. We need to use useMutationObservable to be reactive
// about this changes.

const ControlPanel = ({ source, model, destination }: ControlPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerPosition = useRefPosition(containerRef);

  const sourceRef = useRef<HTMLDivElement>(null);
  const sourcePosition = useRefPosition(sourceRef);

  const modelRef = useRef<HTMLDivElement>(null);
  const modelPosition = useRefPosition(modelRef);

  const destRef = useRef<HTMLDivElement>(null);
  const destPosition = useRefPosition(destRef);

  const [sourceToModelLineStat, setSourceToModelLineStat] =
    useState<Nullable<LineStat>>(null);
  const [modelToDestLineStat, setModelToDestLineStat] =
    useState<Nullable<LineStat>>(null);

  const lineDotR = 8;

  useEffect(() => {
    if (
      !containerPosition ||
      !sourcePosition ||
      !modelPosition ||
      !destPosition
    ) {
      return;
    }

    const getLineStat = (
      containerPosition: ElementPosition,
      startPosition: ElementPosition,
      endPosition: ElementPosition
    ) => {
      return {
        x: startPosition.x - containerPosition.x,
        y:
          startPosition.y -
          containerPosition.y +
          startPosition.height -
          lineDotR,
        width: startPosition.width,
        height:
          endPosition.y - startPosition.y - startPosition.height + lineDotR * 2,
      };
    };

    setSourceToModelLineStat(
      getLineStat(containerPosition, sourcePosition, modelPosition)
    );
    setModelToDestLineStat(
      getLineStat(containerPosition, modelPosition, destPosition)
    );
  }, [containerPosition, sourcePosition, modelPosition, destPosition]);

  const getSvgLine = useCallback(
    (stat: LineStat) => {
      return (
        <svg
          viewBox={`0 0 ${stat.width} ${stat.height}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{ top: stat.y, left: stat.x }}
        >
          <line
            x1={stat.x + stat.width / 2}
            y1={lineDotR}
            x2={stat.x + stat.width / 2}
            y2={stat.height}
            stroke="#C0C0C0"
            strokeWidth="3"
          />
          <circle
            cx={stat.x + stat.width / 2}
            cy={lineDotR}
            fill="#A5A5A5"
            r={lineDotR}
          />
          <circle
            cx={stat.x + stat.width / 2}
            cy={lineDotR}
            r={lineDotR / 2}
            fill="white"
          />
          <circle
            cx={stat.x + stat.width / 2}
            cy={stat.height - lineDotR}
            fill="#A5A5A5"
            r={lineDotR}
          />
          <circle
            cx={stat.x + stat.width / 2}
            cy={stat.height - lineDotR}
            r={lineDotR / 2}
            fill="white"
          />
        </svg>
      );
    },
    [lineDotR]
  );

  const iconStyle = {
    width: "w-[30px]",
    height: "h-[30px]",
    color: "fill-white",
    position: "my-auto",
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-full flex-col justify-between"
    >
      <div ref={sourceRef}>{source}</div>
      {sourceToModelLineStat ? getSvgLine(sourceToModelLineStat) : null}
      <div ref={modelRef}>{model}</div>
      {modelToDestLineStat ? getSvgLine(modelToDestLineStat) : null}
      <div ref={destRef}>{destination}</div>
    </div>
  );
};

export default ControlPanel;
