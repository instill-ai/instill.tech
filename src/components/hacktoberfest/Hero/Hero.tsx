import Image from "next/image";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { Button, Icons } from "@instill-ai/design-system";

export const Hero = () => {
  return (
    <div className="mt-12 flex min-h-[90vh] flex-col justify-center px-4 xl:mt-32 xl:px-0">
      <div className="flex flex-row">
        <div className="flex flex-col xl:my-auto">
          <div className="flex justify-center">
            <div className="w-5/6 xl:w-3/5">
              <Headline marginBottom="mb-0" />
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
      <div className="my-8 flex justify-center xl:my-10">
        <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-3">
          <Button variant="primary" size="lg">
            <a
              href="https://console.instill.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Instill Cloud Free
            </a>
          </Button>

          <Button
            variant="white"
            size="lg"
            className="flex items-center gap-x-2 border-semantic-bg-primary"
          >
            <a
              href="https://www.instill.tech/docs/core/welcome/?utm_source=product&utm_medium=button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Self-hosted
            </a>
            <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
          </Button>
        </div>
      </div>

      <div
        className="my-10 flex rounded-sm bg-instillGrey80 p-3 xl:my-20"
        style={{
          boxShadow:
            "0px 16px 32px 0px rgba(49, 111, 237, 0.15), 0px 7px 7px 12px rgba(59, 122, 247, 0.05)",
        }}
      >
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
