import { FC } from "react";
import cn from "clsx";
import { GetEarlyAccessButton } from "@/components/ui/buttons";
import Image from "next/future/image";

export type SecureYourSpotSectionProps = {
  /** Layout
   *  - main: alpha badge horizontal align with title and description, underneath is get early access button
   *  - compact: title and description stick with get early access button and horizontal align with alpha badge
   */
  layout: "main" | "compact";

  /** Color of component background */
  bgColor: "white" | "black";

  marginBottom?: string;
};

const SecureYourSpotSection: FC<SecureYourSpotSectionProps> = ({
  marginBottom,
  layout,
  bgColor,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[1px] px-10",
        marginBottom,
        layout === "main" ? "py-[100px]" : "py-10",
        bgColor === "black" ? "bg-instillGrey95" : "bg-white"
      )}
    >
      <div
        className={cn("grid grid-cols-1 gap-x-6 md:grid-cols-2", {
          "mb-20": layout === "main",
        })}
      >
        <div className="mx-auto flex md:col-start-2 md:mx-0">
          <Image
            src="/images/alpha-badge.svg"
            alt="instill ai alpha testing badge"
            width={355}
            height={146}
          />
        </div>
        <div
          className={cn(
            "flex flex-col pt-20 md:row-start-1 md:pt-0",
            layout === "compact" ? "mb-auto" : ""
          )}
        >
          <div className="flex flex-col">
            <h3
              className={cn(
                "instill-text-h3 mb-2.5",
                bgColor === "black"
                  ? "text-instillGrey05"
                  : "text-instillGrey95"
              )}
            >
              Secure Your Spot
            </h3>
            <p
              className={cn(
                "instill-text-body",
                bgColor === "black"
                  ? "text-instillGrey05"
                  : "text-instillGrey95"
              )}
            >
              We&#39;re now in private alpha. Join and see first-hand how
              Instill AI can help adopt Vision AI in your company.
            </p>
          </div>
        </div>
        {layout === "compact" && <GetEarlyAccessButton position="mr-auto" />}
      </div>
      {layout === "main" && <GetEarlyAccessButton position="mx-auto" />}
    </div>
  );
};

export default SecureYourSpotSection;
