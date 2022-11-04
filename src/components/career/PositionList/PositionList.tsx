import { forwardRef } from "react";
import cn from "clsx";
import { CareerPositionListItem } from "./CareerPositionListItem";
import { PositionInfo } from "@/types/instill";

export type PositionListProps = {
  positions: PositionInfo[];
  marginBottom?: string;
};

export const PositionList = forwardRef<HTMLDivElement, PositionListProps>(
  ({ positions, marginBottom }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full flex-col bg-instillGrey05 p-5 md:p-10",
          marginBottom
        )}
        ref={ref}
      >
        <div className="mr-auto mb-2.5 bg-instillNatureGreen px-2.5 py-[5px] font-sans text-base font-normal uppercase text-instillGrey90">
          Job listing
        </div>
        <div className="mb-10 flex flex-col gap-y-5">
          <h2 className="text text-left text-instillGrey95 text-instill-h2">
            Open Roles
          </h2>
          <p className="text-left text-instillGrey95 text-instill-body-normal">
            We&#39;re on a mission to make Vision Al highly accessbile to
            everyone. Join us and make a dent in the universe!
          </p>
        </div>
        <div className="flex flex-col gap-y-5">
          {positions.map((position) => {
            return (
              <CareerPositionListItem
                link={`/career/${position.id}-${position.slug}`}
                unitIsPlaceholder={false}
                name={position.name}
                location={position.location}
                workType={position.workType}
                postDate={position.postDate}
                key={position.id}
              />
            );
          })}
          <CareerPositionListItem
            link="https://forms.clickup.com/f/2e88k-1856/90J2JKV7NTVLYD6M1J"
            unitIsPlaceholder={true}
            name="Open Position"
            location="Remote"
            workType="Full time"
            postDate=""
          />
        </div>
      </div>
    );
  }
);

PositionList.displayName = "CareerPositionList";
