import { GitHubIcon } from "@instill-ai/design-system";
import { useState } from "react";

export type TutorialPublishInfoProps = {
  author: string;
  authorAvatarSrc: string;
  publishedOn: string;
};

export const TutorialPublishInfo = ({
  author,
  authorAvatarSrc,
  publishedOn,
}: TutorialPublishInfoProps) => {
  const [authorAvatarIsError, setAuthorAvatarIsError] = useState(false);

  return (
    <div className="flex flex-row gap-x-1">
      {authorAvatarIsError ? (
        <GitHubIcon
          color="fill-instillGrey50"
          width="w-5"
          height="h-5"
          position="my-auto"
        />
      ) : (
        <img
          src={authorAvatarSrc}
          alt={`${author}'s github avatar`}
          className="my-auto h-5 w-5 rounded-full object-cover"
          onError={() => {
            setAuthorAvatarIsError(true);
          }}
        />
      )}
      <p className="text-base font-normal text-instillGrey70">
        {`Published by ${author} on ${new Date(
          publishedOn
        ).toLocaleDateString()}`}
      </p>
    </div>
  );
};