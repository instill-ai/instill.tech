import { Commit, CommitMeta } from "./type";
import { Octokit } from "@octokit/core";
import { Nullable } from "@/types/instill";

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

type GetCommitMetaProps = {
  org: string;
  repo: string;
  path: string;
};

export const getCommitMeta = async ({
  org,
  repo,
  path,
}: GetCommitMetaProps): Promise<CommitMeta> => {
  try {
    const commits = await getRepoFileCommits(org, repo, path);

    let lastEditedTime: Nullable<string> = null;
    let author: Nullable<string> = null;
    let authorGithubUrl: Nullable<string> = null;

    if (commits.length > 0 && commits[0]) {
      const authorObj = commits[0].commit.author;
      if (authorObj) {
        if (authorObj.date) {
          const time = new Date(authorObj.date).toLocaleString();

          lastEditedTime = time;
        }

        author = authorObj.name || null;
      }
      if (commits[0].author) {
        authorGithubUrl = commits[0].author.html_url;
      }
    }

    return Promise.resolve({
      author,
      authorGithubUrl,
      lastEditedTime,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};
