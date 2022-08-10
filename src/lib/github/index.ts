import axios from "axios";
import { Commit } from "./type";

export const getRepoFileContent = async (
  owner: string,
  repo: string,
  path: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    );

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getRepoFileCommits = async (
  owner: string,
  repo: string,
  path: string
) => {
  try {
    const response = await axios.get<Commit[]>(
      `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}&page=1&per_page=1`
    );

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
