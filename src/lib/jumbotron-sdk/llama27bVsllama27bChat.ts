import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import axios from "axios";
import { JumbotronRequestResponse } from "./type";
import { handleInstillError } from "./utility";

export type Llama27bVsLlama27bChatRequestData = {
  inputs: {
    prompt: string;
  }[];
};

export async function llama27bVsLlama27bChat(
  requestData: Llama27bVsLlama27bChatRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "vdp/v1beta/users/instill-wombat/pipelines/llama2-7b_vs_llama2-7b-chat/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
