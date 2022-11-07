import cn from "clsx";
import { SubscribeNewsletterForm } from "@/components/ui";

export type StayInTheLoopProps = {
  marginBottom?: string;
};

export const StayInTheLoop = ({ marginBottom }: StayInTheLoopProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-y-[30px] py-6 xl:grid-cols-2 xl:gap-y-0 xl:gap-x-28 xl:py-[60px]",
        marginBottom
      )}
    >
      <div className="mr-auto flex flex-col">
        <h3 className="instill-text-h3 text-instillGrey90">Stay in the Loop</h3>
        <p className="instill-text-body text-instillGrey70">
          Join our mailing list for the latest news and updates.
        </p>
      </div>
      <SubscribeNewsletterForm position="my-auto" />
    </div>
  );
};
