import * as React from "react";

import { LoadingSpin } from "@/components/ui";
import { JumbotronSDK } from "@/lib/jumbotron-sdk";
import { Button, Icons, Input, toast } from "@instill-ai/design-system";
import { Nullable } from "@instill-ai/toolkit";

export const YOLOv7 = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [article, setArticle] = React.useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await JumbotronSDK.yolov7({
      inputs: [
        {
          image: imagePreview ? imagePreview : "",
        },
      ],
    });

    if (apiResponse.status === "success") {
      const result: string = apiResponse.data.outputs[0].draw;
      setArticle(result);
    } else {
      console.error("API Error:", apiResponse.error);
      toast({
        title: "Error!",
        description: apiResponse.error,
        size: "large",
        variant: "alert-error",
      });
      setArticle("");
    }
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImagePreview(result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setImagePreview(null);
    // Reset file input value to allow selecting the same file again
    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = ""; // This resets the input value
    }
  };

  return (
    <div className="jumbotron-card border bg-white">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">YOLOv7</h3>
      </div>
      <div className="px-3 pt-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Create and inspire using the worlds fastest growing open source AI
          platform
        </p>

        <div className="my-6 flex gap-x-4">
          {article ? (
            <Button
              variant="primary"
              size="md"
              className="my-auto w-full gap-x-2"
              onClick={() => {
                setArticle("");
                handleDelete();
              }}
            >
              Reset
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              className="my-auto w-full gap-x-2"
              onClick={() => {
                handleGenrate();
              }}
              disabled={imagePreview ? false : true}
            >
              Generate
              {spinner ? (
                <LoadingSpin />
              ) : (
                <Icons.Play className="h-5 w-5 stroke-semantic-bg-primary" />
              )}
            </Button>
          )}
        </div>

        <div className="jumbotron-file-uploader flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <React.Fragment>
              {article ? (
                <div className="flex w-full flex-wrap">
                  <img src={article} className="my-auto object-contain" />
                </div>
              ) : (
                <div className="w-full space-y-3">
                  <div className="jumbotron-file-uploader my-auto cursor-pointer rounded border border-dashed bg-slate-50 text-center">
                    {imagePreview && (
                      <Icons.Trash01
                        onClick={() => handleDelete()}
                        className="relative top-1 h-10 w-10 stroke-red-500 p-2 text-white"
                      />
                    )}

                    {imagePreview ? (
                      <div className="p-5">
                        <img
                          src={imagePreview}
                          alt="Image Preview"
                          className="mx-auto h-[370px]"
                        />
                      </div>
                    ) : (
                      <label
                        htmlFor="fileInput"
                        className="flex cursor-pointer flex-col"
                      >
                        <div className="cursor-pointer space-y-4 px-10 py-10">
                          <Icons.Upload01 className="mx-auto h-8 w-8 stroke-slate-500" />
                          <p className="mx-auto product-body-text-4-regular">
                            Drag-and-drop file, or browse computer
                          </p>
                        </div>
                      </label>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="fileInput"
                      onChange={(e) => handleFileChange(e)}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/admin/pipelines/jumbotron-yolov7/builder"
            target="_blank"
            className="absolute bottom-8 right-8 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500"
          >
            <svg
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"></path>
              <path d="M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"></path>
            </svg>
            Build Your Own
          </a>
        </div>
      </div>
    </div>
  );
};
