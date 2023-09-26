import Image from "next/image";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { Button, Icons } from "@instill-ai/design-system";

export const Hero = () => {
  return (
    <div className="mt-32 flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-row">
        <div className="flex flex-col xl:my-auto">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-5" />
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <div className="flex flex-col gap-y-5">
          <Button variant="primary" size="lg">
            Try Instill Cloud Free
          </Button>

          <Button
            variant="white"
            size="lg"
            className="flex items-center gap-x-2 border-semantic-bg-primary"
          >
            Self-hosted
            <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
          </Button>
        </div>
      </div>

      <div className="my-20 flex">
        <Image
          src="/hacktoberfest/demo.gif"
          width={1128}
          height={612}
          alt="Console Cloud Dashboard"
          className="w-full"
        />
      </div>
    </div>
  );
};
