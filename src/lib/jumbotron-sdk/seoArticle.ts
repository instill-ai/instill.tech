import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import axios from "axios";
import { JumbotronRequestResponse } from "./type";
import { handleInstillError } from "./utility";

export type SEOArticleRequestData = {
  inputs: {
    keywords: string;
    section_number: number;
  }[];
};

export async function seoArticle(
  requestData: SEOArticleRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "/vdp/v1beta/users/admin/pipelines/jumbotron-seo-article-writer/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
