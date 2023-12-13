import axios, { AxiosResponse } from "axios";

interface RequestData {
  inputs: {
    prompts: string[];
    shape: string;
  }[];
}

const apiToken = "instill_sk_OwuGQ8RGL6ObzYsneAG9Mib1k6zi9Gmj"; // Replace with your actual API token

const stabilityAIOpenAISticker = async (requestData: RequestData) => {
  const apiUrl =
    "https://api.instill.tech/vdp/v1alpha/users/namananand-instill-ai/pipelines/monthly-purple-swordtail/trigger";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiToken}`,
  };

  try {
    const response: AxiosResponse = await axios.post(apiUrl, requestData, {
      headers,
    });

    return { status: "success", data: response.data };
  } catch (error: any) {
    return { status: "error", error: error.message || error.toString() };
  }
};

export default stabilityAIOpenAISticker;
