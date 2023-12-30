import * as React from "react";

import { LoadingSpin } from "@/components/ui";
import { JumbotronSDK } from "@/lib/jumbotron-sdk";
import {
  Button,
  Icons,
  Input,
  SolidButton,
  toast,
} from "@instill-ai/design-system";
import { Nullable } from "@instill-ai/toolkit";
import { loadImageAndSetState, resizeImage } from "./Llama2Chat";

export const YOLOv7 = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [input, setInput] = React.useState<string>("");
  const [article, setArticle] = React.useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  const handleGenrate = async () => {
    setSpinner(true);

    const defaultImage = await loadImageAndSetState("/images/yolo-default.png");

    const apiResponse = await JumbotronSDK.yolov7({
      inputs: [
        {
          image: imagePreview ? imagePreview : defaultImage || "",
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

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    let file: File | null | undefined = null;

    if ("dataTransfer" in e) {
      // Handle drag-and-drop
      const dataTransfer = e.dataTransfer;
      if (dataTransfer.items) {
        // Use DataTransferItemList interface for modern browsers
        file = dataTransfer.items[0].getAsFile();
      } else {
        // Use legacy DataTransfer interface for older browsers
        file = dataTransfer.files[0];
      }
    } else {
      // Handle regular file input change
      const fileInput = e.target as HTMLInputElement;
      file = fileInput.files?.[0];
    }

    if (file) {
      try {
        const resizedBlob = await resizeImage(file);

        const reader = new FileReader();

        reader.onload = () => {
          const result = reader.result;
          if (typeof result === "string") {
            setImagePreview(result);
          }
        };

        reader.readAsDataURL(resizedBlob); // Use the resizedBlob here instead of the original file
      } catch (error) {
        console.error("Error resizing image:", error);
      }
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

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileChange(e);
  };

  return (
    <div className="jumbotron-card border bg-white">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">
          Object Detection
        </h3>
      </div>
      <div className="px-6">
        <p className="pt-4 text-sm text-zinc-500 dark:text-zinc-600">
          Share an image URL for object detection.
        </p>

        <div className="my-[18px] flex flex-row gap-x-2">
          <div className="w-3/5 xl:w-4/5">
            {/* <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="Enter image URL"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Input.Root> */}
          </div>
          <div className="w-2/5 xl:w-1/5">
            {/* {article ? ( */}
            {/* <SolidButton
                color="primary"
                position="my-auto w-full gap-x-2 justify-center !py-[9px]"
                type="button"
                onClickHandler={() => {
                  setArticle("");
                  handleDelete();
                }}
              >
                Reset
              </SolidButton> */}
            {/* ) : ( */}
            <SolidButton
              position="my-auto w-full gap-x-2 flex justify-center item-center py-[9px]"
              color="primary"
              onClickHandler={() => {
                // if (imagePreview) {
                handleGenrate();
                // }
              }}
              type="button"
            >
              Run
              {spinner ? (
                <div className="my-auto h-4 w-4">
                  <LoadingSpin className="!h-4 !w-4" />
                </div>
              ) : (
                <Icons.PlayCircle className="my-auto h-4 w-4 stroke-semantic-bg-primary" />
              )}
            </SolidButton>
            {/* )} */}
          </div>
        </div>

        <div className="jumbotron-file-uploader flex flex-col items-center justify-center">
          <React.Fragment>
            {article ? (
              <div className="jumbotron-file-uploader flex w-full flex-wrap overflow-auto">
                <img src={article} className="my-auto object-contain" />
              </div>
            ) : (
              <div
                className="w-full space-y-3"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <label htmlFor="fileInput" className="block">
                  <div className="jumbotron-file-uploader my-auto cursor-pointer bg-slate-50 text-center">
                    {/* {imagePreview && (
                      <Icons.Trash01
                        onClick={(e) => {
                          e.preventDefault(); // Stop the event from bubbling up
                          handleDelete();
                        }}
                        className="relative top-1 h-10 w-10 stroke-red-500 p-2 text-white"
                      />
                    )} */}

                    {/* {imagePreview ? ( */}
                    <div className="jumbotron-file-uploader flex w-full flex-wrap overflow-auto">
                      <img
                        src={
                          imagePreview
                            ? imagePreview
                            : "/images/yolo-default.png"
                        }
                        className="my-auto object-contain"
                      />
                    </div>
                    {/* ) : ( */}
                    {/* <div className="cursor-pointer space-y-4 px-10 py-10">
                        <Icons.Upload01 className="mx-auto h-8 w-8 stroke-slate-500" />
                        <p className="mx-auto product-body-text-4-regular">
                          Drag-and-drop file, or{" "}
                          <span className="text-instillBlue50">
                            browse computer
                          </span>
                        </p>
                      </div> */}
                    {/* )} */}
                  </div>
                </label>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileInput"
              onChange={(e) => handleFileChange(e)}
            />
          </React.Fragment>
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/admin/pipelines/jumbotron-yolov7"
            target="_blank"
            className="absolute bottom-3 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500 xl:bottom-4"
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
