import { Nullable } from "@/types/instill";
import { ElementPosition } from "@instill-ai/design-system";
import {
  ReactElement,
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import * as d3 from "d3";
import { useWindowSize } from "@/hooks/useWindowSize";

import { ControlPanelItem, ControlPanelItemProps } from "../ControlPanelItem";
import { useElementDimension } from "@/hooks/useElementDimension";

type Item = {
  title: string;
  description: string;
  icon: ReactElement;
  isActive: boolean;
  controls: ControlPanelItemProps["controls"];
};

type ControlPanelItems = {
  source: Item;
  model: Item;
  destination: Item;
};

export type ControlPanelProps = {
  items: ControlPanelItems;
  setCurrentShowcaseFrame: Dispatch<SetStateAction<number>>;
  activeIndex: number[];
  getActiveControl: () => "source" | "destination" | "model";
};

type ConnectionLineDataset = {
  line: { x: number; y: number; width: number; height: number }[];
  circle: { cx: number; cy: number; fill: string; r: number }[];
};

// Because we use useEffect to update DOM in BasicSingleSelect, this component
// won't get notified. We need to use useMutationObservable to be reactive
// about this changes.

export const ControlPanel = ({ items, activeIndex }: ControlPanelProps) => {
  const windowSize = useWindowSize();

  const [containerRef, containerDimension] = useElementDimension();
  const [sourceRef, sourceDimension] = useElementDimension();
  const [modelRef, modelDimension] = useElementDimension({ delay: 100 });
  const [destRef, destDimension] = useElementDimension();

  const [sourceToModelLineDataset, setSourceToModelLineDataset] =
    useState<Nullable<ConnectionLineDataset>>(null);
  const [modelToDestLineDataset, setModelToDestLineDataset] =
    useState<Nullable<ConnectionLineDataset>>(null);

  const lineDotR = 8;

  const sourceToModelLineSvgRef = useRef<SVGSVGElement>(null);
  const modelToDestLineSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // get the line and the circle's position. x1 and y1 is the most
    // top left of the ref element. We set the most top left of the
    // container to (0, 0)
    /* 
      (0, 0)
      - - - - - - - - - - - - - - - - - This is the container
      |  (x1, y1)                     |
      |  - - - - - - - - - - - - - -  |
      |  |     I am the element    |  |
      |  - - - - - - - - - - - - - -  |
      |                               |
      - - - - - - - - - - - - - - - - -

    */

    const getLineStat = (
      containerPosition: ElementPosition,
      startPosition: ElementPosition,
      endPosition: ElementPosition
    ) => {
      const x1 = startPosition.x - containerPosition.x;
      const y1 =
        startPosition.y - containerPosition.y + startPosition.height - lineDotR;

      const width = startPosition.width;
      const height =
        endPosition.y - startPosition.y - startPosition.height + lineDotR * 2;

      return {
        line: [
          {
            x: x1,
            y: y1,
            width,
            height,
          },
        ],
        circle: [
          { cx: x1 + width / 2, cy: lineDotR, fill: "#A5A5A5", r: lineDotR },
          { cx: x1 + width / 2, cy: lineDotR, fill: "white", r: lineDotR / 2 },
          {
            cx: x1 + width / 2,
            cy: height - lineDotR,
            fill: "#A5A5A5",
            r: lineDotR,
          },
          {
            cx: x1 + width / 2,
            cy: height - lineDotR,
            fill: "white",
            r: lineDotR / 2,
          },
        ],
      };
    };

    if (
      !sourceDimension ||
      !modelDimension ||
      !destDimension ||
      !containerDimension
    ) {
      return;
    }

    if (windowSize && windowSize.width < 768) {
      setSourceToModelLineDataset(null);
      setModelToDestLineDataset(null);
      return;
    }

    const cookData = () => {
      setSourceToModelLineDataset(
        getLineStat(containerDimension, sourceDimension, modelDimension)
      );
      setModelToDestLineDataset(
        getLineStat(containerDimension, modelDimension, destDimension)
      );
    };

    cookData();
  }, [
    windowSize,
    containerDimension,
    sourceDimension,
    modelDimension,
    destDimension,
    lineDotR,
  ]);

  useEffect(() => {
    const svg = d3.select(sourceToModelLineSvgRef.current);
    if (!sourceToModelLineDataset) {
      // Here can be optimized, we can use the d3.join to update
      // the data and let d3 to recognize which one to update.
      // But right now this route is trouble-prone
      svg.selectAll("*").remove();
      return;
    }

    svg.selectAll("*").remove();
    svg.style("width", sourceToModelLineDataset.line[0].width);
    svg.style("height", sourceToModelLineDataset.line[0].height);
    svg.style("top", sourceToModelLineDataset.line[0].y);
    svg.style("left", sourceToModelLineDataset.line[0].x);

    svg
      .selectAll("line")
      .data(sourceToModelLineDataset.line)
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("x1", (d) => d.width / 2)
            .attr("x2", (d) => d.width / 2)
            .attr("y1", () => lineDotR)
            .attr("y2", (d) => d.height)
            .style("stroke", "#C0C0C0")
            .style("stroke-width", "2px"),
        (update) => update,
        (exit) => exit.remove()
      );

    svg
      .selectAll("circle")
      .data(sourceToModelLineDataset.circle)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("cx", (d) => d.cx)
            .attr("cy", (d) => d.cy)
            .attr("fill", (d) => d.fill)
            .attr("r", (d) => d.r),
        (update) => update,
        (exit) => exit.remove()
      );
  }, [sourceToModelLineDataset, lineDotR]);

  useEffect(() => {
    const svg = d3.select(modelToDestLineSvgRef.current);

    if (!modelToDestLineDataset) {
      svg.selectAll("*").remove();
      return;
    }

    svg.selectAll("*").remove();

    svg.style("width", modelToDestLineDataset.line[0].width);
    svg.style("height", modelToDestLineDataset.line[0].height);
    svg.style("top", modelToDestLineDataset.line[0].y);
    svg.style("left", modelToDestLineDataset.line[0].x);

    svg
      .selectAll("line")
      .data(modelToDestLineDataset.line)
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("x1", (d) => d.width / 2)
            .attr("x2", (d) => d.width / 2)
            .attr("y1", () => lineDotR)
            .attr("y2", (d) => d.height)
            .style("stroke", "#C0C0C0")
            .style("stroke-width", "2px"),
        (update) => update,
        (exit) => exit.remove()
      );

    svg
      .selectAll("circle")
      .data(modelToDestLineDataset.circle)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("cx", (d) => d.cx)
            .attr("cy", (d) => d.cy)
            .attr("fill", (d) => d.fill)
            .attr("r", (d) => d.r),
        (update) => update,
        (exit) => exit.remove()
      );
  }, [modelToDestLineDataset, lineDotR]);

  const source = <ControlPanelItem {...items.source} />;
  const model = <ControlPanelItem {...items.model} />;
  const destination = <ControlPanelItem {...items.destination} />;

  return (
    <>
      <div
        ref={containerRef}
        className="relative hidden w-full flex-col justify-between xl:flex"
      >
        <div ref={sourceRef}>{source}</div>
        <svg className="absolute" ref={sourceToModelLineSvgRef} />
        <div ref={modelRef}>{model}</div>
        <svg className="absolute" ref={modelToDestLineSvgRef} />
        <div ref={destRef}>{destination}</div>
      </div>
    </>
  );
};
