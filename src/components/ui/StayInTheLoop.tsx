import cn from "clsx";
import { SubscribeNewsletterForm } from "@/components/ui";

export type StayInTheLoopProps = {
  marginBottom?: string;
};

const StayInTheLoop = ({ marginBottom }: StayInTheLoopProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-y-[30px] py-6 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-8 sm:py-[60px] md:gap-x-16 lg:gap-x-28",
        marginBottom
      )}
    >
      <div className="flex flex-col sm:mr-auto">
        <h3 className="instill-text-h3 text-instillGrey90">Stay in the Loop</h3>
        <p className="instill-text-body text-instillGrey70">
          Join our mailing list for the latest news and updates.
        </p>
      </div>
      <SubscribeNewsletterForm position="my-auto" />
    </div>
  );
};

export default StayInTheLoop;
