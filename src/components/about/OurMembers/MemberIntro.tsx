import React, { forwardRef } from "react";
import { MemberDetails, Nullable } from "@/types/instill";
import Image from "next/image";
import cn from "clsx";
import { CrossIcon } from "@instill-ai/design-system";
import {
  setArrayKv,
  setColorJson,
  setNumberKv,
  setStringKv,
} from "@/lib/color-json";

export type MemberIntroProps = {
  member: Nullable<MemberDetails>;
  indent: string;
  styleName?: string;
  onCancelHandler: () => void;
};

export const MemberIntro = forwardRef<HTMLDivElement, MemberIntroProps>(
  ({ member, indent, styleName, onCancelHandler }, ref) => {
    let textColor: Nullable<string> = null;
    let bgColor: Nullable<string> = null;
    const defaultTextColor = "text-instillGrey05";
    const defaultFont = "font-mono";
    const defaultFontSize = "instill-text-small";
    const defaultIndent = "pl-6";

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

    const getAvatar = (m: MemberDetails) => {
      return (
        <div className="w-full">
          <Image
            alt={`Instill member - ${m.name}'s avatar`}
            style={{ width: "100%", height: "auto" }}
            width={360}
            height={360}
            src={m.avatarDesktop}
            sizes="360px"
          />
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full flex-col border-2 border-instillGrey90",
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
            <div className="text-instill-body mr-auto text-instillGrey95">
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

          <div className="w-full border-t-2 border-instillGrey95">
            {member ? (
              getAvatar(member)
            ) : (
              <Image
                src="/images/member-avatar-skeleton.svg"
                style={{ width: "100%", height: "auto" }}
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
                <React.Fragment>
                  <div className={defaultTextColor}>Open Roles</div>
                  {setColorJson({
                    id: "open-roles-json",
                    bracketColor: "text-instillRed",
                    indent: "",
                    trailingComma: false,
                    children: [
                      setStringKv({
                        id: "open-roles-mission",
                        key: "mission",
                        keyColor: defaultTextColor,
                        value:
                          "Make Al highly accessible to everyone. Join us and make a dent in the universe!",
                        valueColor: "text-[#FFDF3A]",
                        quoteColor: defaultTextColor,
                        colonColor: defaultTextColor,
                        trailingComma: true,
                        trailingCommaColor: defaultTextColor,
                        indent,
                        wrap: true,
                      }),
                      setArrayKv({
                        id: "open_roles_open_roles",
                        key: "open_role",
                        keyColor: defaultTextColor,
                        quoteColor: defaultTextColor,
                        colonColor: defaultTextColor,
                        bracketColor: "text-instillRed",
                        trailingComma: true,
                        trailingCommaColor: defaultTextColor,
                        indent: defaultIndent,
                        children: [
                          setColorJson({
                            id: `open-role-${member.openRoleLink}`,
                            bracketColor: "text-instillRed",
                            indent: defaultIndent,
                            trailingComma: false,
                            children: [
                              setStringKv({
                                id: `open-role-${member.openRoleLink}-title`,
                                key: "title",
                                keyColor: defaultTextColor,
                                value: member.openRoleTitle,
                                valueColor: "text-[#FFDF3A]",
                                quoteColor: defaultTextColor,
                                colonColor: defaultTextColor,
                                trailingComma: true,
                                trailingCommaColor: defaultTextColor,
                                indent,
                                wrap: true,
                              }),
                              setStringKv({
                                id: `open-role-${member.openRoleLink}-location`,
                                key: "location",
                                keyColor: defaultTextColor,
                                value: member.openRoleLocation,
                                valueColor: "text-[#FFDF3A]",
                                quoteColor: defaultTextColor,
                                colonColor: defaultTextColor,
                                trailingComma: true,
                                trailingCommaColor: defaultTextColor,
                                indent,
                                wrap: true,
                              }),
                              setStringKv({
                                id: `open-role-${member.openRoleLink}-type`,
                                key: "type",
                                keyColor: defaultTextColor,
                                value: member.openRoleType,
                                valueColor: "text-[#FFDF3A]",
                                quoteColor: defaultTextColor,
                                colonColor: defaultTextColor,
                                trailingComma: true,
                                trailingCommaColor: defaultTextColor,
                                indent,
                                wrap: true,
                              }),
                              setStringKv({
                                id: `open-role-${member.openRoleLink}-link`,
                                key: "link",
                                keyColor: defaultTextColor,
                                hyperlink: member.openRoleLink,
                                value: member.openRoleLink,
                                valueColor: "text-[#FFDF3A]",
                                quoteColor: defaultTextColor,
                                colonColor: defaultTextColor,
                                trailingComma: true,
                                trailingCommaColor: defaultTextColor,
                                indent,
                                wrap: true,
                              }),
                            ],
                          }),
                        ],
                        breakLine: false,
                        wrap: true,
                      }),
                    ],
                  })}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className={defaultTextColor}>{member.name}</div>
                  {setColorJson({
                    id: `${member.name}-json`,
                    bracketColor: "text-instillRed",
                    indent: "",
                    trailingComma: false,
                    children: [
                      setArrayKv({
                        id: `${member.name}-titles`,
                        key: "titles",
                        keyColor: defaultTextColor,
                        quoteColor: defaultTextColor,
                        colonColor: defaultTextColor,
                        bracketColor: defaultTextColor,
                        trailingComma: true,
                        trailingCommaColor: defaultTextColor,
                        indent: defaultIndent,
                        children: [
                          member.titles.map((title) =>
                            setColorJson({
                              id: `${member.name}-titles-${title}`,
                              bracketColor: "text-instillRed",
                              indent: defaultIndent,
                              trailingComma: true,
                              trailingCommaColor: defaultTextColor,
                              children: [
                                setStringKv({
                                  id: `${member.name}-titles-${title}-category`,
                                  key: "category",
                                  keyColor: defaultTextColor,
                                  value: title,
                                  valueColor: textColor || defaultTextColor,
                                  quoteColor: defaultTextColor,
                                  colonColor: defaultTextColor,
                                  trailingComma: true,
                                  trailingCommaColor: defaultTextColor,
                                  indent,
                                  wrap: true,
                                }),
                                setNumberKv({
                                  id: `${member.name}-titles-${title}-score`,
                                  key: "score",
                                  keyColor: defaultTextColor,
                                  value:
                                    Math.round(
                                      (Math.random() * (0.999 - 0.95) + 0.95) *
                                        1e3
                                    ) / 1e3,
                                  valueColor: textColor || defaultTextColor,
                                  quoteColor: defaultTextColor,
                                  colonColor: defaultTextColor,
                                  trailingComma: true,
                                  trailingCommaColor: defaultTextColor,
                                  indent,
                                  wrap: true,
                                }),
                              ],
                            })
                          ),
                        ],
                        breakLine: false,
                        wrap: true,
                      }),
                      setStringKv({
                        id: `${member.name}-linkedin`,
                        key: "linkedin",
                        keyColor: defaultTextColor,
                        hyperlink: member.linkedinLink,
                        value: member.linkedinLink,
                        valueColor: textColor,
                        quoteColor: defaultTextColor,
                        colonColor: defaultTextColor,
                        trailingComma: true,
                        trailingCommaColor: defaultTextColor,
                        indent,
                        wrap: true,
                      }),
                      setStringKv({
                        id: `${member.name}-github`,
                        key: "github",
                        keyColor: defaultTextColor,
                        hyperlink:
                          member.githubLink === "N/A"
                            ? undefined
                            : member.githubLink,
                        value: member.githubLink,
                        valueColor: textColor,
                        quoteColor: defaultTextColor,
                        colonColor: defaultTextColor,
                        trailingComma: true,
                        trailingCommaColor: defaultTextColor,
                        indent,
                        wrap: true,
                      }),
                    ],
                  })}
                </React.Fragment>
              )
            ) : (
              <React.Fragment>
                <div className={defaultTextColor}>No Detection</div>
                {setColorJson({
                  id: "no-detection-json",
                  bracketColor: "text-instillRed",
                  indent: "",
                  trailingComma: false,
                  children: [
                    setArrayKv({
                      id: "no-detection-title",
                      key: "titles",
                      keyColor: defaultTextColor,
                      quoteColor: defaultTextColor,
                      colonColor: defaultTextColor,
                      bracketColor: defaultTextColor,
                      trailingComma: true,
                      trailingCommaColor: defaultTextColor,
                      indent: defaultIndent,
                      children: [
                        titlesSkeleton.map((title, i) =>
                          setColorJson({
                            id: `no-detection-title-${i}`,
                            bracketColor: "text-instillRed",
                            indent: defaultIndent,
                            trailingComma: true,
                            trailingCommaColor: defaultTextColor,
                            children: [
                              setStringKv({
                                id: `no-detection-title-${i}-category`,
                                key: "category",
                                keyColor: defaultTextColor,
                                value: title,
                                valueColor: defaultTextColor,
                                quoteColor: defaultTextColor,
                                colonColor: defaultTextColor,
                                trailingComma: true,
                                trailingCommaColor: defaultTextColor,
                                indent,
                                wrap: true,
                              }),
                              setStringKv({
                                id: `no-detection-title-${i}-score`,
                                key: "score",
                                keyColor: defaultTextColor,
                                value: "--",
                                valueColor: defaultTextColor,
                                quoteColor: defaultTextColor,
                                colonColor: defaultTextColor,
                                trailingComma: true,
                                trailingCommaColor: defaultTextColor,
                                indent,
                                wrap: true,
                              }),
                            ],
                          })
                        ),
                      ],
                      breakLine: false,
                      wrap: true,
                    }),
                    setStringKv({
                      id: "no-detection-linkedin",
                      key: "linkedin",
                      keyColor: defaultTextColor,
                      value: "N/A",
                      valueColor: defaultTextColor,
                      quoteColor: defaultTextColor,
                      colonColor: defaultTextColor,
                      trailingComma: true,
                      trailingCommaColor: defaultTextColor,
                      indent,
                      wrap: true,
                    }),
                    setStringKv({
                      id: "no-detection-github",
                      key: "github",
                      keyColor: defaultTextColor,
                      value: "N/A",
                      valueColor: defaultTextColor,
                      quoteColor: defaultTextColor,
                      colonColor: defaultTextColor,
                      trailingComma: true,
                      trailingCommaColor: defaultTextColor,
                      indent,
                      wrap: true,
                    }),
                  ],
                })}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
);

MemberIntro.displayName = "MemberIntro";
