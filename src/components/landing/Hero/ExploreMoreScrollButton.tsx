import { ArrowDownIcon } from "@instill-ai/design-system";

export type ExploreMoreScrollButtonProps = {
  /** You can use scrollIntoView.
   *  ```
   *  const handleScroll = useCallback(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, []);
      ```

      But if you have the sticky navbar, you may need to get the target 
      position and use window,scrollTo

      ```
        window.scrollTo({
          top: <calculated_top>,
          behavior: "smooth",
        });
      ```
   * 
  */
  scrollHandler: () => void;
};

export const ExploreMoreScrollButton = ({
  scrollHandler,
}: ExploreMoreScrollButtonProps) => {
  return (
    <button
      onClick={scrollHandler}
      className="group mx-auto flex flex-col gap-y-5"
    >
      <p className="mx-auto text-instillBlue50 group-hover:text-[#236698]">
        Explore
      </p>
      <ArrowDownIcon
        width="w-8"
        height="h-8"
        color="fill-instillBlue50 group-hover:fill-[#236698]"
        position="mx-auto"
      />
    </button>
  );
};
