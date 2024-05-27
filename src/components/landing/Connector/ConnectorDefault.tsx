import React from "react";

function ConnectorDefault({ count }: { count: number }) {
  return (
    <React.Fragment>
      {[...new Array(count)].map((_, index) => (
        <div
          className="flex flex-col border border-[#CBD2E1] bg-opacity-80 backdrop-blur-sm"
          key={`connector-key-${index}`}
        >
          <div className="h-8 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
          <div className="min-h-[200px] px-5 py-2.5">
            <div className="flex flex-row gap-x-2">
              <div className="h-6 w-8 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              <span className="my-auto w-full font-sans text-[18px] font-semibold"></span>
              <div className="my-auto py-0.5">
                <div className="h-6 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              </div>
            </div>
            <div className="mt-2.5">
              <div className="h-6 w-24 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
            </div>
            <div className="mt-2.5 space-y-2 text-[16px] font-normal text-semantic-fg-secondary">
              <div className="h-4 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              <div className="h-4 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
            </div>
            <div className="mt-5 flex flex-row items-end space-x-5 text-semantic-fg-secondary">
              <div className="flex flex-row space-x-2">
                <div className="h-5 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                <div className="h-5 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              </div>
              <div className="flex flex-row space-x-1">
                <div className="h-5 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                <div className="h-5 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ConnectorDefault;
