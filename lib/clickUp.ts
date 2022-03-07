import axios from "axios";
import { TGetClickUpTasksQueryResponse, IClickUpTask } from "../types/clickUp";
import { TPositionDetails } from "../types/instill";

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

export const transformClickUpTaskToPositionDetails = (
  task: IClickUpTask
): TPositionDetails => {
  const descriptionIndex = task.custom_fields.findIndex(
    (e) => e.name === "description_markdown"
  );

  const workTypeIndex = task.custom_fields.findIndex(
    (e) => e.name === "work_type"
  );

  const workType = task.custom_fields[workTypeIndex];

  const locationIndex = task.custom_fields.findIndex(
    (field) => field.name === "location"
  );

  const location = task.custom_fields[locationIndex];

  const stockOptionsIndex = task.custom_fields.findIndex(
    (field) => field.name === "stock_options"
  );

  const packageUKIndex = task.custom_fields.findIndex(
    (field) => field.name === "package_uk"
  );

  const packageTWIndex = task.custom_fields.findIndex(
    (field) => field.name === "package_tw"
  );

  const postDateIndex = task.custom_fields.findIndex(
    (field) => field.name === "post_date"
  );

  const slugIndex = task.custom_fields.findIndex(
    (field) => field.name === "slug"
  );

  return {
    id: task.id,
    slug: task.custom_fields[slugIndex].value.toString(),
    name: task.name,
    description: task.custom_fields[descriptionIndex].value.toString(),
    workType: workType.type_config.options[workType.value].name,
    location: location.type_config.options[location.value].name,
    stockOptions: task.custom_fields[stockOptionsIndex].value.toString(),
    packageUK: task.custom_fields[packageUKIndex].value.toString(),
    packageTW: task.custom_fields[packageTWIndex].value.toString(),
    postDate: task.custom_fields[postDateIndex].value.toString(),
  };
};
