import { Nullable } from "@/types/instill";
import {
  Button,
  Dialog,
  GitHubIcon,
  LinkedInIcon,
  ScrollArea,
  Separator,
} from "@instill-ai/design-system";
import * as React from "react";

type Team = {
  id: number;
  name: string;
  role: string;
  linkedIn?: string;
  github?: string;
  bio?: string;
  imgSrc: string;
};

const teams: Team[] = [
  {
    id: 1,
    name: "Ping-Lin Chang",
    role: "Founder and CEO",
    imgSrc: "images/teams/ping-lin-chang.png",
    linkedIn: "https://www.linkedin.com/in/pinglin/",
    github: "https://github.com/pinglin",
    bio: "Ping-Lin, a PhD graduate in Robotic Vision from Imperial College London, specialized in Visual Simultaneous Localisation and Mapping (VSLAM) and Machine Learning (ML) for Augmented Reality (AR) in image-guided surgery, with his work featured in esteemed conferences and journals like MICCAI, TMI, RAL, and MRR. Leveraging his expertise, he co-founded Umbo Computer Vision in 2015, serving as CTO and spearheading the development of AI-first products for autonomous video security, notably enhancing business efficiency and scalability in the US, EU, and Asia. His entrepreneurial journey continued in 2020 with the co-founding of Instill AI alongside Xiaofei Du, aiming to revolutionize unstructured data ETL infrastructure, thereby broadening AI's accessibility and application across various industry sectors.",
  },
  {
    id: 2,
    name: "Xiaofei Du",
    imgSrc: "images/teams/xiaofei-du.png",
    role: "Founder and COO",
    linkedIn: "https://www.linkedin.com/in/xiaofeidu/",
    github: "https://github.com/xiaofei-du",
    bio: "Xiaofei Du, the COO of Instill AI, holds a PhD in Medical Physics from University College London (UCL). She specializes in Vision AI and deep learning, with extensive practical experience in applied AI applications. Her contributions include publications in top computer vision conferences such as ECCV, AAAI, and ICCV.",
  },
  {
    id: 3,
    name: "Shih-Chun Huang",
    imgSrc: "images/teams/shih-chun-huang.png",
    role: "Developer Advocate",
    linkedIn: "https://www.linkedin.com/in/shih-chun-huang/",
    github: "https://github.com/ShihChun-H",
    bio: "Shih-Chun Huang, a specialist in machine learning and signal processing, holds a Master's degree in Electrical and Computer Engineering from University of Illinois, Urbana-Champaign. His experience spans from renowned consulting firm to venture capital firm, amplifying his passion for startups and innovation.",
  },
  {
    id: 4,
    name: "Dani Sosa",
    role: "Product Designer",
    imgSrc: "images/teams/dani-sosa.png",
    linkedIn: "https://www.linkedin.com/in/sosadaniel/",
    github: "https://github.com/dloopy",
    bio: "Daniel Sosa, is a creative professional with over a decade's experience designing digital products and experiences. Leveraging cross-functional skills in UX, art direction, multimedia and a background in Audiovisual Sciences and Photography, and a Master's Degree in Game Design and Development, he adapts seamlessly to new trends. His focus spans strategy, innovation and leadership plus hands-on design execution.",
  },

  {
    id: 5,
    name: "Po-Chun Chiu",
    imgSrc: "images/teams/po-chun-chiu.png",
    role: "Frontend Engineer",
    linkedIn: "https://www.linkedin.com/in/po-chun-chiu-05103285/",
    github: "https://github.com/EiffelFly",
    bio: "A person consistently seeking solutions toward fundamental problems in this century. include Information overloaded, Polarized society, listing structure issues.",
  },
  {
    id: 6,
    name: "Naman Anand",
    imgSrc: "images/teams/naman-anand.png",
    role: "Frontend Engineer",
    linkedIn: "https://www.linkedin.com/in/naman-anand-033a39150/",
    github: "https://github.com/iamnamananand996",
    bio: "Naman is a front-end engineer, with experience working at startups. He is passionate about bringing the best user and developer experience to software in the real-world. Hold a bachelor's degree in Computer Science, and love to contribute to open source projects",
  },
  {
    id: 7,
    name: "Heiru Wu",
    imgSrc: "images/teams/heiru-wu.png",
    role: "AI Engineer",
    linkedIn: "https://www.linkedin.com/in/heiruwu/",
    github: "https://github.com/heiruwu",
    bio: "Hei Ru is an enthusiastic and self-driven learner with an unwavering passion for the dynamic realm of software engineering and machine learning, currently serving as a Senior AI Engineer at Instill AI",
  },
  {
    id: 8,
    name: "Chun Hao Wang",
    imgSrc: "images/teams/chun-hao-wang.png",
    role: "AI Engineer",
    linkedIn: "https://www.linkedin.com/in/chun-hao-wang-tony/",
    github: "https://github.com/tonywang10101",
    bio: "Tony is an experienced Applied Data Scientist and MLOps specialist, passionate about crafting data-driven solutions. He brings years of expertise to the table, along with a natural inclination for continuous learning and initiative. Tony excels in teamwork, seamlessly collaborating with developers, researchers, and business leaders. At Insill AI, his goal is to seamlessly integrate AI into our daily lives, fostering innovation and practical advancements.",
  },
  {
    id: 9,
    name: "Leo Chen",
    imgSrc: "images/teams/leo-chen.png",
    role: "AI Engineer",
    linkedIn: "https://www.linkedin.com/in/tychen5/",
    github: "https://github.com/tychen5",
    bio: "Ting-Yi, holds an MS in Information Management from National Taiwan University, excels in applying cutting-edge AI and LLM technologies to complex real-world applications. Specializing in NLP and data science, he is passionate about developing AI module pipelines and innovating in areas like RAG, agent bot, and information retrieval.",
  },
  {
    id: 10,
    name: "Hui-Tang Chang",
    imgSrc: "images/teams/hui-tang-chang.png",
    role: "Backend Engineer",
    linkedIn: "https://www.linkedin.com/in/changhuitang/",
    github: "https://github.com/donch1989",
    bio: "Hui Tang has a background in computer vision, deep learning, and backend engineering, with experience working at several AI startups. He currently serves as a Senior Backend Engineer at Instill AI. His goal is to bring AI products to real-world implementation. He holds B.S. and M.S. degrees in Electrical Engineering from National Taiwan University.",
  },
  {
    id: 11,
    name: "Juan Vallés",
    imgSrc: "images/teams/juan-valles.png",
    role: "Backend Engineer",
    linkedIn: "",
    github: "https://github.com/jvallesm",
    bio: "Juan is a software engineer based in Zaragoza, Spain. With more than 10 years of experience building apps, he enjoys solving engineering challenges with a product-centric vision. He likes bouldering, playing Caribbean music and is a proud cat and plant parent. He holds a telecommunications engineering degree and has interned at CERN.",
  },
  {
    id: 12,
    name: "Sarthak Gupta",
    imgSrc: "images/teams/sarthak-gupta.png",
    role: "DevOps Engineer",
    linkedIn: "https://www.linkedin.com/in/sarthak-kg-bb887b239/",
    github: "https://github.com/Sarthak-instill",
    bio: "Sarthak Gupta, a versatile DevOps Engineer from India at Instill AI, excels in architecting secure, scalable infrastructures. His experience across diverse startups enriches his expertise in cloud security and operational efficiency. At Instill AI, Sarthak is pivotal in harmonising development with operations, fueling AI innovations.",
  },
  {
    id: 13,
    name: "Minji Kim",
    imgSrc: "images/teams/minji-kim.png",
    role: "Office Administrator",
    linkedIn: "",
    github: "",
    bio: "Minji is an administrator based in London, UK. She enjoys supporting all members of the general issues such as accounting, payroll and legal matters etc. She likes drawing, listening to classical music, and caring about family, especially cooking for them as well. She holds an economic and accounting degree.",
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
      <div className="mb-10 px-2 xl:text-left">
        <div className="text-center">
          <Button
            variant="secondaryGrey"
            size="lg"
            className="mb-2 rounded-sm !px-3 !py-1 !text-[13px]"
          >
            Values-Driven Passion
          </Button>

          <p className="my-4 font-sans text-[32px] font-medium text-black">
            Who we are
          </p>
          <div className="flex justify-center text-center">
            <div className="w-full">
              <p className="font-sans text-[20px] font-normal leading-[30px] text-[#010D3E] xl:text-base">
                If our core values resonate with you and you thrive in a
                dynamic, passionate team of dedicated engineers, researchers,
                designers, and product enthusiasts, we encourage you to delve
                into our{" "}
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
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-2 xl:grid-cols-3">
          {teams.map((team) => (
            <div
              className="w-full rounded-sm bg-[#FFFFFF1A] bg-opacity-80 p-2 shadow-lg backdrop-blur-sm"
              key={team.id}
            >
              <div className="flex flex-row">
                <div
                  className="relative inline-block cursor-pointer overflow-hidden transition-transform duration-500 ease-in-out"
                  onClick={() => handleTemaDilog(team.id)}
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={team.imgSrc}
                      alt="Wombat Image"
                      className="h-[56px] w-[56px] rounded-full shadow-sm"
                    />
                  </div>
                </div>
                <div className="ml-5">
                  <p className="font-sans text-[18px] font-medium text-[#1D2433] xl:text-[24px]">
                    {team.name}
                  </p>
                  <p className="font-sans text-[14px] font-normal leading-5 text-[#1D2433CC] xl:text-base">
                    {team.role}
                  </p>
                </div>
              </div>
              <Separator className="my-2" />
              <div>
                <div className="flex justify-center gap-x-5 py-3">
                  {team.github && (
                    <a
                      href={team.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row gap-x-2"
                    >
                      <GitHubIcon
                        width="w-[24px]"
                        height="h-[24px]"
                        color="fill-instillGrey95 cursor-pointer"
                        position="my-auto"
                      />

                      <span>Github</span>
                    </a>
                  )}

                  <Separator className="my-3" orientation="vertical" />

                  {team.linkedIn && (
                    <a
                      href={team.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row gap-2"
                    >
                      <LinkedInIcon
                        width="w-[24px]"
                        height="h-[24px]"
                        color="fill-instillGrey95 cursor-pointer"
                        position="my-auto"
                      />
                      LinkedIn
                      <span></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={open}
        onOpenChange={(e) => {
          setOpen(false);
        }}
      >
        <Dialog.Content className="!gap-1 overflow-y-auto rounded-none bg-[#F6F6F6] !p-10">
          <div className="h-[500px] overflow-auto p-6">
            <p className="!mb-0 !pb-0 font-sans text-[24px] font-medium text-[#1A1A1A]">
              {currentTeamMember?.name}
            </p>
            <p className="font-sans text-[16px] font-normal leading-7 text-[#1A1A1A]">
              {currentTeamMember?.role}
            </p>
            <div className="mt-1 flex gap-x-5">
              {currentTeamMember?.github ? (
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
              ) : null}
              {currentTeamMember?.linkedIn ? (
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
              ) : null}
            </div>

            <p className="mt-5 font-sans text-[16px] font-normal leading-7 text-zinc-900">
              {currentTeamMember?.bio}
            </p>
          </div>
          <Dialog.Close onClick={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Root>
    </React.Fragment>
  );
};
