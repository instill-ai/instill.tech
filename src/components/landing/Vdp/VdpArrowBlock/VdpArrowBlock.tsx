import { ReactElement } from "react";

export type VdpArrowBlockProps = {
  padding?: string;
  icon: ReactElement;
  title: string;
  description: string;

  // Please input with hex color code
  color: string;
};

const VdpArrowBlock = ({
  icon,
  title,
  description,
  color,
}: VdpArrowBlockProps) => {
  return (
    <>
      <style jsx>{`
        .arrow-block {
          position: relative;
          width: 384px;
          height: 194px;
          background-color: ${color};
        }
        .arrow-block:after {
          content: "";
          position: absolute;
          top: 0px;
          left: 384px;
          width: 0;
          height: 0;
          border: 97px solid transparent;
          border-left: 65px solid ${color};
        }
      `}
      </style>
      <div className="arrow-block flex flex-row gap-x-[30px] py-5 pl-5">
        {icon}
        <div className="my-auto flex flex-col">
          <div className="font-instill text-2xl font-normal uppercase">
            {title}
          </div>
          <div className="font-sans text-lg font-normal">{description}</div>
        </div>
      </div>
    </>
  );
};

export default VdpArrowBlock;
