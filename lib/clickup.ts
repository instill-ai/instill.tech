import axios from "axios";
import { IClickUpTask } from "../types/click";

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

type ClickUpTask = {
  id: string;
  custom_id: string;
};

export const listClickupTasksInListQuery = async (listId: string) => {
  try {
    const client = createClickUpApiClient();
    const res = await client.get<IClickUpTask[]>(`/list/${listId}/task`);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
