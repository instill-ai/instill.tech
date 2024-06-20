import { InstillAPIGetRequestBody } from "@/pages/api/instill-api-get";
import axios from "axios";
import { JumbotronRequestResponse } from "../jumbotron-sdk/type";
import { handleInstillError } from "../jumbotron-sdk/utility";
import { Nullable } from "@instill-ai/design-system";

export async function component(
  filter: Nullable<string>,
  page: number,
  pageSize: number
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIGetRequestBody = {
    path: `/v1beta/component-definitions?pageSize=${pageSize}&page=${page}`,
  };

  try {
    if (filter) {
      body.path = body.path + filter;
    }
    const response = await axios.post("/api/instill-api-get", body);

    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
