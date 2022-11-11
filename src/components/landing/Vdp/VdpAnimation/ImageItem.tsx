import cn from "clsx";

export type ImageItemProps = {
  width: string;
  height: string;
};

export const ImageItem = ({ width, height }: ImageItemProps) => {
  return (
    <svg
      width="26"
      height="45"
      viewBox="0 0 26 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(width, height)}
    >
      <g>
        <path
          d="M20.6215 38.3169L20.6202 20.3169L15.4236 11.3169L5.03125 5.31689L5.03306 29.3169L20.6215 38.3169Z"
          fill="#CFAE00"
          stroke="#2B2B2B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6944 31.3176L18.8905 34.3176L14.5599 24.8176L11.8641 27.6195L10.2299 24.3176L6.76615 27.3176L10.2303 29.3176L13.6944 31.3176Z"
          fill="#2B2B2B"
        />
        <circle
          r="1.5"
          transform="matrix(0.866025 0.5 7.53359e-05 1 8.93001 19.0679)"
          fill="#2B2B2B"
        />
      </g>
    </svg>
  );
};
