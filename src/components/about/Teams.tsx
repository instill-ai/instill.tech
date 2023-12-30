import { Nullable } from "@/types/instill";
import {
  Dialog,
  GitHubIcon,
  LinkedInIcon,
  ScrollArea,
} from "@instill-ai/design-system";
import * as React from "react";

type Team = {
  id: number;
  name: string;
  role: string;
  linkedIn?: string;
  github?: string;
  bio?: string;
};

const teams: Team[] = [
  {
    id: 1,
    name: "Ping-Lin Chang",
    role: "Founder and CEO",
    linkedIn: "https://www.linkedin.com/in/pinglin/",
    github: "https://github.com/pinglin",
    bio: "Ping-Lin, a PhD graduate in Robotic Vision from Imperial College London, specialized in Visual Simultaneous Localisation and Mapping (VSLAM) and Machine Learning (ML) for Augmented Reality (AR) in image-guided surgery, with his work featured in esteemed conferences and journals like MICCAI, TMI, RAL, and MRR. Leveraging his expertise, he co-founded Umbo Computer Vision in 2015, serving as CTO and spearheading the development of AI-first products for autonomous video security, notably enhancing business efficiency and scalability in the US, EU, and Asia. His entrepreneurial journey continued in 2020 with the co-founding of Instill AI alongside Xiaofei Du, aiming to revolutionize unstructured data ETL infrastructure, thereby broadening AI's accessibility and application across various industry sectors.",
  },
  {
    id: 2,
    name: "Xiaofei Du",
    role: "Founder and COO",
    linkedIn: "https://www.linkedin.com/in/xiaofeidu/",
    github: "https://github.com/xiaofei-du",
    bio: "Xiaofei Du, the COO of Instill AI, holds a PhD in Medical Physics from University College London (UCL). She specializes in Vision AI and deep learning, with extensive practical experience in applied AI applications. Her contributions include publications in top computer vision conferences such as ECCV, AAAI, and ICCV.",
  },
  {
    id: 3,
    name: "Shih-Chun Huang",
    role: "Developer Advocate",
    linkedIn: "https://www.linkedin.com/in/shih-chun-huang/",
    github: "https://github.com/ShihChun-H",
    bio: "Shih-Chun Huang, a specialist in machine learning and signal processing, holds a Master's degree in Electrical and Computer Engineering from University of Illinois, Urbana-Champaign. His experience spans from renowned consulting firm to venture capital firm, amplifying his passion for startups and innovation.",
  },
  {
    id: 4,
    name: "Harsh Soni",
    role: "Product Manager",
    linkedIn: "http://linkedin.com/in/soniharsh",
    github: "https://github.com/harshsoni7",
    bio: "Harsh comes with experience in Product and enjoys working on the latest tech while blending in growth & strategic insights. He enjoys meditating, backpacking, staying active, and spending time with friends and family. He holds an engineering degree from University of Toronto and an MBA from Ivey Business School.",
  },
  {
    id: 5,
    name: "Dani Sosa",
    role: "Product Designer",
    linkedIn: "https://www.linkedin.com/in/sosadaniel/",
    github: "https://github.com/dloopy",
    bio: "Daniel Sosa, the Product Designer of Instill AI, is a versatile creative professional. With a background in art direction, game design, and digital creativity, he excels in crafting vibrant illustrations, dynamic animations, impactful identities, and intuitive user interfaces. In addition to their role, they passionately pursue personal projects spanning music and game development.",
  },
  {
    id: 6,
    name: "Po-Chun Chiu",
    role: "Frontend Engineer",
    linkedIn: "https://www.linkedin.com/in/po-chun-chiu-05103285/",
    github: "https://github.com/EiffelFly",
    bio: "A person consistently seeking solutions toward fundamental problems in this century. include Information overloaded, Polarized society, listing structure issues.",
  },
  {
    id: 7,
    name: "Naman Anand",
    role: "Frontend Engineer",
    linkedIn: "https://www.linkedin.com/in/naman-anand-033a39150/",
    github: "https://github.com/iamnamananand996",
    bio: "Naman is a front-end engineer, with experience working at startups. He is passionate about bringing the best user and developer experience to software in the real-world. Hold a bachelor's degree in Computer Science, and love to contribute to open source projects",
  },
  {
    id: 8,
    name: "Heiru Wu",
    role: "AI Engineer",
    linkedIn: "https://www.linkedin.com/in/heiruwu/",
    github: "https://github.com/heiruwu",
    bio: "Hei Ru is an enthusiastic and self-driven learner with an unwavering passion for the dynamic realm of software engineering and machine learning, currently serving as a Senior AI Engineer at Instill AI",
  },
  {
    id: 9,
    name: "Chun Hao Wang",
    role: "AI Engineer",
    linkedIn: "https://www.linkedin.com/in/chun-hao-wang-tony/",
    github: "https://github.com/tonywang10101",
    bio: "Hey Im Tony",
  },
  {
    id: 10,
    name: "Leo Chen",
    role: "AI Engineer",
    linkedIn: "https://www.linkedin.com/in/tychen5/",
    github: "https://github.com/tychen5",
    bio: "Ting-Yi, holds an MS in Information Management from National Taiwan University, excels in applying cutting-edge AI and LLM technologies to complex real-world applications. Specializing in NLP and data science, he is passionate about developing AI module pipelines and innovating in areas like RAG, agent bot, and information retrieval.",
  },
  {
    id: 11,
    name: "Hui-Tang Chang",
    role: "Backend Engineer",
    linkedIn: "https://www.linkedin.com/in/changhuitang/",
    github: "https://github.com/donch1989",
    bio: "Hui Tang has a background in computer vision, deep learning, and backend engineering, with experience working at several AI startups. He currently serves as a Senior Backend Engineer at Instill AI. His goal is to bring AI products to real-world implementation. He holds B.S. and M.S. degrees in Electrical Engineering from National Taiwan University.",
  },
  {
    id: 12,
    name: "Juan Vallés",
    role: "Backend Engineer",
    linkedIn: "",
    github: "https://github.com/jvallesm",
    bio: "Juan is a software engineer based in Zaragoza, Spain. With more than 10 years of experience building apps, he enjoys solving engineering challenges with a product-centric vision. He likes bouldering, playing Caribbean music and is a proud cat and plant parent. He holds a telecommunications engineering degree and has interned at CERN.",
  },
  {
    id: 13,
    name: "Sarthak Gupta",
    role: "DevOps Engineer",
    linkedIn: "https://www.linkedin.com/in/sarthak-kg-bb887b239/",
    github: "https://github.com/Sarthak-instill",
    bio: "Sarthak Gupta, a versatile DevOps Engineer from India at Instill AI, excels in architecting secure, scalable infrastructures. His experience across diverse startups enriches his expertise in cloud security and operational efficiency. At Instill AI, Sarthak is pivotal in harmonising development with operations, fueling AI innovations.",
  },
  {
    id: 14,
    name: "Minji Kim",
    role: "Office Administrator",
    linkedIn: "",
    github: "",
    bio: "",
  },
];

