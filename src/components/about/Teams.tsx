import { GitHubIcon, LinkedInIcon } from "@instill-ai/design-system";
import * as React from "react";

export const Teams = () => {
  return (
    <div className="my-10  xl:text-left">
      <div className="text-center xl:text-left">
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#40A8F5] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img
                src="images/teams/ping-lin-chang.svg"
                alt="Ping Lin Chang Image"
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#40A8F5] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/xiaofei-du.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FFDF3A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/shih-chun-huang.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FFDF3A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/harsh-soni.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FFDF3A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/dani-sosa.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/po-chun-chiu.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/naman-anand.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/heiru-wu.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/chun-hao-wang.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/leo-chen.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>

            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/hui-tang-chang.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>
            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/juan-valles.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#FF5353] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>
            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/sarthak-gupta.svg" />
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
          <div className="group relative inline-block cursor-pointer overflow-hidden">
            <div className="flex h-[100px] w-[100px] items-center justify-center bg-[#1A1A1A] p-5 transition-transform duration-500 ease-in-out hover:scale-0 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/wombat.svg" alt="Wombat Image" />
            </div>
            <div className="absolute inset-0 h-[100px] w-[100px] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 xl:h-[160px] xl:w-[160px]">
              <img src="images/teams/minji-kim.svg" />
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
  );
};
