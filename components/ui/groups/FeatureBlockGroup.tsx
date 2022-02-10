import { FC } from "react";
import { FeatureBlock } from "../blocks/FeatureBlock";
import { FeatureOpenSourceSvg } from "../svgs/FeatureOpenSourceSvg";
import { FeatureVersatileInterfaceSvg } from "../svgs/FeatureVersatileInterfaceSvg";
import { FeatureVisualDataPreparationSvg } from "../svgs/FeatureVisualDataPreparationSvg";
import * as classNames from "classnames";
import { GithubCtaButton } from "../buttons/GitHubCtaButton";

interface Props {
  styleName?: string;
}

export const FeatureBlockGroup: FC<Props> = ({ styleName }) => {
  return (
    <div
      id="feature-block-group"
      className={classNames.default("flex flex-col", styleName)}
    >
      <FeatureBlock
        label="VISUAL DATA PREPARATION"
        title="Integrate Vision AI into existing data stack in minutes"
        description="Visual data preparation can extract visual image and video data with pre-built connectors, convert them with ready-to-use Vision AI models to structured representation. Sent to any destination for future analysis, without managing infrastructure."
        imagePosition="left"
        image={
          <FeatureVisualDataPreparationSvg styleName="w-[289px] h-[183px] mx-auto" />
        }
      />
      <FeatureBlock
        label="OPEN SOURCE"
        title="Fetch, Deploy, and Share with the Community"
        description="Get started with our open source projects to explore Vision AI models powered by our community, set up visual data preparation and start processing your visual data right away. "
        imagePosition="right"
        image={<FeatureOpenSourceSvg styleName="w-[260px] h-[238px] mx-auto" />}
        featureCta={<GithubCtaButton />}
      />
      <FeatureBlock
        label="API-FIRST SDK, CLI AND CONSOLE"
        title="Versatile and Developer Friendly Interface"
        description="Set up visual data preparation using SDKs and CLI tools built for developers, or via console without writing any code."
        imagePosition="left"
        image={
          <FeatureVersatileInterfaceSvg styleName="w-[263px] h-[233px] mx-auto" />
        }
      />
    </div>
  );
};
