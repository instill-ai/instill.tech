import cn from "clsx";

export type ThumbProps = {
  selected: boolean;
  onClick: () => void;
  imgSrc: string;
};

export const Thumb = ({ selected, onClick, imgSrc }: ThumbProps) => {
  return (
    <>
      <style jsx>
        {`
          .embla__slide__inner--thumb {
            touch-action: manipulation;
            cursor: pointer;
            border: 0;
            outline: 0;
            margin: 0;
            padding: 0;
            height: 150px;
            width: 100%;
            background-color: transparent;
            display: flex;
            overflow: hidden;
          }

          .embla__slide__thumbnail {
            margin: auto;
            transition: opacity 0.2s;
            object-fit: contain;
            height: 100%;
            width: 100%;
          }
        `}
      </style>
      <div
        className={cn(
          "z-0 min-w-[20%]",
          selected ? "opacity-80" : "opacity-20"
        )}
      >
        <button
          onClick={onClick}
          className="embla__slide__inner embla__slide__inner--thumb"
          type="button"
        >
          <img
            className="embla__slide__thumbnail"
            src={imgSrc}
            alt="A cool cat."
          />
        </button>
      </div>
    </>
  );
};
