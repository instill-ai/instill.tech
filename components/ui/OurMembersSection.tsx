import {
  createRef,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as classNames from "classnames";

import { TMemberDetails } from "../../types/instill";
import { MemberAvatarKernelBlock } from "./blocks/MemberAvatarKernelBlock";
import { MemberIntroBlock } from "./blocks/MemberIntroBlock";
import { useWindowDimension } from "../../useWindowDimension";
import { ElementPosition, getElementPosition } from "../../lib/utilities";
import { useRouter } from "next/router";

interface Props {
  /** <Tailwind config> */
  styleName: string;

  members: TMemberDetails[];
}

export const OurMembersSection: FC<Props> = ({ members, styleName }) => {
  // If openAllKernel === true, every member's avatar will be revealed.
  const [openAllKernel, setOpenAllKernel] = useState(false);
  const handleKernel = useCallback(() => {
    setOpenAllKernel(!openAllKernel);
  }, [openAllKernel]);

  // TargetMember's intro will be displayed at MemberIntroBlock, we will setTargetMember
  // once user hover on member's avatar. If it's on mobile view(width < 768px), the hover
  // behavior will be changed to click behavior to enhance user experience.

  const [targerMember, setTargetMember] = useState<TMemberDetails>(null);
  const [targetPosition, setTagetPosition] = useState<ElementPosition>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerPosition, setContainerPosition] =
    useState<ElementPosition>(null);
  const windowDimenstion = useWindowDimension();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    setContainerPosition(getElementPosition(containerRef.current));
  }, [router]);

  const onMouseEnterHandler = useCallback(
    (memberId: string) => {
      if (windowDimenstion && windowDimenstion.width < 768) {
        return;
      }

      const index = members.findIndex((e) => e.id === memberId);

      if (index === -1) {
        console.error("Target member not found");
        return;
      }

      setTargetMember(members[index]);
    },
    [windowDimenstion, members]
  );

  const onMouseLeaveHandler = useCallback(() => {
    if (windowDimenstion && windowDimenstion.width < 768) {
      return;
    }
    setTargetMember(null);
  }, [windowDimenstion]);

  const membersRef = useMemo(
    () =>
      members.map((m) => {
        return { id: m.id, ref: createRef<HTMLDivElement>() };
      }),
    [members]
  );

  const onClickHandler = useCallback(
    (memberId: string) => {
      if (windowDimenstion && windowDimenstion.width >= 768) {
        return;
      }
      const index = members.findIndex((e) => e.id === memberId);

      if (index === -1) {
        console.error("Target member not found");
        return;
      }

      setTargetMember(members[index]);

      const refIndex = membersRef.findIndex((e) => e.id === memberId);

      setTagetPosition(getElementPosition(membersRef[refIndex].ref.current));
    },
    [windowDimenstion, members, membersRef]
  );

  const onCancelHandler = useCallback(() => {
    setTargetMember(null);
  }, []);

  return (
    <div
      className={classNames.default(
        "flex flex-col py-10 px-4 md:px-0",
        styleName
      )}
    >
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
      <div
        ref={containerRef}
        className="relative flex flex-col md:grid md:grid-cols-5 md:gap-x-6 lg:grid-cols-3 lg:gap-x-10"
      >
        <div className="flex w-full md:col-span-3 lg:col-span-2">
          <div className="grid w-full grid-cols-2 gap-x-2.5 gap-y-2.5 md:gap-x-6 md:gap-y-6 lg:gap-x-10 lg:gap-y-10">
            {members.map((m) => {
              const index = membersRef.findIndex((e) => e.id === m.id);
              return (
                <MemberAvatarKernelBlock
                  ref={membersRef[index].ref}
                  key={m.id}
                  id={m.id}
                  kernelColor={m.kernelColor}
                  kernelColorRectLocation={m.kernelColorRectLocation}
                  avatarAlt={`Instill member - ${m.name}'s avatar with detection frame`}
                  avatarWithFrameDesktop={m.avatarWithFrameDesktop}
                  avatarWithFrameMobile={m.avatarWithFrameMobile}
                  onMouseEnterHandler={onMouseEnterHandler}
                  onMouseLeaveHandler={onMouseLeaveHandler}
                  onClickHandler={onClickHandler}
                  openKernel={openAllKernel}
                />
              );
            })}
          </div>
        </div>
        <div
          className={classNames.default(
            "absolute w-full md:static md:col-span-2 md:flex lg:col-span-1",
            {
              hidden: !targerMember,
              "z-20": targerMember,
            }
          )}
          style={{
            top:
              targetPosition &&
              `${
                targetPosition.y -
                containerPosition.y +
                targetPosition.height +
                10
              }px`,
          }}
        >
          <MemberIntroBlock
            styleName="md:sticky md:top-[164px]"
            indent="pl-4 md:pl-6 xl:pl-8"
            onCancelHandler={onCancelHandler}
            member={targerMember}
          />
        </div>
      </div>
    </div>
  );
};
