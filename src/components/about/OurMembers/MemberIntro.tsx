import { forwardRef, Fragment } from "react";
import { MemberDetails } from "@/types/instill";
import Image from "next/future/image";
import cn from "clsx";
import { CrossIcon } from "@instill-ai/design-system";

export type MemberIntroProps = {
  member: MemberDetails;
  indent: string;
  styleName?: string;
  onCancelHandler: () => void;
};

// This code is pretty messy because we use <pre> to format the text.
// If you want to modify this file, please make sure every indention and whitespace
// are correct.

// export const MemberIntroBlock: FC<Props> = ({ member }) => {

//   useEffect(() => {
//     prism.highlightAll()

//   }, [])

//   let titleString = "";

//   member.titles.forEach((e) => {
//     titleString =
//       titleString +
//       `
//         {
//             "category": ${e},
//             "score": ${getRandIntBetween(0.85, 1)}
//         }`;
//   });

//   return (
//     <div className="">
//       <pre className="flex flex-col">
//         <code className={`language-js`}>
//           {`Ping-Lin Chang
// {
//     "titles": [${titleString}
//     ],
// `}
//         </code>
//         <code className="ml-10 whitespace-pre-wrap break-all">
//           {`"linkedin": "${member.linkedinLink}",
// "github": "${member.githubLink}"
// `}
//         </code>
//         <code>{`}`}
//         </code>
//       </pre>
//     </div>
//   );
// };

