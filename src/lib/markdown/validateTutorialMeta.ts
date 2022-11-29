import { TutorialMeta } from "@/types/instill";

type PartialTutorialMeta = Omit<TutorialMeta, "commit">;

export const validateTutorialMeta = (
  path: string,
  data: { [key: string]: any }
): PartialTutorialMeta => {
  // Validate whether tutorial have necessary fields - title
  if (!data.hasOwnProperty("title")) {
    throw new Error(
      `Error occured when generate tutorials - missing title field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - lang
  if (!data.hasOwnProperty("lang")) {
    throw new Error(
      `Error occured when generate tutorials - missing lang field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - description
  if (!data.hasOwnProperty("description")) {
    throw new Error(
      `Error occured when generate tutorials - missing description field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - cv_task
  if (!data.hasOwnProperty("cv_task")) {
    throw new Error(
      `Error occured when generate tutorials - missing cv_task field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - source_connector
  if (!data.hasOwnProperty("source_connector")) {
    throw new Error(
      `Error occured when generate tutorials - missing source_connector field at ${path}`
    );
  }

  // Validate whether tutorial have necessary fields - destination_connector
  if (!data.hasOwnProperty("destination_connector")) {
    throw new Error(
      `Error occured when generate tutorials - missing destination_connector field at ${path}`
    );
  }

  // Validate the cv_task types
  const supportCvTasks = [
    "object_detection",
    "ocr",
    "image_classification",
    "instance_segmentation",
    "keypoint_detection",
    "object_detection",
    "semantic_segmentation",
  ];

  if (!supportCvTasks.includes(data.cv_task)) {
    throw new Error(
      `Error occured when generate tutorials - wrong cv_task at ${path}, expect ${supportCvTasks.join(
        ", "
      )}. Found ${data.cv_task}`
    );
  }

  return data as PartialTutorialMeta;
};
