import { useRouter } from "next/router";
import cn from "clsx";
import { ArrowRightIcon, SolidButton } from "@instill-ai/design-system";

export type AccordionContentProps = {
  bgColor: string;
  description: string;
  link: string;
};

export const AccordionContent = ({
  bgColor,
  description,
  link,
}: AccordionContentProps) => {
  const router = useRouter();
  return (
    <div className={cn("min-h-[180px] w-full xl:min-h-[300px]", bgColor)}>
      <div className="flex h-full flex-col p-5 xl:w-7/12">
        <div className="mb-5 flex text-white text-instill-body-normal xl:mb-auto">
          {description}
        </div>
        <SolidButton
          type="button"
          color="white"
          endIcon={
            <ArrowRightIcon
              width="w-[28px]"
              height="h-[28px]"
              color="fill-instillGrey90"
              position="my-auto"
            />
          }
          padding="px-2.5 py-[5px]"
          itemGapX="gap-x-5"
          position="mr-auto mt-auto"
          onClickHandler={() => router.push(link)}
        >
          <p className="my-auto text-instillGrey90 text-instill-body-normal">
            Learn more
          </p>
        </SolidButton>
      </div>
    </div>
  );
};
