import { LoadingSpin } from "@/components/ui";
import llava7b from "@/lib/jumbotron/llava7b";
import { Button, Icons, Input, toast } from "@instill-ai/design-system";
import { Nullable, useInstillForm } from "@instill-ai/toolkit";
import { ImageField } from "@instill-ai/toolkit/dist/lib/use-instill-form/components/start-operator-free-form-fields/ImageField";
import React, { useState } from "react";

export const Llama2Chat = () => {
  const [spinner, setSpinner] = useState(false);
  const [article, setArticle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await llava7b({
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
        <h3 className="my-auto product-body-text-1-semibold">Llama2-7B-chat</h3>
      </div>
      <div className="px-3 pt-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Create and inspire using the worlds fastest growing open source AI
          platform
        </p>

        <div className="my-6 flex gap-x-4">
          <div className="w-2/3 space-y-2">
            <Input.Root className="my-auto w-full">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Input.Root>
          </div>
          <div className="w-1/3">
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
                disabled={imagePreview && question ? false : true}
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
        </div>

        <div className="jumbotron-file-uploader flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <React.Fragment>
              {article ? (
                <div className="jumbotron-file-uploader w-full overflow-y-auto">
                  <pre className="flex w-full flex-1 items-center whitespace-pre-line break-all px-1.5 py-1 text-semantic-fg-primary product-body-text-4-regular">
                    {article}
                  </pre>
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
