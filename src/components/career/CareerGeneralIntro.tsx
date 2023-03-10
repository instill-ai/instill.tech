import cn from "clsx";

import Image from "next/image";

export type CareerGeneralIntroProps = {
  marginBottom?: string;
};

export const CareerGeneralIntro = ({
  marginBottom,
}: CareerGeneralIntroProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-y-20 gap-x-20 xl:flex-row xl:gap-y-0",
        marginBottom
      )}
    >
      <div className="m-auto flex w-full flex-shrink-0 xl:w-[33%]">
        <Image
          src="/images/instill-ai-badge.svg"
          alt="The badge of instill ai"
          width={402}
          height={177}
          sizes="402px"
          style={{
            margin: "auto",
          }}
        />
      </div>
      <div className="my-auto flex flex-col gap-y-5">
        <p className="text-instillGrey90 text-instill-body-normal">
          We&#39;re looking for passionate and dedicated early members to build
          open-source and highest-quality products for solving a challenging
          issue in the modern data stack. You&#39;ll be joining the founding
          team to establish its strong foundation from the very beginning.
        </p>
        <p className="text-instillGrey90 text-instill-body-normal">
          This is a great opportunity for those who want to build their career
          with a fast-growing startup at zero to one stage. It is also a
          position for those who value learning for the long term above earning
          in the short term. Your colleagues are a bunch of super self-motivated
          AI missionaries and data tooling practitioners. You will impact the
          company direction and help Instill AI build its strong foundation and
          shape its open-source community.
        </p>
      </div>
    </div>
  );
};
