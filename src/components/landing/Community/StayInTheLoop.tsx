import cn from "clsx";
import { SubscribeNewsletterForm } from "@/components/ui";
import { Icons } from "@instill-ai/design-system";

export type StayInTheLoopProps = {
  marginBottom?: string;
};

export const StayInTheLoop = ({ marginBottom }: StayInTheLoopProps) => {
  return (
    <div
      className={cn(
        "my-10 grid w-full grid-cols-1 gap-y-[30px] bg-[#333333] p-5 xl:grid-cols-2",
        marginBottom
      )}
    >
      <div className="mr-auto flex flex-col">
        <div className="flex flex-row gap-x-2">
          <Icons.Mail01 className="h-7 w-7 stroke-white" />
          <p className="text-center font-sans text-base font-normal uppercase leading-7 text-white">
            Newsletter
          </p>
        </div>
        <h3 className="font-sans text-[24px] font-medium text-white">
          Stay in the Loop
        </h3>
        <p className="font-sans text-base font-normal leading-7 text-white">
          Subcribe for the latest updates
        </p>
      </div>
      <SubscribeNewsletterForm position="my-auto" />
    </div>
  );
};
