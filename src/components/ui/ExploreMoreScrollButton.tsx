import { ArrowDownIcon } from "@instill-ai/design-system";

export type ExploreMoreScrollButtonProps = {
  /** This function will scroll pageView to targetRef 
   * 
   *  @Example
   * 
   *  ```
   *  const handleScroll = useCallback(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, []);
      ```
   * 
  */
  scrollHandler: () => void;
};

const ExploreMoreScrollButton = ({
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

export default ExploreMoreScrollButton;
