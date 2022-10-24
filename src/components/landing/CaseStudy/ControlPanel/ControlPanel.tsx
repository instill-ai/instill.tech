import { Nullable } from "@/types/instill";
import { ElementPosition, getElementPosition } from "@instill-ai/design-system";
import { ReactElement, useRef, useState, useEffect } from "react";
import * as d3 from "d3";

export type ControlPanelProps = {
  source: ReactElement;
  model: ReactElement;
  destination: ReactElement;
};

type ConnectionLineDataset = {
  line: { x: number; y: number; width: number; height: number }[];
  circle: { cx: number; cy: number; fill: string; r: number }[];
};

// Because we use useEffect to update DOM in BasicSingleSelect, this component
// won't get notified. We need to use useMutationObservable to be reactive
// about this changes.

const ControlPanel = ({ source, model, destination }: ControlPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);

  const [sourceToModelLineDataset, setSourceToModelLineDataset] =
    useState<Nullable<ConnectionLineDataset>>(null);
  const [modelToDestLineDataset, setModelToDestLineDataset] =
    useState<Nullable<ConnectionLineDataset>>(null);

  const lineDotR = 8;

  const sourceToModelLineSvgRef = useRef<Nullable<SVGSVGElement>>(null);
  const modelToDestLineSvgRef = useRef<Nullable<SVGSVGElement>>(null);

  // Be caution, we deliberately calculate our line dataset on every render
  // because within the child, there are multiple SingleSelect component that
  // will reset the dimension of itself after the render of this ControlPanel.

  useEffect(() => {
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

    const setLineDataset = () => {
      const containerPosition = getElementPosition(containerRef.current);
      const sourcePosition = getElementPosition(sourceRef.current);
      const modelPosition = getElementPosition(modelRef.current);
      const destPosition = getElementPosition(destRef.current);
      setSourceToModelLineDataset(
        getLineStat(containerPosition, sourcePosition, modelPosition)
      );
      setModelToDestLineDataset(
        getLineStat(containerPosition, modelPosition, destPosition)
      );
    };

    setLineDataset();

    window.addEventListener("resize", setLineDataset);

    return () => {
      window.removeEventListener("resize", setLineDataset);
    };
  });

  useEffect(() => {
    if (!sourceToModelLineDataset) return;

    const svg = d3.select(sourceToModelLineSvgRef.current);

    console.log(sourceToModelLineDataset);

    svg.selectAll("*").remove();

    svg
      .selectAll("line")
      .data(sourceToModelLineDataset.line)
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("x1", (d) => d.width / 2)
            .attr("x2", (d) => d.width / 2)
            .attr("y1", (d) => lineDotR)
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
    if (!modelToDestLineDataset) return;

    const svg = d3.select(modelToDestLineSvgRef.current);

    svg.selectAll("*").remove();

    svg
      .selectAll("line")
      .data(modelToDestLineDataset.line)
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("x1", (d) => d.width / 2)
            .attr("x2", (d) => d.width / 2)
            .attr("y1", (d) => lineDotR)
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

  // const getSvgLine = useCallback(
  //   (stat: LineStat) => {
  //     return (
  //       <svg
  //         viewBox={`0 0 ${stat.width} ${stat.height}`}
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="absolute"
  //         style={{ top: stat.y, left: stat.x }}
  //       >
  //         <line
  //           x1={stat.x + stat.width / 2}
  //           y1={lineDotR}
  //           x2={stat.x + stat.width / 2}
  //           y2={stat.height}
  //           stroke="#C0C0C0"
  //           strokeWidth="3"
  //         />
  //         <circle
  //           cx={stat.x + stat.width / 2}
  //           cy={lineDotR}
  //           fill="#A5A5A5"
  //           r={lineDotR}
  //         />
  //         <circle
  //           cx={stat.x + stat.width / 2}
  //           cy={lineDotR}
  //           r={lineDotR / 2}
  //           fill="white"
  //         />
  //         <circle
  //           cx={stat.x + stat.width / 2}
  //           cy={stat.height - lineDotR}
  //           fill="#A5A5A5"
  //           r={lineDotR}
  //         />
  //         <circle
  //           cx={stat.x + stat.width / 2}
  //           cy={stat.height - lineDotR}
  //           r={lineDotR / 2}
  //           fill="white"
  //         />
  //       </svg>
  //     );
  //   },
  //   [lineDotR]
  // );

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
      <svg
        className="absolute"
        style={{
          top: sourceToModelLineDataset
            ? sourceToModelLineDataset.line[0].y
            : 0,
          left: sourceToModelLineDataset
            ? sourceToModelLineDataset.line[0].x
            : 0,
          width: sourceToModelLineDataset
            ? sourceToModelLineDataset.line[0].width
            : 0,
          height: sourceToModelLineDataset
            ? sourceToModelLineDataset.line[0].height
            : 0,
        }}
        ref={sourceToModelLineSvgRef}
      />
      {/* {sourceToModelLineStat ? getSvgLine(sourceToModelLineStat) : null} */}
      <div ref={modelRef}>{model}</div>
      {/* {modelToDestLineStat ? getSvgLine(modelToDestLineStat) : null} */}
      <svg
        className="absolute"
        style={{
          top: modelToDestLineDataset ? modelToDestLineDataset.line[0].y : 0,
          left: modelToDestLineDataset ? modelToDestLineDataset.line[0].x : 0,
          width: modelToDestLineDataset
            ? modelToDestLineDataset.line[0].width
            : 0,
          height: modelToDestLineDataset
            ? modelToDestLineDataset.line[0].height
            : 0,
        }}
        ref={modelToDestLineSvgRef}
      />
      <div ref={destRef}>{destination}</div>
    </div>
  );
};

export default ControlPanel;
