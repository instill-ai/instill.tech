import cn from "clsx";

export type VideoItemProps = {
  width: string;
  height: string;
};

export const VideoItem = ({ width, height }: VideoItemProps) => {
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
          fill="#F1CA00"
          stroke="#2B2B2B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4251 23.3167L7.63086 18.8167L7.63139 25.8167L15.4256 30.3167L15.4254 27.4417L18.0236 30.8167L18.0232 25.8167L15.4253 26.1917L15.4251 23.3167Z"
          fill="#2B2B2B"
        />
      </g>
    </svg>
  );
};
