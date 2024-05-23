import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import axios from "axios";
import { JumbotronRequestResponse } from "./type";
import { handleInstillError } from "./utility";

export type WebpageSummarizationRequestData = {
  inputs: {
    webpage: string;
  }[];
};

export async function webpageSummarization(
  requestData: WebpageSummarizationRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "/vdp/v1beta/users/instill-wombat/pipelines/jumbotron-webpage-5-sec-previews/releases/v1.0.1/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
