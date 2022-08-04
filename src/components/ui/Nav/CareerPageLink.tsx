import Link from "next/link";

export type CareerPageLinkProps = {
  hiring: boolean;
};

const CareerPageLink = ({ hiring }: CareerPageLinkProps) => {
  return (
    <Link href="/career">
      <a className="flex flex-row gap-x-[5px] py-1.5 group">
        <p className="my-auto text-instillGrey30 group-hover:text-instillGrey05">
          Career
        </p>
        {hiring && (
          <div>
            <p className="rounded-full border border-instillYellow px-2.5 py-[2px] font-mono text-[10px] font-normal leading-[14px] text-instillGrey30 group-hover:text-instillYellow">
              hiring
            </p>
          </div>
        )}
      </a>
    </Link>
  );
};

export default CareerPageLink;
