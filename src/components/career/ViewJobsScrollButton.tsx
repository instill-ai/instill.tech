import {
  ArrowRightIcon,
  SolidButton,
  SolidButtonProps,
} from "@instill-ai/design-system";

export type ViewJobsScrollButtonProps = {
  /** This function will scroll pageView to targetRef
   *
   *  @Example
   *
   *  ```
   *  const handleScroll = useCallback(() => {
   *    ref.current.scrollIntoView({ behavior: "smooth" });
   *  }, []);
   *  ```
   *
   */
  scrollHandler: () => void;
  position?: SolidButtonProps["position"];
};

export const ViewJobsScrollButton = ({
  scrollHandler,
  position,
}: ViewJobsScrollButtonProps) => {
  return (
    <SolidButton
      position={position}
      onClickHandler={scrollHandler}
      color="primaryLight"
      type="button"
      itemGapX="gap-x-5"
      endIcon={
        <ArrowRightIcon
          width="w-[28px]"
          height="h-[28px]"
          color="fill-instillSkyBlue"
          position="my-auto"
        />
      }
    >
      <p className="my-auto text-2xl">View Jobs</p>
    </SolidButton>
  );
};
