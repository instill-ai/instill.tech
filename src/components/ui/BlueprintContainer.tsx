import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as d3 from "d3";
import cn from "clsx";
import { ElementPosition } from "@instill-ai/design-system";
import { useRefPosition } from "@/hooks/useRefPosition";
import { Nullable } from "@/types/instill";

export type BlueprintContainerProps = {
  unitHeight: number;
  unitWidth: number;
  children: ReactNode;
  padding?: string;
  bgColor: string;
};

// This container will fill in the given space of its parent and draw a
// blueprint like SVG as its background. The child element will be put
// on top of the svg.

type LineData = { x1: number; x2: number; y1: number; y2: number };

const BlueprintContainer = ({
  unitHeight,
  unitWidth,
  children,
  padding,
  bgColor,
}: BlueprintContainerProps) => {
  const svgRef = useRef<Nullable<SVGSVGElement>>(null);
  const parentRef = useRef<Nullable<HTMLDivElement>>(null);
  const parentPosition = useRefPosition(parentRef);
  const childrenRef = useRef<Nullable<HTMLDivElement>>(null);
  const childrenPosition = useRefPosition(childrenRef);

  const [lineDataset, setLineDataset] = useState<Nullable<LineData[]>>(null);

  useEffect(() => {
    // The coordinate system will count parent's top left cornet as origin
    // point, we call it parent's X1, Y1. The system will extend to the
    // parent's bottom right corner, we call it X2, Y2.

    // We first draw the vertical line from children X1 to parent X2.

    if (!parentPosition || !childrenPosition) return;

    const generateLineDataset = (
      parentPosition: ElementPosition,
      childrenPosition: ElementPosition
    ) => {
      const parentX1 = 0;
      const parentX2 = parentPosition.width;
      const parentY1 = 0;
      const parentY2 = parentPosition.height;
      const childrenX1 = childrenPosition.x - parentPosition.x;
      const childrenY1 = childrenPosition.y - parentPosition.y;

      let lineDataset: LineData[] = [];

      // Generate the vertical line data from children X1 to parent X2.

      let rightVerticalLines = 0;

      while (childrenX1 + rightVerticalLines * unitWidth < parentX2) {
        lineDataset.push({
          x1: childrenX1 + rightVerticalLines * unitWidth,
          x2: childrenX1 + rightVerticalLines * unitWidth,
          y1: parentY1,
          y2: parentY2,
        });
        rightVerticalLines += 1;
      }

      // Generate the vertical line data from children X1 to parent X1

      let leftVerticalLines = 0;

      while (childrenX1 - leftVerticalLines * unitHeight > parentX1) {
        lineDataset.push({
          x1: childrenX1 - leftVerticalLines * unitWidth,
          x2: childrenX1 - leftVerticalLines * unitWidth,
          y1: parentY1,
          y2: parentY2,
        });
        leftVerticalLines += 1;
      }

      // Generate the horizontal line data from childrenY1 to parentY2

      let downHorizontalLines = 0;

      while (childrenY1 + downHorizontalLines * unitHeight < parentY2) {
        lineDataset.push({
          x1: parentX1,
          x2: parentX2,
          y1: childrenY1 + downHorizontalLines * unitHeight,
          y2: childrenY1 + downHorizontalLines * unitHeight,
        });
        downHorizontalLines += 1;
      }

      // Generate the horizontal line data from childrenY1 to parentY1

      let upHorizontalLines = 0;

      while (childrenY1 - upHorizontalLines * unitHeight > parentY1) {
        lineDataset.push({
          x1: parentX1,
          x2: parentX2,
          y1: childrenY1 - upHorizontalLines * unitHeight,
          y2: childrenY1 - upHorizontalLines * unitHeight,
        });
        upHorizontalLines += 1;
      }

      return lineDataset;
    };

    setLineDataset(generateLineDataset(parentPosition, childrenPosition));
  }, [parentPosition, childrenPosition, unitHeight, unitWidth]);

  useEffect(() => {
    if (!lineDataset) return;

    const svg = d3.select(svgRef.current);

    svg.selectAll("line").remove();

    svg
      .selectAll("line")
      .data(lineDataset)
      .join(
        (enter) =>
          enter
            .append("line")
            .attr("x1", (d) => d.x1)
            .attr("x2", (d) => d.x2)
            .attr("y1", (d) => d.y1)
            .attr("y2", (d) => d.y2)
            .style("stroke", "#C0C0C0")
            .style("stroke-width", "1px")
            .style("stroke-dasharray", "5,3"),
        (update) => update,
        (exit) => exit.remove()
      );
  }, [lineDataset]);

  return (
    <div
      ref={parentRef}
      className={cn("relative flex h-full w-full", padding, bgColor)}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 z-0">
        <svg
          ref={svgRef}
          width={parentPosition ? parentPosition.width : 0}
          height={parentPosition ? parentPosition.height : 0}
        />
      </div>
      <div ref={childrenRef} className="relative z-10 mx-auto flex h-full">
        {children}
      </div>
    </div>
  );
};

export default BlueprintContainer;
