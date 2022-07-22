import Image from "next/future/image";
import { FC } from "react";
import FeatureItem from "./FeatureItem";
import { GithubCtaButton } from "@/components/ui/buttons";

const FeatureSection: FC = () => {
  return (
    <div id="feature-block-group" className="flex flex-col">
      <FeatureItem
        label="VISUAL DATA PREPARATION"
        title="Integrate Vision AI into existing data stack in minutes"
        description="Visual data preparation brings seamless data access and faster POC to Production for Vision AI. It unleashes the power of Vision AI in the modern data stack, so the current tooling can process image and video data more effectively."
        imagePosition="left"
        image={
          <Image
            src="/images/feature-vdp.svg"
            alt="Feature img of Visual Data Preparation"
            width={289}
            height={283}
            className="m-auto"
            sizes="289px"
          />
        }
      />
      <FeatureItem
        label="OPEN SOURCE"
        title="Fetch, Deploy, and Share with the Community"
        description="Get started with our open source projects to explore Vision AI models powered by our community, set up visual data preparation and start processing your visual data right away. "
        imagePosition="right"
        image={
          <Image
            src="/images/feature-open-source.svg"
            alt="Feature img of opening source"
            width={260}
            height={238}
            className="m-auto"
            sizes="260px"
          />
        }
        featureCta={<GithubCtaButton />}
      />
      <FeatureItem
        label="API-FIRST SDK, CLI AND CONSOLE"
        title="Versatile and Developer Friendly Interface"
        description="Set up visual data preparation using SDKs and CLI tools built for developers, or via console without writing any code."
        imagePosition="left"
        image={
          <Image
            src="/images/feature-integrations.svg"
            alt="Feature img of versatile integrations"
            width={263}
            height={233}
            className="m-auto"
            sizes="263px"
          />
        }
      />
    </div>
  );
};

export default FeatureSection;
