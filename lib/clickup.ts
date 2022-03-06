import axios from "axios";
import { TGetClickUpTasksQueryResponse, IClickUpTask } from "../types/clickUp";

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
