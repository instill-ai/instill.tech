import { useMutationObservable } from "@/hooks/useMutationObservable";
import { Nullable } from "@/types/instill";
import {
  DataDestinationIcon,
  DataSourceIcon,
  ElementPosition,
  getElementPosition,
  ModelIcon,
} from "@instill-ai/design-system";
import {
  ReactElement,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import ControlPanelItem from "./ControlPanelItem";

export type ControlPanelLayoutProps = {
  controls: {
    source: ReactElement[];
    model: ReactElement[];
    destination: ReactElement[];
  };
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

const ControlPanelLayout = ({ controls }: ControlPanelLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerPosition, setContainerPosition] =
    useState<Nullable<ElementPosition>>(null);
  useMutationObservable(containerRef, () => {
    setContainerPosition(getElementPosition(containerRef.current));
  });

  const sourceRef = useRef<HTMLDivElement>(null);
  const [sourcePosition, setSourcePosition] =
    useState<Nullable<ElementPosition>>(null);
  useMutationObservable(sourceRef, () => {
    setSourcePosition(getElementPosition(sourceRef.current));
  });

  const modelRef = useRef<HTMLDivElement>(null);
  const [modelPosition, setModelPosition] =
    useState<Nullable<ElementPosition>>(null);
  useMutationObservable(modelRef, () => {
    setModelPosition(getElementPosition(modelRef.current));
  });

  const destRef = useRef<HTMLDivElement>(null);
  const [destPosition, setDestPosition] =
    useState<Nullable<ElementPosition>>(null);
  useMutationObservable(destRef, () => {
    setDestPosition(getElementPosition(destRef.current));
  });

  const [sourceToModelLineStat, setSourceToModelLineStat] =
    useState<Nullable<LineStat>>(null);
  const [modelToDestLineStat, setModelToDestLineStat] =
    useState<Nullable<LineStat>>(null);

  const lineDotR = 8;

  useLayoutEffect(() => {
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
      className="relative flex h-full flex-col justify-between"
    >
      <ControlPanelItem
        ref={sourceRef}
        title="Source"
        description="Select an exisiting online source"
        icon={<DataSourceIcon {...iconStyle} />}
        isActive={false}
        controls={controls.source}
      />
      {sourceToModelLineStat ? getSvgLine(sourceToModelLineStat) : null}
      <ControlPanelItem
        ref={modelRef}
        title="Model"
        description="Select an exisiting online model"
        icon={<ModelIcon {...iconStyle} />}
        isActive={false}
        controls={controls.source}
      />
      {modelToDestLineStat ? getSvgLine(modelToDestLineStat) : null}
      <ControlPanelItem
        ref={destRef}
        title="Destination"
        description="Select an exisiting online destination"
        icon={<DataDestinationIcon {...iconStyle} />}
        isActive={false}
        controls={controls.source}
      />
    </div>
  );
};

export default ControlPanelLayout;
