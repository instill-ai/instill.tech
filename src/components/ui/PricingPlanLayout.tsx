export type PricingPlanLayoutProps = {
  plan: PricingPlan;
};

export type PricingPlan = {
  name: string;
  price: number | string;
  popular: boolean;
  description: string;
  features: string[];
  featureDescription: string;
  ctaLink: string;
  ctaText: string;
};

export const PricingPlanLayout = (props: PricingPlanLayoutProps) => {
  const { plan } = props;
  return (
    <div
      style={{ boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.16)" }}
      className="flex flex-col rounded-2xl border border-[#EAECF0]"
    >
      <div className="flex flex-col p-8">
        <div className="mb-4 flex flex-row">
          <p className="mr-auto font-sans text-lg font-semibold leading-7 text-[#475467]">
            {plan.name}
          </p>
          {plan.popular ? (
            <span className="rounded-full bg-[#F0F5FF] py-1 px-3 text-[#1D5BD7]">
              Popular
            </span>
          ) : null}
        </div>
        <div className="mb-4 flex flex-row">
          <span className=" my-auto text-[42px] font-semibold leading-[45px] -tracking-[1.75%] text-[#101828]">
            $
          </span>
          <span className="my-auto text-[56px] font-semibold leading-[60px] -tracking-[2%] text-[#101828]">
            {plan.price}
          </span>
          {typeof plan.price === "number" ? (
            <span className="mt-auto pb-1 text-base font-semibold leading-6 text-[#475467]">
              per month
            </span>
          ) : null}
        </div>
        <p className="mb-8 font-sans text-base font-normal leading-6 text-[#1D2433] text-opacity-80">
          {plan.description}
        </p>
        <a
          href={plan.ctaLink}
          className="hover:bg-[#1D5BD] flex  h-12 w-full justify-center rounded bg-[#316FED] align-middle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="m-auto font-sans text-base font-semibold leading-4 tracking-[2%] text-white">
            {plan.ctaText}
          </span>
        </a>
      </div>
      <div className="flex flex-col p-8"></div>
    </div>
  );
};
