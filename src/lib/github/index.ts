import { Commit } from "./type";
import { Octokit } from "@octokit/core";

export const getRepoFileContent = async (
  owner: string,
  repo: string,
  path: string
): Promise<any> => {
  try {
    const octokitOpion = process.env.NEXT_PUBLIC_GITHUB_TOKEN
      ? { auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN }
      : {};

    const octokit = new Octokit(octokitOpion);

    const response = await octokit.request(
      "Get /repos/{owner}/{repo}/contents/{path}",
      {
        owner,
        repo,
        path,
      }
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
    const octokitOpion = process.env.NEXT_PUBLIC_GITHUB_TOKEN
      ? { auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN }
      : {};

    const octokit = new Octokit(octokitOpion);

    const response = await octokit.request(
      "Get /repos/{owner}/{repo}/commits?path={path}&page=1&per_page=1",
      {
        owner,
        repo,
        path,
      }
    );

    return Promise.resolve(response.data as Commit[]);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
