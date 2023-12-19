import { LoadingSpin } from "@/components/ui";
import yolov7 from "@/lib/jumbotron/yolov7";
import { Button, Icons, Input } from "@instill-ai/design-system";
import { Nullable } from "@instill-ai/toolkit";
import React, { useState } from "react";

export const YOLOv7 = () => {
  const [spinner, setSpinner] = useState(false);
  const [article, setArticle] = useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await yolov7({
      inputs: [
        {
          image: imagePreview ? imagePreview : "",
        },
      ],
    });

    if (apiResponse.status === "success") {
      const result: string = apiResponse.data.outputs[0].result[0];
      setArticle(result);
    } else {
      console.error("API Error:", apiResponse.error);
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
                <div className="jumbotron-file-uploader w-full overflow-y-auto">
                  <pre>{JSON.stringify(article, null, 4)}</pre>
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
      </div>
    </div>
  );
};
