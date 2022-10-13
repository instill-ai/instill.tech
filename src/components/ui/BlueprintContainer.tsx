import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import * as d3 from "d3";
import { getElementPosition } from "@instill-ai/design-system";

export type BlueprintContainerProps = {
  parentRef: MutableRefObject<HTMLDivElement>;
  childrenRef: MutableRefObject<HTMLDivElement>;
  unitHeight: number;
  unitWidth: number;
  children: ReactNode;
};

// This container will fill in the given space of its parent and draw a
// blueprint like SVG as its background. The child element will be put
// on top of the svg.

const BlueprintContainer = ({
  parentRef,
  childrenRef,
  unitHeight,
  unitWidth,
  children,
}: BlueprintContainerProps) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = d3
      .select(svgContainerRef.current)
      .append("svg")
      .attr("width", svgContainerRef.current.clientWidth)
      .attr("height", svgContainerRef.current.clientHeight);

    const parentPosition = getElementPosition(parentRef.current);
    const childrenPosition = getElementPosition(childrenRef.current);

    // The coordinate system will count parent's top left cornet as origin
    // point, we call it parent's X1, Y1. The system will extend to the
    // parent's bottom right corner, we call it X2, Y2.

    // We first draw the vertical line from children X1 to parent X2.

    const parentX1 = 0;
    const parentX2 = parentPosition.width;
    const parentY1 = 0;
    const parentY2 = parentPosition.height;
    const childrenX1 = childrenPosition.x - parentPosition.x;
    const childrenX2 = childrenX1 + childrenPosition.width;
    const childrenY1 = childrenPosition.y - parentPosition.y;
    const childrenY2 = childrenY1 + childrenPosition.height;

    let rightVerticalLines = 0;

    while (childrenX1 + rightVerticalLines * unitWidth < parentX2) {
      svg
        .append("line")
        .attr("x1", childrenX1 + rightVerticalLines * unitWidth)
        .attr("x2", childrenX1 + rightVerticalLines * unitWidth)
        .attr("y1", parentY1)
        .attr("y2", parentY2)
        .style("stroke", "#C0C0C0")
        .style("stroke-width", "1px")
        .style("stroke-dasharray", "5,3");
      rightVerticalLines += 1;
    }

    // Then we draw the vertical line from children X1 to parent X1

    let leftVerticalLines = 0;
    while (childrenX1 - leftVerticalLines * unitHeight > parentX1) {
      svg
        .append("line")
        .attr("x1", childrenX1 - leftVerticalLines * unitHeight)
        .attr("x2", childrenX1 - leftVerticalLines * unitHeight)
        .attr("y1", parentY1)
        .attr("y2", parentY2)
        .style("stroke", "#C0C0C0")
        .style("stroke-width", "1px")
        .style("stroke-dasharray", "5,3");
      leftVerticalLines += 1;
    }

    // We draw the horizontal line from childrenY1 to parentY2

    let downHorizontalLines = 0;
    while (childrenY1 + downHorizontalLines * unitHeight < parentY2) {
      svg
        .append("line")
        .attr("x1", parentX1)
        .attr("x2", parentX2)
        .attr("y1", childrenY1 + downHorizontalLines * unitHeight)
        .attr("y2", childrenY1 + downHorizontalLines * unitHeight)
        .style("stroke", "#C0C0C0")
        .style("stroke-width", "1px")
        .style("stroke-dasharray", "5,3");
      downHorizontalLines += 1;
    }

    // Then we draw the horizontal line from childrenY1 to parentY1
    let upHorizontalLines = 0;
    while (childrenY1 - upHorizontalLines * unitHeight > parentY1) {
      svg
        .append("line")
        .attr("x1", parentX1)
        .attr("x2", parentX2)
        .attr("y1", childrenY1 - upHorizontalLines * unitHeight)
        .attr("y2", childrenY1 - upHorizontalLines * unitHeight)
        .style("stroke", "#C0C0C0")
        .style("stroke-width", "1px")
        .style("stroke-dasharray", "5,3");
      upHorizontalLines += 1;
    }

    const childY =
      childrenRef.current.clientTop - svgContainerRef.current.clientTop;
  }, []);

  return (
    <div className="relative h-full w-full">
      <div
        ref={svgContainerRef}
        className="absolute top-0 bottom-0 right-0 left-0"
      />
      <div className="flex h-full w-full">{children}</div>
    </div>
  );
};

export default BlueprintContainer;
