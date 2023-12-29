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
import * as React from "react";

export const Llama2Chat = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [article, setArticle] = React.useState<string>("");
  const [question, setQuestion] = React.useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await JumbotronSDK.llava7b({
      inputs: [
        {
          image: imagePreview ? imagePreview : "",
          question: question,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const sticker: string = apiResponse.data.outputs[0].answer;
      setArticle(sticker);
    } else {
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

  const handleFileChange = (
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
    const lamaChatFileInput = document.getElementById(
      "lamaChatFileInput"
    ) as HTMLInputElement | null;
    if (lamaChatFileInput) {
      lamaChatFileInput.value = ""; // This resets the input value
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
      <div className="px-6 pt-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Upload an image and ask a question about it and then see how LLaVa-7B
          magically answers you.
        </p>

        <div className="my-6 flex gap-x-4">
          <div className="w-4/5 space-y-2">
            <Input.Root className="my-auto w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="What is unusual about this image?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Input.Root>
          </div>
          <div className="w-1/5">
            {article ? (
              <SolidButton
                color="primary"
                type="button"
                position="my-auto w-full gap-x-2"
                onClickHandler={() => {
                  setArticle("");
                  handleDelete();
                }}
              >
                Reset
              </SolidButton>
            ) : (
              <SolidButton
                color="primary"
                type="button"
                position="my-auto w-full gap-x-2 py-[9px]"
                onClickHandler={() => {
                  handleGenrate();
                }}
              >
                Run
                {spinner ? (
                  <LoadingSpin />
                ) : (
                  <Icons.PlayCircle className="my-auto h-4 w-4 stroke-semantic-bg-primary" />
                )}
              </SolidButton>
            )}
          </div>
        </div>

        <div className="jumbotron-file-uploader flex items-center justify-center">
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
                <label htmlFor="lamaChatFileInput" className="block">
                  <div className="jumbotron-file-uploader my-auto cursor-pointer rounded border border-dashed bg-slate-50 text-center">
                    {imagePreview && (
                      <Icons.Trash01
                        onClick={(e) => {
                          e.preventDefault(); // Stop the event from bubbling up
                          handleDelete();
                        }}
                        className="relative top-1 h-10 w-10 stroke-red-500 p-2 text-white"
                      />
                    )}

                    {imagePreview ? (
                      <div className="mt-2 flex h-[350px] w-full flex-wrap overflow-auto">
                        <img
                          src={imagePreview}
                          className="my-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="cursor-pointer space-y-4 px-10 py-10">
                        <Icons.Upload01 className="mx-auto h-8 w-8 stroke-slate-500" />
                        <p className="mx-auto product-body-text-4-regular">
                          Drag-and-drop file, or{" "}
                          <span className="text-instillBlue50">
                            browse computer
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="lamaChatFileInput"
              onChange={(e) => handleFileChange(e)}
            />
          </React.Fragment>
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/admin/pipelines/jumbotron-visual-understanding/builder"
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
