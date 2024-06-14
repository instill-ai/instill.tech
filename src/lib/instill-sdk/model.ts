import { InstillAPIGetRequestBody } from "@/pages/api/instill-api-get";
import axios from "axios";
import { JumbotronRequestResponse } from "../jumbotron-sdk/type";
import { handleInstillError } from "../jumbotron-sdk/utility";

export async function model(): Promise<JumbotronRequestResponse> {
  const body: InstillAPIGetRequestBody = {
    path: "/v1alpha/models?view=VIEW_FULL",
  };

  try {
    const response = await axios.post("/api/instill-api-get", body);
    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