export const Teams = () => {
  const [currentTeamMember, setCurrentTeamMember] =
    React.useState<Nullable<Team>>(null);

  const [open, setOpen] = React.useState<boolean>(false);

  const handleTemaDilog = (name: number) => {
    setCurrentTeamMember(teams?.find((team) => team.id === name) || null);
    setOpen(true);
  };

  return (
    <React.Fragment>
      <div className="my-10 xl:text-left">
        <div className="text-left">
          <p className="mb-5 font-mono text-[24px]  font-medium text-black xl:text-[48px]">
            Who we are
          </p>

          <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
            If our core values resonate with you and you thrive in a dynamic,
            passionate team of dedicated engineers, researchers, designers, and
            product enthusiasts, we encourage you to delve into our{" "}
            <a
              href={"/career"}
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              open roles
            </a>
            . Together, let&apos;s make a meaningful impact on the world!
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div className="flex h-[100px] w-full bg-[#40A8F51A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(1)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#40A8F5] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/ping-lin-chang.png"
                  alt="Ping Lin Chang Image"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/ping-lin-chang-mobile.png"
                  alt="Ping Lin Chang Image"
                  className="block xl:hidden"
                />
              </div>
            </div>

            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Ping-Lin Chang
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Founder and CEO
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/pinglin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/pinglin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#40A8F51A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(2)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#40A8F5] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/xiaofei-du.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/xiaofei-du-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Xiaofei Du
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Founder and COO
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/xiaofei-du"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/xiaofeidu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FFDF3A1A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(3)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FFDF3A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/shih-chun-huang.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/shih-chun-huang-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Shih-Chun Huang
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Developer Advocate
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/ShihChun-H"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shih-chun-huang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FFDF3A1A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(4)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FFDF3A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/harsh-soni.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/harsh-soni-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Harsh Soni
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Product Manager
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/harshsoni7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="http://linkedin.com/in/soniharsh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FFDF3A1A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(5)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FFDF3A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/dani-sosa.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/dani-sosa-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Dani Sosa
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Product Designer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/dloopy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sosadaniel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(6)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/po-chun-chiu.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/po-chun-chiu-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Po-Chun Chiu
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Frontend Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/EiffelFly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/po-chun-chiu-05103285/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(7)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/naman-anand.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/naman-anand-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Naman Anand
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Frontend Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/iamnamananand996"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/naman-anand-033a39150/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(8)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/heiru-wu.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/heiru-wu-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Heiru Wu
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  AI Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/heiruwu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/heiruwu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(9)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/chun-hao-wang.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/chun-hao-wang-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Chun Hao Wang
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  AI Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/tonywang10101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chun-hao-wang-tony/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(10)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/leo-chen.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/leo-chen-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Leo Chen
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  AI Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/tychen5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tychen5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(11)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>

              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/hui-tang-chang.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/hui-tang-chang-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Hui-Tang Chang
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Backend Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/donch1989"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/changhuitang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(12)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>
              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/juan-valles.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/juan-valles-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Juan Vallés
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Backend Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/jvallesm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#FF53531A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(13)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>
              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/sarthak-gupta.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/sarthak-gupta-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Sarthak Gupta
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  DevOps Engineer
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a
                    href="https://github.com/Sarthak-instill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sarthak-kg-bb887b239/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[100px] w-full bg-[#1A1A1A1A] xl:h-[160px]">
            <div
              className="group relative inline-block cursor-pointer overflow-hidden"
              onClick={() => handleTemaDilog(14)}
            >
              <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#1A1A1A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
                <img src="images/teams/wombat.svg" alt="Wombat Image" />
              </div>
              <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
                <img
                  src="images/teams/minji-kim.png"
                  className="hidden xl:block"
                />
                <img
                  src="images/teams/minji-kim-mobile.png"
                  className="block xl:hidden"
                />
              </div>
            </div>
            <div className="my-auto w-3/4">
              <div className="ml-10">
                <p className="font-sans text-[18px] font-medium text-zinc-900 xl:text-[24px]">
                  Minji Kim
                </p>
                <p className="font-sans text-[14px] font-normal leading-7 text-zinc-900 xl:text-base">
                  Office Administrator
                </p>
                <div className="mt-1 flex gap-x-5 xl:mt-10">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>

                  <a href="" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon
                      width="w-[24px]"
                      height="h-[24px]"
                      color="fill-instillGrey95 cursor-pointer"
                      position="my-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog.Root
        open={open}
        onOpenChange={(e) => {
          setOpen(false);
        }}
      >
        <Dialog.Content className="!gap-1 overflow-y-auto rounded-none bg-[#F6F6F6] !p-10">
          <ScrollArea.Root className="h-[500px] p-6">
            <p className="!mb-0 !pb-0 font-sans text-[24px] font-medium text-[#1A1A1A]">
              {currentTeamMember?.name}
            </p>
            <p className="font-sans text-[16px] font-normal leading-7 text-[#1A1A1A]">
              {currentTeamMember?.role}
            </p>
            <div className="mt-1 flex gap-x-5">
              <a
                href={currentTeamMember?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  width="w-[24px]"
                  height="h-[24px]"
                  color="fill-instillGrey95 cursor-pointer"
                  position="my-auto"
                />
              </a>

              <a
                href={currentTeamMember?.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  width="w-[24px]"
                  height="h-[24px]"
                  color="fill-instillGrey95 cursor-pointer"
                  position="my-auto"
                />
              </a>
            </div>

            <p className="mt-5 font-sans text-[16px] font-normal leading-7 text-zinc-900">
              {currentTeamMember?.bio}
            </p>
          </ScrollArea.Root>
          <Dialog.Close onClick={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Root>
    </React.Fragment>
  );
};
