import { FC, useCallback, useState } from "react";
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
  const [targerMember, setTargetMember] = useState<TMemberDetails>(null);
  const [openAllKernel, setOpenAllKernel] = useState(false);

  const handleKernel = useCallback(() => {
    console.log(openAllKernel);
    setOpenAllKernel(!openAllKernel);
  }, [openAllKernel]);

  const onMouseEnterHandler = useCallback((memberId: string) => {
    const index = members.findIndex((e) => e.id === memberId);
    console.log(memberId);

    if (index === -1) {
      return;
    }

    setTargetMember(members[index]);
  }, []);

  const onMouseLeaveHandler = useCallback(() => {
    console.log("remove");
    setTargetMember(null);
  }, []);

  return (
    <div className={classNames.default("flex flex-col py-10", styleName)}>
      <div className="mb-10 flex flex-col">
        <h2 className="instill-text-h2 mb-5">Our Member</h2>
        <h3 className="instill-text-body">
          Hovering on the moving kernel to reveal the member&#39;s information,
          or
          <span
            className="cursor-pointer text-instillBlue30"
            onClick={handleKernel}
          >
            &nbsp;Click Here&nbsp;
          </span>
          to {openAllKernel ? "hide" : "expand"} them all.
        </h3>
      </div>
      <div className="relative grid-cols-3 gap-x-10 md:grid">
        <div className="col-span-2 grid-cols-2 gap-x-10 gap-y-10 md:grid">
          {members.map((member) => (
            <MemberAvatarKernelBlock
              key={member.id}
              id={member.id}
              kernelColor={member.kernelColor}
              kernelColorRectLocation={member.kernelColorRectLocation}
              avatarAlt={`Instill member - ${member.name}'s avatar with detection frame`}
              avatarWithFrameDesktop={member.avatarWithFrameDesktop}
              avatarWithFrameMobile={member.avatarWithFrameMobile}
              onMouseEnterHandler={onMouseEnterHandler}
              onMouseLeaveHandler={onMouseLeaveHandler}
              openKernel={openAllKernel}
            />
          ))}
        </div>
        <div className="col-span-1">
          <MemberIntroBlock
            styleName="sticky top-[164px]"
            indent="pl-12"
            member={targerMember}
          />
        </div>
      </div>
    </div>
  );
};
