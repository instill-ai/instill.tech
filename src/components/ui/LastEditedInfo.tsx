import cn from "clsx";
import { CommitMeta } from "@/lib/github/type";
import * as React from "react";

export type LastEditedInfoProps = {
  meta: CommitMeta;
  marginBottom?: string;
};

export const LastEditedInfo = ({ meta, marginBottom }: LastEditedInfoProps) => {
  const { lastEditedTime, author, authorGithubUrl } = meta;

  return (
    <div className={cn("flex w-full flex-row gap-x-2", marginBottom)}>
      {lastEditedTime && author ? (
        <React.Fragment>
          <p className="ml-auto text-sm text-instillGrey70">
            {`Last updated: ${lastEditedTime}`}
          </p>
          <div className="flex flex-row gap-x-1 text-sm ">
            <p className="text-instillGrey70">by</p>
            <a
              className="text-semantic-accent-on-bg underline"
              href={authorGithubUrl || "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {author}
            </a>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};
