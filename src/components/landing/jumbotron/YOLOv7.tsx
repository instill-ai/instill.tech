import * as React from "react";

import { LoadingSpin } from "@/components/ui";
import { JumbotronSDK } from "@/lib/jumbotron-sdk";
import {
  Icons,
  Input,
  SolidButton,
  toast,
  Nullable,
} from "@instill-ai/design-system";
import { resizeImage } from "./Llama2Chat";
import { useSwiper } from "swiper/react";

async function resizeBase64Image(
  base64: string,
  maxWidth = 600,
  maxHeight = 600
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const img = new Image();

    // Set the source of the image to the base64 string
    img.src = base64;

    // When the image has loaded
    img.onload = () => {
      // Calculate the new dimensions
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;

        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      }

      // Create a canvas element
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Check if context is available
      if (!ctx) {
        reject(new Error("Unable to get 2D context"));
        return;
      }

      // Set the canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, width, height);

      // Get the resized image as a base64 string
      const resizedBase64 = canvas.toDataURL("image/jpeg");

      // Resolve with the resized base64 string
      resolve(resizedBase64);
    };

    // If there's an error loading the image, reject the promise
    img.onerror = () => {
      reject(new Error("Error loading image"));
    };
  });
}

export const YOLOv7 = () => {
  const swiper = useSwiper();
  const [spinner, setSpinner] = React.useState(false);
  const [input, setInput] = React.useState<string>("");
  const [, setArticle] = React.useState<string>("");
  const [imagePreview, setImagePreview] =
    React.useState<Nullable<string>>(null);

  // async function imageUrlToBase64(imageUrl: string): Promise<string | null> {
  //   try {
  //     let imgSrc: string | undefined;

  //     // Check if the provided URL is a direct image link
  //     if (imageUrl.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
  //       imgSrc = imageUrl;
  //     } else {
  //       // Fetch the content of the URL
  //       const response = await axios.get(imageUrl);

  //       // Parse HTML content using cheerio
  //       const $ = cheerio.load(response.data);

  //       // Find the image tag and extract the source URL
  //       imgSrc = $("img").attr("src");

  //       if (!imgSrc) {
  //         console.error("No image source found on the page.");
  //         return null;
  //       }
  //     }

  //     // Fetch the image using axios
  //     const imageResponse = await axios.get(imgSrc, {
  //       responseType: "arraybuffer",
  //     });

  //     // Convert the image buffer to a base64 string
  //     const base64 = Buffer.from(imageResponse.data, "binary").toString(
  //       "base64"
  //     );

  //     return base64;
  //   } catch (error: any) {
  //     console.error("Error:", error.message);
  //     return null;
  //   }
  // }

  async function getBase64ImageFromUrl(imageUrl: string): Promise<string> {
    // try { // no-useless-catch
    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();

      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          function () {
            resolve(reader.result as string);
          },
          false
        );

        reader.onerror = () => {
          reject(reader.error);
        };

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Not able to parse image",
        size: "large",
        variant: "alert-error",
      });
      return "";
    }
    // } catch (error: any) {
    // Handle fetch or other errors here
    // throw error;
    // }
  }

  const handleGenrate = async () => {
    setSpinner(true);
    if (swiper) {
      swiper.autoplay.stop();
    }
    let imgString: string | null = "";
    // const defaultImage = await loadImageAndSetState("/images/yolo-default.png");
    if (input) {
      imgString = await getBase64ImageFromUrl(input);
    } else if (imagePreview) {
      imgString = imagePreview;
    } else {
      imgString = await getBase64ImageFromUrl("/images/yolo-default.png");
    }
    const resizeImage = await resizeBase64Image(imgString);

    const apiResponse = await JumbotronSDK.yolov7({
      inputs: [
        {
          image: resizeImage || "",
        },
      ],
    });

    if (apiResponse.status === "success") {
      const result: string = apiResponse.data.outputs[0].draw;
      setImagePreview(result);
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
            setInput("");
          }
        };

        reader.readAsDataURL(resizedBlob); // Use the resizedBlob here instead of the original file
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileChange(e);
  };

  return (
    <div className="jumbotron-card border bg-white xl:!border-none">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">
          Object Detection
        </h3>
      </div>
      <div className="px-6">
        <div className="flex flex-row pt-4">
          <div className="my-auto w-full pr-1">
            <p className="text-sm font-medium text-black dark:text-zinc-600 xl:text-[16px]">
              Share an image URL for object detection.
            </p>
          </div>
          <div className="flex items-start justify-end">
            <SolidButton
              position="w-full gap-x-2 flex justify-center item-center py-[9px]"
              color="primary"
              onClickHandler={() => {
                handleGenrate();
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
          </div>
        </div>

        <div className="my-[18px] flex flex-row gap-x-2">
          <div className="w-full">
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="Enter image URL"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="jumbotron-file-uploader flex flex-col items-center justify-center">
          <React.Fragment>
            <div
              className="w-full space-y-3"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <label htmlFor="fileInput" className="block">
                <div className="jumbotron-file-uploader my-auto cursor-pointer bg-slate-50">
                  <div className="jumbotron-file-uploader flex w-full flex-wrap items-center justify-center overflow-auto">
                    <img
                      src={
                        imagePreview ? imagePreview : "/images/yolo-default.png"
                      }
                      className="my-auto object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </label>
            </div>
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
            href="https://instill.tech/instill-wombat/pipelines/jumbotron-yolov7"
            target="_blank"
            className="absolute bottom-3 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm font-normal text-white no-underline drop-shadow-2xl backdrop-blur hover:text-blue-500 "
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
