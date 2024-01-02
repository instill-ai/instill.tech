import axios from "axios";
import { JumbotronRequestResponse } from "./type";
import { InstillAPIProxyRequestBody } from "@/pages/api/instill-api-proxy";
import { handleInstillError } from "./utility";

export type Yolov7RequestData = {
  inputs: {
    image: string;
  }[];
};

export async function yolov7(
  requestData: Yolov7RequestData
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIProxyRequestBody = {
    path: "/vdp/v1beta/users/instill-wombat/pipelines/jumbotron-yolov7/releases/v1.0.0/trigger",
    data: requestData,
  };

  try {
    const response = await axios.post("/api/instill-api-proxy", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
