import { useEffect } from "react";

export type MemberKernelProps = {
  /** <Tailwind config> */
  styleName?: string;

  /** Highlighted kernel rect position */
  kernelColorRectLocation: string[];

  /** Highlighted kernel rect color */
  kernelColor: string;

  /** member id */
  id: string;
};

const MemberKernel = ({
  styleName,
  kernelColorRectLocation,
  kernelColor,
  id,
}: MemberKernelProps) => {
  useEffect(() => {
    kernelColorRectLocation.forEach((e) => {
      const target = document.querySelector(
        `#kernel-${id}-${e}`
      ) as SVGPathElement;
      target.style.fill = kernelColor;
    });
  }, [kernelColorRectLocation, id, kernelColor]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 362 362"
      fill="none"
      className={styleName}
    >
      <g id="Frame 788">
        <g id="Kernel">
          <path
            id={`kernel-${id}-1`}
            d="M71.6908 -1H-1V71.6908H71.6908V-1Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-2`}
            d="M143.654 -1H71.6904V71.6908H143.654V-1Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-3`}
            d="M216.345 -1H143.654V71.6908H216.345V-1Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-4`}
            d="M288.31 -1H216.346V71.6908H288.31V-1Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-5`}
            d="M361 -1H288.309V71.6908H361V-1Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-6`}
            d="M71.6908 71.6907H-1V143.655H71.6908V71.6907Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-7`}
            d="M143.654 71.6907H71.6904V143.655H143.654V71.6907Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-8`}
            d="M216.345 71.6907H143.654V143.655H216.345V71.6907Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-9`}
            d="M288.31 71.6907H216.346V143.655H288.31V71.6907Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-10`}
            d="M361 71.6907H288.309V143.655H361V71.6907Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-11`}
            d="M71.6908 143.655H-1V216.345H71.6908V143.655Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-12`}
            d="M143.654 143.655H71.6904V216.345H143.654V143.655Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-13`}
            d="M216.345 143.655H143.654V216.345H216.345V143.655Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-14`}
            d="M288.31 143.655H216.346V216.345H288.31V143.655Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-15`}
            d="M361 143.655H288.309V216.345H361V143.655Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-16`}
            d="M71.6908 216.345H-1V288.309H71.6908V216.345Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-17`}
            d="M143.654 216.345H71.6904V288.309H143.654V216.345Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-18`}
            d="M216.345 216.345H143.654V288.309H216.345V216.345Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-19`}
            d="M288.31 216.345H216.346V288.309H288.31V216.345Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-20`}
            d="M361 216.345H288.309V288.309H361V216.345Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-21`}
            d="M71.6908 288.309H-1V361H71.6908V288.309Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-22`}
            d="M143.654 288.309H71.6904V361H143.654V288.309Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-23`}
            d="M216.345 288.309H143.654V361H216.345V288.309Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-24`}
            d="M288.31 288.309H216.346V361H288.31V288.309Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            id={`kernel-${id}-25`}
            d="M361 288.309H288.309V361H361V288.309Z"
            fill="#F7F7F7"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </g>
      </g>
      <rect
        x="1"
        y="1"
        width="360"
        height="360"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
    </svg>
  );
};

export default MemberKernel;
