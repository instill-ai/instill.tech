import { OutlineButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type ConsoleCtaButtonProps = {
  position?: string;
};

export const ConsoleCtaButton = ({ position }: ConsoleCtaButtonProps) => {
  const router = useRouter();
  return (
    <OutlineButton
      type="button"
      color="primaryLight"
      hoveredShadow="hover:shadow-instill-solid-5"
      startIcon={
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
        >
          <path
            d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.1564 3.79151 10.2313 6.07974 10.0194C6.54781 7.17213 9.02024 5 12 5C14.9798 5 17.4522 7.17213 17.9203 10.0194C20.2085 10.2313 22 12.1564 22 14.5C22 16.9853 19.9853 19 17.5 19C13.1102 19 10.3433 19 6.5 19Z"
            stroke="#23C4E7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      itemGapX="gap-x-2.5"
      padding="pl-[15px] pr-[56px] py-[7px]"
      position={position}
      onClickHandler={() => router.push("https://console.instill.tech")}
    >
      <div className="flex flex-col">
        <div className="mr-auto text-left uppercase">
          Try Instill Cloud free
        </div>
        <div className="mr-auto text-left text-xs font-normal">Get started</div>
      </div>
    </OutlineButton>
  );
};
