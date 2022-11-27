import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cn from "clsx";
import {
  ElementPosition,
  getElementPosition,
  useWindowSize,
} from "@instill-ai/design-system";

import { MemberDetails, Nullable } from "@/types/instill";
import { useRouter } from "next/router";
import { MemberAvatarKernel } from "./MemberAvatarKernel";
import { MemberIntro } from "./MemberIntro";

export type OurMembersProps = {
  members: MemberDetails[];
  marginBottom?: string;
  width: string;
};

// 2022-11-25
// These codes need to be re-written to use useElementDimension hook
// And redesign the overall position handling

export const OurMembers = ({
  members,
  marginBottom,
  width,
}: OurMembersProps) => {
  const memberIntroBlockRef = useRef<HTMLDivElement>(null);
  const [sectionAdditionalHeight, setSectionAdditionalHeight] =
    useState<Nullable<number>>(null);

  // If openAllKernel === true, every member's avatar will be revealed.
  const [openAllKernel, setOpenAllKernel] = useState(false);
  const handleKernel = useCallback(() => {
    setOpenAllKernel(!openAllKernel);
  }, [openAllKernel]);

  // TargetMember's intro will be displayed at MemberIntroBlock, we will setTargetMember
  // once user hover on member's avatar. If it's on mobile view(width < 768px), the hover
  // behavior will be changed to click behavior to enhance user experience.

  const [targerMember, setTargetMember] =
    useState<Nullable<MemberDetails>>(null);
  const [targetPosition, setTagetPosition] =
    useState<Nullable<ElementPosition>>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerPosition, setContainerPosition] =
    useState<Nullable<ElementPosition>>(null);
  const windowSize = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady || !containerRef.current) {
      return;
    }
    setContainerPosition(getElementPosition(containerRef.current));
  }, [router, containerRef.current]);

  const membersRef = useMemo(
    () =>
      members.map((m) => {
        return { id: m.id, ref: createRef<Nullable<HTMLDivElement>>() };
      }),
    [members]
  );

  const onClickHandler = (memberId: string) => {
    const index = members.findIndex((e) => e.id === memberId);

    if (index === -1) {
      console.error("Target member not found");
      return;
    }

    setTargetMember(members[index]);

    if (windowSize && windowSize.width > 768) {
      return;
    }

    const refIndex = membersRef.findIndex((e) => e.id === memberId);

    if (
      !membersRef ||
      !membersRef[refIndex] ||
      !membersRef[refIndex].ref ||
      !membersRef[refIndex].ref.current
    ) {
      return;
    }

    const targetPosition = getElementPosition(
      membersRef[refIndex].ref.current as HTMLDivElement
    );

    setTagetPosition(targetPosition);
  };

  useEffect(() => {
    if (!targerMember) {
      return;
    }

    if (!targetPosition) {
      return;
    }

    if (!memberIntroBlockRef.current) {
      return;
    }

    // Calculate the distance between the edge of avatars and the edge of introBlock
    // We will fill this gap with space to push down content.

    const index = members.findIndex((e) => e.id === targerMember.id);

    // If user click the second row and we have total three row, this num = 1
    const leftAvatarBlock = members.length / 2 - Math.ceil((index + 1) / 2);

    const memberIntroBlockDimension = getElementPosition(
      memberIntroBlockRef.current
    );

    const coveredGap = leftAvatarBlock * 10;

    const paddingBottom = 16;

    let additionalHeight =
      memberIntroBlockDimension.height -
      targetPosition.height * leftAvatarBlock -
      coveredGap +
      paddingBottom;

    setSectionAdditionalHeight(additionalHeight);
  }, [targerMember, memberIntroBlockRef.current, members, targetPosition]);

  const onCancelHandler = useCallback(() => {
    setTargetMember(null);
    setSectionAdditionalHeight(null);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col bg-instillGrey90 px-4 pt-10 xl:px-0",
        {
          "pb-4": !targerMember,
        },
        marginBottom,
        width
      )}
    >
      <div className="mb-10 flex flex-col">
        <h2 className="instill-text-h2 mb-5 text-instillGrey05">Our Member</h2>
        <h3 className="instill-text-body text-instillGrey05">
          Click on the feature map to reveal the member&#39;s information, or
          <span
            className="cursor-pointer text-instillBlue50"
            onClick={handleKernel}
          >
            &nbsp;Click Here&nbsp;
          </span>
          to {openAllKernel ? "hide" : "expand"} them all.
        </h3>
      </div>
      <div
        ref={containerRef}
        className={cn(
          "relative flex flex-col md:grid md:grid-cols-5 md:gap-x-6 lg:grid-cols-3 lg:gap-x-10",
          { "mb-2.5": targerMember }
        )}
      >
        <div className="w-full md:col-span-3 lg:col-span-2">
          <div className="grid h-full w-full grid-cols-2 gap-2.5 md:gap-6 lg:gap-10">
            {members.map((m) => {
              const index = membersRef.findIndex((e) => e.id === m.id);
              return (
                <MemberAvatarKernel
                  ref={membersRef[index].ref}
                  key={m.id}
                  id={m.id}
                  kernelColor={m.kernelColor}
                  kernelColorRectLocation={m.kernelColorRectLocation}
                  avatarAlt={`Instill member - ${m.name}'s avatar with detection frame`}
                  avatarWithFrameDesktop={m.avatarWithFrameDesktop}
                  avatarWithFrameMobile={m.avatarWithFrameMobile}
                  onClickHandler={onClickHandler}
                  openKernel={openAllKernel}
                  targetMemberId={targerMember ? targerMember.id : null}
                />
              );
            })}
          </div>
        </div>
        <div
          className={cn(
            "absolute w-full md:static md:col-span-2 md:flex lg:col-span-1",
            {
              "invisible md:visible": !targerMember,
              "z-20": targerMember,
            }
          )}
          style={
            windowSize
              ? windowSize.width < 768
                ? {
                    top:
                      (targetPosition &&
                        containerPosition &&
                        `${
                          targetPosition.y -
                          containerPosition.y +
                          targetPosition.height +
                          10
                        }px`) ||
                      "",
                  }
                : {}
              : {}
          }
        >
          <MemberIntro
            ref={memberIntroBlockRef}
            indent="pl-4 md:pl-6"
            onCancelHandler={onCancelHandler}
            member={targerMember}
          />
        </div>
      </div>
      <div
        className="block"
        style={
          windowSize
            ? {
                height:
                  windowSize.width < 768
                    ? sectionAdditionalHeight
                      ? `${sectionAdditionalHeight}px`
                      : "0px"
                    : "0px",
              }
            : {}
        }
      />
    </div>
  );
};