const MemberIntro = forwardRef<HTMLDivElement, MemberIntroProps>(
  ({ member, indent, styleName, onCancelHandler }, ref) => {
    let textColor: string;
    let bgColor: string;
    const defaultTextColor = "text-instillGrey05";
    const defaultFont = "font-mono";
    const defaultFontSize = "instill-text-small";

    if (member) {
      switch (member.kernelColor) {
        case "#40A8F5": {
          textColor = "text-[#40A8F5]";
          bgColor = "bg-[#40A8F5]";
          break;
        }
        case "#FFDF3A": {
          textColor = "text-[#FFDF3A]";
          bgColor = "bg-[#FFDF3A]";
          break;
        }
        case "#28F67E": {
          textColor = "text-[#28F67E]";
          bgColor = "bg-[#28F67E]";
          break;
        }
        default: {
          throw new Error("Color not found");
        }
      }
    } else {
      textColor = "#C0C0C0";
    }

    const titlesSkeleton = ["N/A", "N/A", "N/A"];

    const getTitleUnit = (
      m: MemberDetails,
      title: string,
      index: number,
      trailingComma: boolean
    ) => {
      return (
        <div
          key={`${m ? m.id : index}-${title}`}
          className={cn("flex flex-col", indent)}
        >
          <div className="text-instillRed">{`{`}</div>
          <div className={(cn("flex flex-col"), indent)}>
            <pre className="whitespace-pre-wrap break-all">
              <div>
                <span className={defaultTextColor}>{`"category": `}</span>
                <span className={defaultTextColor}>{`"`}</span>
                <span className={m ? textColor : "text-instillGrey30"}>
                  {`${title}`}
                </span>
                <span className={defaultTextColor}>{`"`}</span>
                <span className={defaultTextColor}>,</span>
              </div>
            </pre>
            <pre className="whitespace-pre-wrap break-all">
              <div>
                <span className={defaultTextColor}>{`"score": `}</span>
                <span className={m ? textColor : "text-instillGrey30"}>
                  {m
                    ? `${(Math.random() * (0.999 - 0.95) + 0.95).toFixed(3)}`
                    : "--"}
                </span>
              </div>
            </pre>
          </div>
          <div className="text-instillRed">
            {`}`}
            <span className={defaultTextColor}>{trailingComma ? "," : ""}</span>
          </div>
        </div>
      );
    };

    const getTitles = (m: MemberDetails) => {
      return (
        <Fragment>
          {m
            ? m.titles.map((title, index) => {
                return getTitleUnit(
                  m,
                  title,
                  index,
                  index === m.titles.length - 1 ? false : true
                );
              })
            : titlesSkeleton.map((title, index) => {
                return getTitleUnit(
                  m,
                  title,
                  index,
                  index === titlesSkeleton.length - 1 ? false : true
                );
              })}
        </Fragment>
      );
    };

    const getTitlesContainer = (m: MemberDetails, trailingComma: boolean) => {
      return (
        <div className={cn("flex flex-col", indent)}>
          <pre>
            <div>
              <span className={defaultTextColor}>{`"titles": `}</span>
              <span className="text-instillRed">{`[`}</span>
            </div>
          </pre>
          {getTitles(m)}
          <pre>
            <div className="text-instillRed">
              {`]`}
              <span className={defaultTextColor}>
                {trailingComma ? "," : ""}
              </span>
            </div>
          </pre>
        </div>
      );
    };

    const getOpenRoleDetails = (m: MemberDetails, trailingComma: boolean) => {
      const details = [
        { key: "title", value: m.openRoleTitle },
        { key: "location", value: m.openRoleLocation },
        { key: "type", value: m.openRoleType },
        { key: "link", value: m.openRoleLink },
      ];
      return (
        <div className={cn("flex flex-col", indent)}>
          <div className="text-instillRed">{`{`}</div>
          <div className={(cn("flex flex-col"), indent)}>
            <pre className="whitespace-pre-wrap break-all">
              {details.map((e, i) => (
                <div key={`${m.id}-${e.key}`}>
                  <span className={defaultTextColor}>{`"${e.key}": `}</span>
                  <span className={defaultTextColor}>{`"`}</span>
                  {e.key === "link" ? (
                    <a
                      href={e.value}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cn(textColor, "underline")}
                    >
                      {e.value}
                    </a>
                  ) : (
                    <span className={textColor}>{`${e.value}`}</span>
                  )}
                  <span className={defaultTextColor}>
                    {`"`}
                    {trailingComma ? (i === details.length - 1 ? "" : ",") : ""}
                  </span>
                </div>
              ))}
            </pre>
          </div>
          <div className="text-instillRed">{`}`}</div>
        </div>
      );
    };

    const getOpenRoleDetailsContainer = (
      m: MemberDetails,
      trailingComma: boolean
    ) => {
      return (
        <div className={cn("flex flex-col", indent)}>
          <pre>
            <div>
              <span className={defaultTextColor}>{`"open_role": `}</span>
              <span className="text-instillRed">{`[`}</span>
            </div>
          </pre>
          {getOpenRoleDetails(m, trailingComma)}
          <pre>
            <div className="text-instillRed">{`]`}</div>
          </pre>
        </div>
      );
    };

    const getMemberName = (m: MemberDetails) => {
      const name = m
        ? m.type === "open_role"
          ? "Open Roles"
          : m.name
        : "No Detection";

      return <div className={defaultTextColor}>{name}</div>;
    };

    const getLinkedinLink = (m: MemberDetails, trailingComma: boolean) => {
      return (
        <div className={cn(indent)}>
          <pre className="whitespace-pre-wrap break-all">
            <span className={defaultTextColor}>{`"linkedin": `}</span>
            <span className={defaultTextColor}>{`"`}</span>
            {m ? (
              m.linkedinLink !== "N/A" ? (
                <a
                  href={m.linkedinLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(textColor, "underline")}
                >
                  {`${m.linkedinLink}`}
                </a>
              ) : (
                <span className={textColor}>{m.linkedinLink}</span>
              )
            ) : (
              <span className="text-instillGrey30">{`N/A`}</span>
            )}
            <span className={defaultTextColor}>
              {`"`}
              {trailingComma ? "," : ""}
            </span>
            <div />
          </pre>
        </div>
      );
    };

    const getGithubLink = (m: MemberDetails, trailingComma: boolean) => {
      return (
        <div className={cn(indent)}>
          <pre className="whitespace-pre-wrap break-all">
            <span className={defaultTextColor}>{`"github": `}</span>
            <span className={defaultTextColor}>{`"`}</span>
            {m ? (
              m.githubLink !== "N/A" ? (
                <a
                  href={m.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(textColor, "underline")}
                >
                  {`${m.githubLink}`}
                </a>
              ) : (
                <span className={textColor}>{m.githubLink}</span>
              )
            ) : (
              <span className="text-instillGrey30">{`N/A`}</span>
            )}
            <span className={defaultTextColor}>
              {`"`}
              {trailingComma ? "," : ""}
            </span>
            <div />
          </pre>
        </div>
      );
    };

    const getAvatar = (m: MemberDetails) => {
      return (
        <div className="w-full">
          <Image
            alt={`Instill member - ${m.name}'s avatar`}
            width={360}
            height={360}
            src={m.avatarDesktop}
            sizes="360px"
          />
        </div>
      );
    };

    const getOpenRoleMission = (trailingComma: boolean) => {
      return (
        <>
          <div className="text-instillRed">{`{`}</div>
          <div className={cn(indent)}>
            <pre className="whitespace-pre-wrap break-all">
              <span className={defaultTextColor}>{`"mission": `}</span>
              <span className={defaultTextColor}>{`"`}</span>
              <span className={textColor}>
                Make Vision Al highly accessbile to everyone. Join us and make a
                dent in the universe!
              </span>
              <span className={defaultTextColor}>
                {`"`}
                {trailingComma ? "," : ""}
              </span>
            </pre>
          </div>
        </>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full flex-col border-2 border-instillGrey95",
          styleName
        )}
      >
        <div className="flex flex-col md:sticky md:top-[164px]">
          <div
            className={cn(
              "flex flex-row px-5 py-2.5",
              member ? bgColor : "bg-instillGrey30"
            )}
          >
            <div className="mr-auto text-instillGrey95 text-instill-body">
              Detection result
            </div>
            <button className="ml-auto" onClick={onCancelHandler}>
              <CrossIcon
                width="w-6"
                height="h-6"
                color="fill-instillGrey95"
                position="my-auto"
              />
            </button>
          </div>

          <div className="border-t-2 border-instillGrey95">
            {member ? (
              getAvatar(member)
            ) : (
              <Image
                src="/images/member-avatar-skeleton.svg"
                width={360}
                height={360}
                alt="Skeleton of member avatar"
                sizes="360px"
              />
            )}
          </div>

          <div
            className={cn(
              "flex flex-col bg-instillGrey95 p-5",
              defaultFont,
              defaultFontSize
            )}
          >
            {member ? (
              member.type === "open_role" ? (
                <>
                  {getMemberName(member)}
                  {getOpenRoleMission(true)}
                  {getOpenRoleDetailsContainer(member, true)}
                  <div className="text-instillRed">{`}`}</div>
                </>
              ) : (
                <>
                  {getMemberName(member)}
                  <div className="text-instillRed">{`{`}</div>
                  {getTitlesContainer(member, true)}
                  {getLinkedinLink(member, true)}
                  {getGithubLink(member, false)}
                  <div className="text-instillRed">{`}`}</div>
                </>
              )
            ) : (
              <>
                {getMemberName(member)}
                <div className="text-instillRed">{`{`}</div>
                {getTitlesContainer(member, true)}
                {getLinkedinLink(member, true)}
                {getGithubLink(member, false)}
                <div className="text-instillRed">{`}`}</div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

MemberIntro.displayName = "MemberIntro";

export default MemberIntro;
