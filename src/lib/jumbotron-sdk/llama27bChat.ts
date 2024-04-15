import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import axios from "axios";
import { JumbotronRequestResponse } from "./type";
import { handleInstillError } from "./utility";

export type Llama27bChatRequestData = {
  inputs: {
    prompt: string;
  }[];
};

export async function llama27bChat(
  requestData: Llama27bChatRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "vdp/v1beta/users/instill-wombat/pipelines/llama2-7b-chat/releases/v3.0.0/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
