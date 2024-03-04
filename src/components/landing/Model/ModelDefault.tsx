import React from "react";

function ModelDefault({ count }: { count: number }) {
  return (
    <React.Fragment>
      {[...new Array(count)].map((e) => (
        <div
          className="inline-flex items-start justify-start border border-[#CBD2E1]"
          key={`model-key-${e}`}
        >
          <div className="relative h-full w-8 bg-[#FFF1D6]" />
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-between self-stretch px-5 py-2.5">
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="my-auto flex items-center justify-center border-[#E1E6EF]">
                  <div className="h-6 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                </div>

                <div className="h-6 w-40 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              </div>
              <div className="inline-flex items-center justify-start py-1">
                <div className="h-6 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              </div>
              <div className="space-y-2 self-stretch font-sans text-base font-normal leading-7 text-semantic-fg-secondary">
                <div className="h-4 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                <div className="h-4 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
              </div>
            </div>
            <div className="mt-5 inline-flex items-end justify-end gap-x-5 self-stretch">
              <div className="flex items-center justify-start gap-5 bg-white bg-opacity-0 p-1 opacity-80">
                <div className="flex items-center justify-start gap-x-2">
                  <div className="h-5 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                  <div className="h-5 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-5 bg-white bg-opacity-0 p-1 opacity-80">
                <div className="flex items-center justify-start gap-x-2">
                  <div className="h-5 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                  <div className="h-5 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ModelDefault;
