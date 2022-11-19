import Link from "next/link";

export type CareerPageLinkProps = {
  hiring: boolean;
};

export const CareerPageLink = ({ hiring }: CareerPageLinkProps) => {
  return (
    <Link href="/career">
      <a className="group flex flex-row gap-x-[5px] py-1.5">
        <p className="my-auto text-instillGrey80 group-hover:text-instillBlue50">
          Career
        </p>
        {hiring && (
          <div>
            <p className="rounded-full border border-instillNatureGreen px-2.5 py-[2px] font-mono text-[10px] font-normal leading-[14px] text-instillNatureGreen">
              hiring
            </p>
          </div>
        )}
      </a>
    </Link>
  );
};
