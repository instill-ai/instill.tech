import { FC } from "react";
import { TMemberDetails } from "../../types/instill";
import { MemberAvatarKernelBlock } from "./blocks/MemberAvatarKernelBlock";
import * as classNames from "classnames";
import { MemberIntroBlock } from "./blocks/MemberIntroBlock";

interface Props {
  /** <Tailwind config> */
  styleName: string;

  members: TMemberDetails[];
}

export const OurMembersSection: FC<Props> = ({ members, styleName }) => {
  return (
    <div className={classNames.default("flex flex-col py-10", styleName)}>
      <div className="mb-10 flex flex-col">
        <h2 className="instill-text-h2">Our Member</h2>
        <h3 className="instill-text-h3-light">
          Hovering on the moving kernel to reveal the member&#39;s information,
          or Click Here to expand them all.
        </h3>
      </div>
      <div className="grid-cols-3 gap-x-10 md:grid">
        <div className="col-span-2 grid-cols-2 gap-x-10 gap-y-10 md:grid">
          {members.map((member) => (
            <MemberAvatarKernelBlock
              key={member.id}
              kernelColor={member.kernelColor}
              kernelColorCubeLocation={member.kernelColorCubeLocation}
              avatarAlt={`Instill member - ${member.name}'s avatar`}
              avatarWithFrameDesktop={member.avatarWithFrameDesktop}
              avatarWithFrameMobile={member.avatarWithFrameMobile}
            />
          ))}
        </div>
        <div className="col-span-1">
          <MemberIntroBlock indent="pl-12" member={members[0]} />
        </div>
      </div>
    </div>
  );
};
