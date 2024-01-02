import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import axios from "axios";
import { JumbotronRequestResponse } from "./type";
import { handleInstillError } from "./utility";

export type SEOArticleRequestData = {
  inputs: {
    keywords: string;
    number_of_section: number;
  }[];
};

export async function seoArticle(
  requestData: SEOArticleRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "/vdp/v1beta/users/instill-wombat/pipelines/jumbotron-seo-article-writer/releases/v1.0.0/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
