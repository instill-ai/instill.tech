import { FC, ReactElement, useEffect } from "react";
import { PageHead } from "../../components/layouts/PageHead";
import { PageBase } from "../../components/layouts/PageBase";
import { MailchimpSignupForm } from "../../components/forms/MailchimpSignupForm";
import { AlphaBadgeSvg } from "../../components/ui/svgs/AlphaBadgeSvg";
import { useRouter } from "next/router";
import { sendAmplitudeData } from "../../lib/amplitude";
import { useAmplitudeCtx } from "../../context/AmplitudeContext";

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
        <div className="grid w-full max-w-[1440px] grid-cols-1 py-[60px] px-4 md:mx-auto md:w-10/12 md:px-0 lg:grid-cols-2 lg:pt-[244px] lg:pb-[60px]">
          <div className="mx-auto mb-20 flex max-w-[450px]  flex-col md:mx-0 lg:mb-0">
            <div className="mb-[60px] flex flex-col gap-y-5">
              <h2 className="instill-text-h2 mx-auto text-instillGray05 md:mx-0">
                Get Early Access
              </h2>
              <p className="instill-text-body mx-auto text-instillGray05 md:mx-0">
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
  return <PageBase>{page}</PageBase>;
};

export default GetEarlyAccessPage;
