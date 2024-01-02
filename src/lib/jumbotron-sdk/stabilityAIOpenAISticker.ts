import axios from "axios";
import { handleInstillError } from "./utility";
import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import { JumbotronRequestResponse } from "./type";

export type StabilityAIOpenAISticketRequestData = {
  inputs: {
    sticker_prompt: string;
  }[];
};

export async function stabilityAIOpenAISticker(
  requestData: StabilityAIOpenAISticketRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "/vdp/v1beta/users/instill-wombat/pipelines/jumbotron-sticker-maker/releases/v1.0.0/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
