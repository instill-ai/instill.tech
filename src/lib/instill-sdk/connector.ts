import { InstillAPIGetRequestBody } from "@/pages/api/instill-api-get";
import axios from "axios";
import { JumbotronRequestResponse } from "../jumbotron-sdk/type";
import { handleInstillError } from "../jumbotron-sdk/utility";
import { Nullable } from "@instill-ai/design-system";

export async function connector(
  filter: Nullable<string>,
  page: Nullable<number>,
  page_size: Nullable<number>
): Promise<JumbotronRequestResponse> {
  const body: InstillAPIGetRequestBody = {
    path: `vdp/v1beta/component-definitions?page_size=${page_size}&page=${page}`,
  };

  // const connectors = [];
  // let next_page_token = "";

  try {
    if (filter) {
      body.path = body.path + filter;
    }
    const response = await axios.post("/api/instill-api-get", body);
    // connectors.push(...response.data);
    // next_page_token = response.data.next_page_token;
    // while (next_page_token) {
    //   body.path =
    //     "vdp/v1beta/connector-definitions?view=VIEW_FULL" +
    //     "&page_token=" +
    //     next_page_token;
    //   const nextResponse = await axios.post("/api/instill-api-get", body);
    //   connectors.push(...nextResponse.data.connector_definitions);
    //   next_page_token = nextResponse.data.next_page_token;
    //   console.log("next_page_token", next_page_token);
    // }

    return { status: "success", data: response.data };
  } catch (error) {
    return handleInstillError(error);
  }
}
