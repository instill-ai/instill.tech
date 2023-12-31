import cn from "clsx";
import * as React from "react";
import { Nullable } from "@instill-ai/toolkit";
import { Button, Icons } from "@instill-ai/design-system";

export type InstillPricingTier = "free" | "pro" | "team" | "enterprise";
export type InstillBillingPeriod = "monthly" | "yearly";

export const PricingInfoCard = ({
  tier,
  planDescription,
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
  planDescription: Nullable<string>;
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
          "flex flex-col rounded-md border bg-semantic-bg-primary",
          highlighted
            ? "highlighted border-semantic-accent-default"
            : "border-semantic-bg-line shadow",
          className,
          disabled ? "opacity-50" : ""
        )}
      >
        <div className="flex flex-col border-b border-semantic-bg-line p-8">
          {/* Pricing Head */}

          <div className="mb-4 flex flex-row justify-between">
            <p className="!capitalize text-semantic-fg-secondary product-body-text-2-semibold">
              {tier}
            </p>
            {headLable}
          </div>

          {/* Pricing Body */}

          <div className="mb-8 flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-1">
              <h2 className="text-semantic-fg-primary product-headings-heading-1">
                {price}
              </h2>
              {tier === "free" ? (
                <p className="mb-auto text-semantic-fg-secondary product-body-text-2-medium">
                  forever
                </p>
              ) : null}
              {tier === "pro" ? (
                <p className="mb-auto text-semantic-fg-secondary product-body-text-2-medium">
                  per month
                </p>
              ) : null}
              {tier === "team" ? (
                <p className="mb-auto text-semantic-fg-secondary product-body-text-2-medium">
                  per seat/month
                </p>
              ) : null}
            </div>
            {planDescription ? (
              <p className="h-[60px] text-semantic-fg-disabled product-body-text-3-regular">
                {planDescription}
              </p>
            ) : null}
          </div>

          {/* CTA */}

          <div className="flex flex-col gap-y-4">
            {tier === "free" ? (
              <Button
                type="button"
                variant="secondaryGrey"
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

        <div className="flex flex-col p-8">
          {/* Feature Head */}

          <div className="mb-6 flex flex-col">
            <p className="h-10 text-semantic-fg-primary product-body-text-3-semibold">
              FEATURES
            </p>
            {featureDescription}
          </div>

          {/* Feature Body */}

          <div className="flex flex-col gap-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex flex-row gap-x-3">
                <div className="flex-shrink-0">
                  <Icons.CheckCircle className="h-4 w-4 stroke-semantic-success-default" />
                </div>
                <p className="text-semantic-fg-secondary product-body-text-4-regular">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
