import { FC } from "react";
import { FeatureBlock } from "../blocks/FeatureBlock";
import { FeatureOpenSourceSvg } from "../svgs/FeatureOpenSourceSvg";
import { FeatureVersatileInterfaceSvg } from "../svgs/FeatureVersatileInterfaceSvg";
import { FeatureVisualDataPreparationSvg } from "../svgs/FeatureVisualDataPreparationSvg";

interface Props {}

export const FeatureBlockGroup: FC<Props> = () => {
  return (
    <div className="flex flex-col">
      <FeatureBlock
        label="VISUAL DATA PREPARATION"
        title="Integrate Vision AI into existing data stack in minutes"
        description="Instill visual data pipeline can extract visual image and video data with pre-built connectors, convert them with ready-to-use Vision AI models to structured representation, sent to any destination for future analysis, without managing infrastructure."
        imagePosition="left"
        image={
          <FeatureVisualDataPreparationSvg styleName="w-[304px] h-[299px] mx-auto" />
        }
      />
      <FeatureBlock
        label="OPEN SOURCE"
        title="Fetch, Deploy and Share with the Community"
        description="Get started with our open source projects to explore Vision AI models powered by our community, set up a visual data pipeline and start processing your visual data right away. "
        imagePosition="right"
        image={<FeatureOpenSourceSvg styleName="w-[386px] h-[352px] mx-auto" />}
      />
      <FeatureBlock
        label="BUILD WITH GOOD TOOL"
        title="Versatile and Developer Friendly Interface"
        description="Set up your visual data pipelines using SDKs and CLI tools built for developers, or via console without writing any code."
        imagePosition="left"
        image={
          <FeatureVersatileInterfaceSvg styleName="w-[411px] h-[364px] mx-auto" />
        }
      />
    </div>
  );
};
