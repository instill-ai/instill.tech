import cn from "clsx";
import { SubscribeNewsletterForm } from "@/components/ui";
import { Icons } from "@instill-ai/design-system";

export type StayInTheLoopProps = {
  marginBottom?: string;
  isDark?: boolean;
};

export const StayInTheLoop = ({ marginBottom, isDark }: StayInTheLoopProps) => {
  return (
    <div
      className={cn(
        "my-10 grid w-full grid-cols-1 gap-y-[30px]  p-5 xl:grid-cols-2",
        isDark ? "bg-[#333333]" : "bg-[#F6F6F6]",
        marginBottom
      )}
    >
      <div className="mr-auto flex flex-col">
        <div className="flex flex-row gap-x-2">
          <Icons.Mail01
            className={cn(
              "h-7 w-7",
              isDark ? "stroke-white" : "stroke-semantic-fg-secondary"
            )}
          />
          <p
            className={cn(
              "text-center font-sans text-base font-normal uppercase leading-7",
              isDark ? "text-white" : "text-semantic-fg-secondary"
            )}
          >
            Newsletter
          </p>
        </div>
        <h3
          className={cn(
            "font-sans text-[24px] font-medium",
            isDark ? "text-white" : "text-semantic-fg-secondary"
          )}
        >
          Stay in the Loop
        </h3>
        <p
          className={cn(
            "font-sans text-base font-normal leading-7",
            isDark ? "text-white" : "text-semantic-fg-secondary"
          )}
        >
          Subcribe for the latest updates
        </p>
      </div>
      <SubscribeNewsletterForm position="my-auto" />
    </div>
  );
};
