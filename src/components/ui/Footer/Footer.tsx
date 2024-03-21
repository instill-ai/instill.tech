import {
  DiscordIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  Logo,
  Logos,
  MediumIcon,
  TwitterIcon,
} from "@instill-ai/design-system";
import { CopyRightText } from "..";
import { AnimateSlogan } from "./AnimateSlogan";
import { Tab } from "./Tab";
import { TabLinks } from "./Tab";
import { LATEST_VERSIONS } from "../../../../version.mjs";

export const Footer = () => {
  const socialIconStyle = {
    width: "w-[30px]",
    height: "h-[30px]",
    position: "m-auto",
    color: "fill-instillGrey30 hover:fill-instillGrey05",
  };

  const tabs: TabLinks = {
    socialLinks: [
      {
        icon: <GitHubIcon {...socialIconStyle} />,
        href: "https://github.com/instill-ai",
      },
      {
        icon: <DiscordIcon {...socialIconStyle} />,
        href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK || "/",
      },
      {
        icon: <Logos.TwitterLight className="h-5 w-5" />,
        href: "https://twitter.com/instill_tech",
      },
      {
        icon: <LinkedInIcon {...socialIconStyle} />,
        href: "https://www.linkedin.com/company/instilltech/",
      },
      {
        icon: <FacebookIcon {...socialIconStyle} />,
        href: "https://www.facebook.com/instilltech",
      },
      {
        icon: <MediumIcon {...socialIconStyle} />,
        href: "https://medium.com/instill-ai",
      },
    ],
    products: [
      {
        text: "Instill Cloud",
        href: "https://www.instill.tech",
      },
      {
        text: "Instill Core",
        href: "https://github.com/instill-ai/instill-core",
      },
    ],
    resources: [
      {
        text: "Documentation",
        href: `/docs/welcome`,
      },
      {
        text: "Tutorial",
        href: "/tutorials",
      },
      {
        text: "Newsletter",
        href: "/newsletter",
      },
      {
        text: "Media Kit",
        href: "https://artifacts.instill.tech/instill-ai-media-kit.zip",
      },
      {
        text: "Changelog",
        href: "/changelog",
      },
      {
        text: "API Reference",
        href: "https://openapi.instill.tech",
      },
    ],
    support: [
      {
        text: "Status",
        href: "https://status.instill.tech",
      },
      {
        text: "Community",
        href: "https://discord.gg/sevxWsqpGh",
      },
      {
        text: "Contact",
        href: "mailto:hello@instill.tech",
      },
      {
        text: "Pricing",
        href: "/pricing",
      },
    ],
    company: [
      {
        text: "About",
        href: "/about",
      },
      {
        text: "Blog",
        href: "/blog",
      },
      {
        text: "Career",
        href: "/career",
      },
      {
        text: "Terms of Service",
        href: "https://www.iubenda.com/terms-and-conditions/60558066",
      },
      {
        text: "Privacy Policy",
        href: "/privacy",
      },
      {
        text: "Cookie Policy",
        href: "/cookie",
      },
    ],
  };

  return (
    <div className="flex w-full bg-instillGrey90">
      <div className="mt-auto flex w-full max-w-[1440px] flex-col p-10 xl:mx-auto max:w-10/12 max:px-0">
        <div className="mb-[120px] flex flex-col gap-x-10 xl:mb-[180px] xl:flex-row">
          <div className="mb-[120px] flex flex-col space-y-5 xl:mb-0">
            <AnimateSlogan />
            <Logo variant="whiteLogomark" width={30} />
          </div>
          <div className="grid flex-1 gap-x-5 gap-y-20 xl:grid-cols-5 xl:gap-y-0">
            <Tab type="social" header="socials" links={tabs.socialLinks} />
            <Tab type="others" header="product" links={tabs.products} />
            <Tab type="others" header="resources" links={tabs.resources} />
            <Tab type="others" header="support" links={tabs.support} />
            <Tab type="others" header="company" links={tabs.company} />
          </div>
        </div>
        <CopyRightText />
      </div>
    </div>
  );
};
