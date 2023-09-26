import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { Button, Icons } from "@instill-ai/design-system";

export const Hero = () => {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-col-reverse xl:mb-[120px] xl:flex-row xl:gap-x-12 xl:gap-y-0">
        <div className="flex flex-col xl:my-auto">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-10" />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <Button variant="primary" size="lg">
          Try Instill Cloud Free
        </Button>

        <Button variant="secondaryGrey" size="lg" className="gap-x-2">
          Self-hosted
          <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
        </Button>
      </div>
    </div>
  );
};
