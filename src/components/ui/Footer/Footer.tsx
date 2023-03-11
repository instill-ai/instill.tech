import {
  DiscordIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  Logo,
  MediumIcon,
  TwitterIcon,
} from "@instill-ai/design-system";
import { CopyRightText } from "..";
import { AnimateSlogan } from "./AnimateSlogan";
import { Tab } from "./Tab";
import { TabLinks } from "./Tab";

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
        icon: <TwitterIcon {...socialIconStyle} />,
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
        text: "Deploy OSS VDP",
        href: "https://github.com/instill-ai/vdp",
      },
      {
        text: "Try VDP Demo",
        href: "https://demo.instill.tech",
      },
      {
        text: "Join Instill Cloud waitlist",
        href: "/get-access",
      },
    ],
    resources: [
      {
        text: "Documentation",
        href: "/docs/start-here/getting-started",
      },
      {
        text: "Blog",
        href: "/blog",
      },
      {
        text: "Newsletter",
        href: "/newsletter",
      },
    ],
    company: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Career",
        href: "/career",
      },
      {
        text: "Privacy Policy",
        href: "/privacy",
      },
      {
        text: "Cookie Policy",
        href: "/cookie",
      },
      {
        text: "Contact Us",
        href: "mailto:hello@instill.tech",
      },
    ],
  };

  return (
    <div className="flex w-full bg-instillGrey90">
      <div className="mt-auto flex w-full max-w-[1440px] flex-col p-10 xl:mx-auto max:w-10/12 max:px-0">
        <div className="mb-[120px] flex flex-col gap-x-10 xl:mb-[180px] xl:flex-row">
          <div className="mb-[120px] flex flex-col space-y-5 xl:mb-0">
            <AnimateSlogan />
            <Logo type="whiteLogomark" width={30} />
          </div>
          <div className="grid flex-1 gap-x-5 gap-y-20 xl:grid-cols-4 xl:gap-y-0">
            <Tab type="social" header="socials" links={tabs.socialLinks} />
            <Tab type="others" header="product" links={tabs.products} />
            <Tab type="others" header="resources" links={tabs.resources} />
            <Tab type="others" header="company" links={tabs.company} />
          </div>
        </div>
        <CopyRightText />
      </div>
    </div>
  );
};
