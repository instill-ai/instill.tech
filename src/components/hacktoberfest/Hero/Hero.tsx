import Image from "next/image";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { Button, Icons } from "@instill-ai/design-system";

export const Hero = () => {
  return (
    <div className="mt-32 flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-row">
        <div className="flex flex-col xl:my-auto">
          <div className="flex justify-center">
            <div className="w-3/5">
              <Headline marginBottom="mb-5" />
              <Image
                src="/hacktoberfest/curved-line.svg"
                width={1128}
                height={612}
                alt="Console Cloud Dashboard"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubHeadline marginBottom="mb-5" />
      </div>
      <div className="my-10 flex justify-center">
        <div className="flex flex-row gap-x-5">
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

      <div className="my-20 flex rounded-sm bg-instillGrey80 p-3">
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
