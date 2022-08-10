import axios from "axios";

export const getRepoFileContent = async (
  owner: string,
  repo: string,
  path: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    );

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
