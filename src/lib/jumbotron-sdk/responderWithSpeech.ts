import axios from "axios";
import { handleInstillError } from "./utility";
import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import { JumbotronRequestResponse } from "./type";

export type ResponderWithSpeechRequestData = {
  inputs: {
    prompt: string;
  }[];
};

export async function responderWithSpeech(
  requestData: ResponderWithSpeechRequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "vdp/v1beta/users/instill-wombat/pipelines/jumbotron-lifelike-speech/releases/v1.0.0/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
