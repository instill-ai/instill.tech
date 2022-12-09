export type ContributeLinksProps = {
  githubEditUrl: string;
};

export const ContributeLinks = ({ githubEditUrl }: ContributeLinksProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 font-semibold text-instillGrey95 dark:text-instillGrey15">
        Contribution
      </h2>
      <a
        href={githubEditUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-row gap-x-2.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="my-auto h-4 w-4 fill-instillGrey50 group-hover:fill-instillBlue50"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
        <p className="my-auto text-sm text-instillGrey50 group-hover:text-instillBlue50">
          Edit this page
        </p>
      </a>
    </div>
  );
};
