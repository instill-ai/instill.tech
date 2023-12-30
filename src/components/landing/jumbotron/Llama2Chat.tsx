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

export function resizeImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const maxWidth = 600;
        const maxHeight = 600;

        let newWidth = img.width;
        let newHeight = img.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (img.width > maxWidth) {
          newWidth = maxWidth;
          newHeight = (img.height * maxWidth) / img.width;
        }

        if (img.height > maxHeight) {
          newHeight = maxHeight;
          newWidth = (img.width * maxHeight) / img.height;
        }

        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;

        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, newWidth, newHeight);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Error creating blob"));
            }
          },
          file.type,
          1
        );
      };

      img.onerror = () => {
        reject(new Error("Error loading image"));
      };
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };

    reader.readAsDataURL(file);
  });
}

export const loadImageAndSetState = async (
  imageUrlPath: string
): Promise<string> => {
  try {
    // If imageUrlPath is already a string, return it directly
    // if (typeof imageUrlPath === "string") {
    //   return imageUrlPath;
    // }

    // If imageUrlPath is a Promise, wait for it to resolve
    const resolvedUrlPath = await imageUrlPath;

    // Fetch the image as a blob
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + resolvedUrlPath
    );
    const blob = await response.blob();
    // Convert the blob to a data URL
    const dataUrl = await convertBlobToDataUrl(blob);

    return dataUrl;
  } catch (error) {
    console.error("Error loading image:", error);
    return ""; // Return an empty string in case of an error
  }
};

export const convertBlobToDataUrl = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject(new Error("Failed to convert blob to data URL."));
      }
    };
    reader.readAsDataURL(blob);
  });
};

const defaultAnswer = `
The unusual aspect of this image is that a man is standing on a folding table that is strapped to the back of a yellow taxi, ironing clothes. It is not common to see someone doing laundry in such an unconventional setting, especially while in traffic. The presence of a taxi and the man's position on the table make the scene quite peculiar and eye-catching, as it is not a typical scenario one would expect to see in everyday life.
`;

export const Llama2Chat = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [article, setArticle] = React.useState<string>("");
  const [question, setQuestion] = React.useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  const handleGenrate = async () => {
    setSpinner(true);

    const defaultImage = await loadImageAndSetState(
      "/images/llama-chat-default.png"
    );

    const apiResponse = await JumbotronSDK.llava7b({
      inputs: [
        {
          image: imagePreview ? imagePreview : defaultImage || "",
          prompt: question,
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
    const lamaChatFileInput = document.getElementById(
      "lamaChatFileInput"
    ) as HTMLInputElement | null;
    if (lamaChatFileInput) {
      lamaChatFileInput.value = ""; // This resets the input value
    }
    setArticle("");
    setQuestion("");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileChange(e);
  };

  return (
    <div className="jumbotron-card border bg-white xl:border-none">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">
          Visual Assistant
        </h3>
      </div>
      <div className="px-6">
        <p className="pt-4 text-sm text-zinc-500 dark:text-zinc-600">
          Upload an image, ask a question, and watch it provide magical answers.
        </p>

        <div className="my-[18px] flex gap-x-4">
          <div className="w-3/5 space-y-2 xl:w-4/5">
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
          <div className="w-2/5 xl:w-1/5">
            {/* {article ? ( */}
            {/* <SolidButton
                color="primary"
                type="button"
                position="my-auto w-full gap-x-2"
                onClickHandler={() => {
                  setArticle("");
                  handleDelete();
                }}
              >
                Reset
              </SolidButton> */}
            {/* ) : ( */}
            <SolidButton
              color="primary"
              type="button"
              position="my-auto w-full gap-x-2 py-[9px] flex justify-center"
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
            {/* )} */}
          </div>
        </div>

        <div className="jumbotron-file-uploader flex flex-col space-y-5">
          {/* <React.Fragment> */}

          {/* <React.Fragment> */}
          <div className="space-y-4">
            <div className="llama-chat-box w-full overflow-y-auto border">
              <pre className="flex w-full flex-1 items-center whitespace-pre-line break-all px-1.5 py-1 text-semantic-fg-primary product-body-text-4-regular">
                {article ? article : defaultAnswer}
              </pre>
            </div>
            {/* <div className="seo-image-box flex w-full flex-wrap overflow-auto border">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        className="my-auto object-contain"
                      />
                    ) : null}
                  </div> */}
          </div>
          {/* </React.Fragment> */}
          {/* ) : null} */}
          {/* ( */}
          <div
            className="w-full space-y-3"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <label htmlFor="lamaChatFileInput" className="block">
              {/* {imagePreview ? (
                  <div className="seo-image-box flex w-full flex-wrap overflow-auto border">
                    <img
                      src={imagePreview}
                      className="my-auto object-contain"
                    />
                  </div>
                ) : null} */}

              <div className="llama-chat-image-box my-auto cursor-pointer text-center">
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
                <div className="llama-chat-image-box flex w-full flex-wrap overflow-auto">
                  <img
                    src={
                      imagePreview
                        ? imagePreview
                        : "/images/llama-chat-default.png"
                    }
                    alt="SEO Image"
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
          {/* )} */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="lamaChatFileInput"
            onChange={(e) => handleFileChange(e)}
          />
          {/* </React.Fragment> */}
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/admin/pipelines/jumbotron-visual-understanding"
            target="_blank"
            className="absolute bottom-4 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500 xl:bottom-6"
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
