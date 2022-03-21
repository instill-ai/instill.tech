import axios from "axios";
import {
  TGetClickUpTasksQueryResponse,
  IClickUpTask,
  IClickUpImageAttatchmentValue,
} from "../types/clickUp";
import { TMemberDetails, TPositionDetails } from "../types/instill";

export const createClickUpApiClient = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_CLICKUP_API_URL,
    responseType: "json" as const,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_CLICKUP_API_KEY}`,
    },
  });
};

export const getClickUpListQuery = async (listId: string) => {
  try {
    const client = createClickUpApiClient();
    const res = await client.get(`/list/${listId}`);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const listClickUpTasksInListQuery = async (listId: string) => {
  try {
    const client = createClickUpApiClient();
    const res = await client.get<TGetClickUpTasksQueryResponse>(
      `/list/${listId}/task`
    );
    return Promise.resolve(res.data.tasks);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getClickUpTaskQuery = async (
  taskId: string
): Promise<IClickUpTask> => {
  try {
    const client = createClickUpApiClient();
    const res = await client.get<IClickUpTask>(`/task/${taskId}`);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * This function will transform clickup task object to our desired data structure for Career position.
 *
 * @param task clickup api return object
 * @returns
 */

export const transformClickUpTaskToPositionDetails = (
  task: IClickUpTask
): TPositionDetails => {
  const workTypeIndex = task.custom_fields.findIndex(
    (e) => e.name === "work_type"
  );

  const workType = task.custom_fields[workTypeIndex];

  const locationIndex = task.custom_fields.findIndex(
    (field) => field.name === "location"
  );

  const location = task.custom_fields[locationIndex];

  return {
    id: task.id,
    slug: getCustomTextFieldValue("slug", task),
    name: task.name,
    description: getCustomTextFieldValue("description_markdown", task),
    workType: workType.type_config.options[workType.value.toString()].name,
    location: location.type_config.options[location.value.toString()].name,
    stockOptions: getCustomTextFieldValue("stock_options", task),
    packageUK: getCustomTextFieldValue("package_uk", task),
    packageTW: getCustomTextFieldValue("package_tw", task),
    postDate: getCustomTextFieldValue("post_date", task),
  };
};

export const transformClickUpTaskToMemberDetails = (
  task: IClickUpTask
): TMemberDetails => {
  const titles = getCustomTextFieldValue("titles", task);
  const kernelColorRectLocation = getCustomTextFieldValue(
    "kernel_color_rect_location",
    task
  );

  return {
    id: task.id,
    name: task.name,
    linkedinLink: getCustomTextFieldValue("linkedin_link", task),
    githubLink: getCustomTextFieldValue("github_link", task),
    titles: titles.split(",").map((item) => item.trim()),
    kernelColorRectLocation: kernelColorRectLocation
      .split(",")
      .map((item) => item.trim()),
    kernelColor: getCustomTextFieldValue("kernel_color", task),
    avatarDesktop: getCustomAttatchmentImageFieldValue(
      "avatar_image_desktop",
      task
    )[0].thumbnail_large,
    avatarWithFrameDesktop: getCustomAttatchmentImageFieldValue(
      "avatar_image_with_frame_desktop",
      task
    )[0].thumbnail_large,
    avatarWithFrameMobile: getCustomAttatchmentImageFieldValue(
      "avatar_image_with_frame_mobile",
      task
    )[0].thumbnail_large,
    order: parseInt(getCustomTextFieldValue("order", task)),
  };
};

const getCustomTextFieldValue = (key: string, task: IClickUpTask): string => {
  const index = task.custom_fields.findIndex((e) => e.name === key);

  if (index === -1) {
    throw new Error("Custom field not found");
  }

  const value = task.custom_fields[index].value;

  if (typeof value === "undefined") {
    throw new Error(`Can't find the value of ${key}`);
  }

  return value.toString();
};

const getCustomAttatchmentImageFieldValue = (
  key: string,
  task: IClickUpTask
): IClickUpImageAttatchmentValue[] => {
  const index = task.custom_fields.findIndex((e) => e.name === key);

  if (index === -1) {
    throw new Error("Custom field not found");
  }

  const images = task.custom_fields[index].value;

  if (typeof images !== "object") {
    throw new Error("Custom image attatchment field is not desired object");
  }

  return images;
};
