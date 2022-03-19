import { FC, Fragment } from "react";
import { TMemberDetails } from "../../../types/instill";
import * as classNames from "classnames";

interface Props {
  member: TMemberDetails;
  indent: string;
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

export const MemberIntroBlock: FC<Props> = ({ member, indent }) => {
  const titles = (
    <Fragment>
      {member.titles.map((title) => (
        <div
          key={`${member.id}-${title}`}
          className={classNames.default("flex flex-col", indent)}
        >
          <div className="">{`{`}</div>
          <div className={(classNames.default("flex flex-col"), indent)}>
            <pre>
              <div>{`"category": "${title}"`}</div>
            </pre>
            <pre>
              <div>{`"score": "${0.993}"`}</div>
            </pre>
          </div>
          <div className="">{`}`}</div>
        </div>
      ))}
    </Fragment>
  );

  const titlesContainer = (
    <div className={classNames.default("flex flex-col", indent)}>
      <pre>
        <div>{`titles: [`}</div>
      </pre>
      {titles}
      <pre>
        <div>{`]`}</div>
      </pre>
    </div>
  );

  const linkedin = (
    <div className={classNames.default(indent)}>
      <pre className="whitespace-pre-wrap break-all">
        {`"linkedin": `}
        <span>{`"${member.linkedinLink}"`}</span>
        <div />
      </pre>
    </div>
  );

  const github = (
    <div
      className={classNames.default("whitespace-pre-wrap, break-all", indent)}
    >
      <pre>
        <div>{`"github": "${member.githubLink}"`}</div>
      </pre>
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="">{`{`}</div>
      {titlesContainer}
      {linkedin}
      {github}
      <div className="">{`}`}</div>
    </div>
  );
};
