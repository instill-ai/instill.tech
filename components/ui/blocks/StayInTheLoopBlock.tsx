import { FC } from "react";
import * as classNames from "classnames";
import { SubscribeNewsletterForm } from "../../forms/SubscribeNewsletterForm";

interface Props {
  styleName?: string;
}

export const StayInTheLoopBlock: FC<Props> = ({ styleName }) => {
  return (
    <div
      className={classNames.default(
        "grid grid-cols-1 gap-y-[30px] py-6 sm:py-[60px] sm:grid-cols-2 sm:gap-y-0 sm:gap-x-8 md:gap-x-16 lg:gap-x-28",
        styleName
      )}
    >
      <div className="flex flex-col sm:mr-auto">
        <h3 className="instill-text-h3 text-instillGray05">Stay in the Loop</h3>
        <p className="instill-text-body text-instillGray05">
          Join our mailing list for the latest news and updates.
        </p>
      </div>
      <SubscribeNewsletterForm />
    </div>
  );
};
