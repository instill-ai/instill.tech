import { FC, Fragment } from "react";
import { TMemberDetails } from "../../../types/instill";
import * as classNames from "classnames";
import Image from "next/image";
import { MemberAvatarSkeletonSvg } from "../svgs/images/MemberAvatarSkeletonSvg";

interface Props {
  member: TMemberDetails;
  indent: string;
  styleName?: string;
}

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

export const MemberIntroBlock: FC<Props> = ({ member, indent, styleName }) => {
  let textColor: string;
  const defaultTextColor = "text-instillGray70";
  const defaultFont = "font-mono";
  const defaultFontSize = "instill-text-small";

  if (member) {
    switch (member.kernelColor) {
      case "#40A8F5": {
        textColor = "text-[#40A8F5]";
        break;
      }
      case "#FFDF3A": {
        textColor = "text-[#FFDF3A]";
        break;
      }
      case "#28F67E": {
        textColor = "text-[#28F67E]";
        break;
      }
      default: {
        throw new Error("Text color not found");
      }
    }
  } else {
    textColor = "#C0C0C0";
  }

  const titlesSkeleton = ["N/A", "N/A", "N/A"];

  const getTitleUnit = (m: TMemberDetails, title: string, index: number) => {
    return (
      <div
        key={`${m ? m.id : index}-${title}`}
        className={classNames.default("flex flex-col", indent)}
      >
        <div className="text-instillRed">{`{`}</div>
        <div className={(classNames.default("flex flex-col"), indent)}>
          <pre className="whitespace-pre-wrap break-all">
            <div>
              <span className={defaultTextColor}>{`"category": `}</span>
              <span className={defaultTextColor}>{`"`}</span>
              <span className={m ? textColor : "text-instillGray30"}>
                {`${title}`}
              </span>
              <span className={defaultTextColor}>{`"`}</span>
            </div>
          </pre>
          <pre>
            <div>
              <span className={defaultTextColor}>{`"score": `}</span>
              <span className={m ? textColor : "text-instillGray30"}>
                {`${0.993}`}
              </span>
            </div>
          </pre>
        </div>
        <div className="text-instillRed">{`}`}</div>
      </div>
    );
  };

  const getTitles = (m: TMemberDetails) => {
    return (
      <Fragment>
        {m
          ? m.titles.map((title, index) => {
              return getTitleUnit(m, title, index);
            })
          : titlesSkeleton.map((title, index) => {
              return getTitleUnit(m, title, index);
            })}
      </Fragment>
    );
  };

  const getTitlesContainer = (m: TMemberDetails) => {
    return (
      <div className={classNames.default("flex flex-col", indent)}>
        <pre>
          <div>
            <span className={defaultTextColor}>{`titles: `}</span>
            <span className="text-instillRed">{`[`}</span>
          </div>
        </pre>
        {getTitles(m)}
        <pre>
          <div className="text-instillRed">{`]`}</div>
        </pre>
      </div>
    );
  };

  const getMemberName = (m: TMemberDetails) => {
    return (
      <div className={defaultTextColor}>{m ? m.name : "No Detection"}</div>
    );
  };

  const getLinkedinLink = (m: TMemberDetails) => {
    return (
      <div className={classNames.default(indent)}>
        <pre className="whitespace-pre-wrap break-all">
          <span className={defaultTextColor}>{`"linkedin": `}</span>
          <span className={defaultTextColor}>{`"`}</span>
          <span className={m ? textColor : "text-instillGray30"}>
            {`${m ? m.linkedinLink : "https://www.linkedin.com/in/???"}`}
          </span>
          <span className={defaultTextColor}>{`"`}</span>
          <div />
        </pre>
      </div>
    );
  };

  const getGithubLink = (m: TMemberDetails) => {
    return (
      <div className={classNames.default(indent)}>
        <pre className="whitespace-pre-wrap break-all">
          <span className={defaultTextColor}>{`"github": `}</span>
          <span className={defaultTextColor}>{`"`}</span>
          <span className={m ? textColor : "text-instillGray30"}>
            {`${m ? m.githubLink : "https://github.com/???"}`}
          </span>
          <span className={defaultTextColor}>{`"`}</span>
        </pre>
      </div>
    );
  };

  const getAvatar = (m: TMemberDetails) => {
    return (
      <div className="w-full max-w-[360px]">
        <Image
          alt={`Instill member - ${m.name}'s avatar`}
          width={360}
          height={360}
          layout="responsive"
          src={m.avatarDesktop}
        />
      </div>
    );
  };

  return (
    <div
      className={classNames.default(
        "flex flex-col border-2 border-instillGray95 bg-instillGray95",
        styleName
      )}
    >
      <div className="text-instill-body bg-instillGray30 px-5 py-2.5 text-instillGray95">
        Detection result
      </div>
      <div className="border-t-2 border-instillGray95">
        {member ? (
          getAvatar(member)
        ) : (
          <MemberAvatarSkeletonSvg styleName="w-full max-w-[360px]" />
        )}
      </div>

      <div
        className={classNames.default(
          "flex flex-col p-5",
          defaultFont,
          defaultFontSize
        )}
      >
        {getMemberName(member)}
        <div className="text-instillRed">{`{`}</div>
        {getTitlesContainer(member)}
        {getLinkedinLink(member)}
        {getGithubLink(member)}
        <div className="text-instillRed">{`}`}</div>
      </div>
    </div>
  );
};
