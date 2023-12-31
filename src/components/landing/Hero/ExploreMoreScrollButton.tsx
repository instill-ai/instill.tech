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
      <p className="mx-auto uppercase text-instillGrey70 group-hover:text-instillGrey80">
        Explore
      </p>
      <ArrowDownIcon
        width="w-15"
        height="h-15"
        color="fill-instillGrey70 group-hover:fill-instillGrey80"
        position="mx-auto"
      />
    </button>
  );
};
