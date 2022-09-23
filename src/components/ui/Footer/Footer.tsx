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
import { Tab } from "./Tab";
import { TabLinks } from "./Tab";

const Footer = () => {
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
        href: process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK,
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
        href: "",
      },
      {
        text: "Try VDP Demo",
        href: "",
      },
      {
        text: "Join Instill Cloud waitlist",
        href: "",
      },
    ],
    resources: [
      {
        text: "Documentation",
        href: "/docs/start-here/getting-started",
      },
      {
        text: "Blog",
        href: "https://blog.instill.tech/",
      },
      {
        text: "Newsletter",
        href: "/newsletter",
      },
    ],
    company: [
      {
        text: "About Instill AI",
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
        href: "",
      },
    ],
  };

  return (
    <div className="flex w-full bg-instillGrey90">
      <div className="mt-auto flex w-full max-w-[1440px] flex-col p-10 md:mx-auto max:w-10/12 max:px-0">
        <div className="flex flex-row space-x-10 mb-[180px]">
          <div className="flex flex-col space-y-5">
            <div className="w-[300px] font-mono font-medium text-2xl text-instillGrey05">
              WHERE VISUAL DATA PREPARATION MADE FOR ALL
            </div>
            <Logo type="whiteLogomark" width={30} />
          </div>
          <div className="flex-1 grid grid-cols-4 gap-x-5">
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

export default Footer;
