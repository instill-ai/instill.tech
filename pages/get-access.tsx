import { FC, ReactElement, useEffect } from "react";
import { PageHead } from "../components/layouts/PageHead";
import { PageBase } from "../components/layouts/PageBase";
import { MailchimpSignupForm } from "../components/forms/MailchimpSignupForm";
import { AlphaBadgeSvg } from "../components/ui/svgs/AlphaBadgeSvg";
import { useRouter } from "next/router";
import { sendAmplitudeData } from "../lib/amplitude";
import { useAmplitudeCtx } from "../context/AmplitudeContext";

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const GetEarlyAccessPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_get_early_access_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

  return (
    <PageHead
      pageTitle="Get early access | Instill AI"
      pageDescription=" We're now in private alpha. Join and see first-hand how
    Instill AI can help adopt Vision AI in your company."
    >
      <div className="flex w-full bg-instillGray95">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-[60px] lg:pt-[244px] lg:pb-[60px] px-4 md:px-0 max-w-[1440px] md:w-10/12 md:mx-auto">
          <div className="flex flex-col mx-auto md:mx-0  max-w-[450px] mb-20 lg:mb-0">
            <div className="flex flex-col gap-y-5 mb-[60px]">
              <h2 className="mx-auto md:mx-0 instill-text-h2 text-instillGray05">
                Get Early Access
              </h2>
              <p className="mx-auto md:mx-0 instill-text-body text-instillGray05">
                We&#39;re now in private alpha. Join and see first-hand how
                Instill AI can help adopt Vision AI in your company.
              </p>
            </div>
            <div className="flex w-full">
              <AlphaBadgeSvg styleName="mx-auto md:mx-0 max-w-[355px] w-full" />
            </div>
          </div>
          <div>
            <MailchimpSignupForm />
          </div>
        </div>
      </div>
    </PageHead>
  );
};

GetEarlyAccessPage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default GetEarlyAccessPage;
