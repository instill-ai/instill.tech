import { FC } from "react";
import { SubscribeNewsletterForm } from "@/components/ui";
import cn from "clsx";

export type StayInTheLoopSectionProps = {
  marginBottom?: string;
};

const StayInTheLoopSection: FC<StayInTheLoopSectionProps> = ({
  marginBottom,
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-y-[30px] py-6 px-10 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-8 sm:py-[60px] md:gap-x-16 lg:gap-x-28",
        marginBottom
      )}
    >
      <div className="flex flex-col sm:mr-auto">
        <h3 className="instill-text-h3 text-instillGrey05">Stay in the Loop</h3>
        <p className="instill-text-body text-instillGrey05">
          Join our mailing list for the latest news and updates.
        </p>
      </div>
      <SubscribeNewsletterForm />
    </div>
  );
};

export default StayInTheLoopSection;
