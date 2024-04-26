import cn from "clsx";
import * as React from "react";
import { Nullable } from "@instill-ai/toolkit";
import { Button, Icons } from "@instill-ai/design-system";

export type InstillPricingTier = "free" | "starter" | "team" | "team pro";
export type InstillBillingPeriod = "monthly" | "yearly";

export const PricingInfoCard = ({
  tier,
  features,
  featureDescription,
  headLable,
  cta,
  className,
  highlighted,
  disabled,
  price,
}: {
  tier: InstillPricingTier;
  features: string[];
  featureDescription: Nullable<React.ReactElement>;
  headLable?: React.ReactElement;
  cta: {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
  };
  className?: string;
  highlighted?: boolean;
  disabled?: boolean;
  price: string;
}) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .highlighted {
            box-shadow: 0px 4px 12px 0px rgba(190, 211, 254, 1);
          }
        `}
      </style>
      <div
        className={cn(
          "flex flex-col rounded-md shadow-md",
          highlighted
            ? "highlighted border-semantic-accent-default"
            : "border-semantic-bg-line shadow",
          className,
          disabled ? "opacity-50" : ""
        )}
      >
        <div className="mt-2.5 flex flex-col border-b border-semantic-bg-line p-5">
          {/* Pricing Head */}

          <div className="flex flex-row justify-center">
            <p className="font-sans text-[14px] font-normal !capitalize leading-5 text-semantic-fg-secondary">
              {tier}
            </p>
            {headLable}
          </div>

          {/* Pricing Body */}

          <div className="mb-0 flex flex-col gap-y-4">
            <div className="flex flex-row justify-center gap-x-1">
              <h2 className="flex flex-row text-[60px] font-semibold text-semantic-fg-primary">
                {tier !== "free" ? (
                  <p className="my-auto text-[30px] text-[#000000B2]">$</p>
                ) : (
                  ""
                )}
                {price}
              </h2>

              {tier === "starter" ? (
                <p className="mb-auto text-semantic-fg-secondary product-body-text-2-medium">
                  monthty
                </p>
              ) : null}
              {tier === "team" ? (
                <p className="mb-auto text-semantic-fg-secondary product-body-text-2-medium">
                  monthty
                </p>
              ) : null}
              {tier === "team pro" ? (
                <p className="mb-auto text-semantic-fg-secondary product-body-text-2-medium">
                  monthty
                </p>
              ) : null}
            </div>
          </div>

          {/* CTA */}
        </div>

        <div className="flex flex-col border-b p-5">
          {/* Feature Body */}

          <div className="flex flex-col gap-y-5">
            {features.map((feature) => (
              <div key={feature} className="flex flex-row gap-x-2">
                <div className="my-auto flex-shrink-0">
                  <Icons.Check className="h-4 w-4 stroke-[#000000]" />
                </div>
                <p className="font-sans text-[13px] font-normal leading-5 text-semantic-fg-secondary">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-5">
          {tier === "free" || tier === "team pro" ? (
            <Button
              type="button"
              className="mx-auto"
              variant="secondaryColour"
              size="md"
              onClick={async () => {
                if (cta.onClick) {
                  cta.onClick();
                }
              }}
              disabled={disabled || cta.disabled}
            >
              {cta.title}
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              className="mx-auto"
              size="md"
              onClick={async () => {
                if (cta.onClick) {
                  cta.onClick();
                }
              }}
              disabled={disabled || cta.disabled}
            >
              {cta.title}
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
