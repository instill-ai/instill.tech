import axios, { AxiosResponse } from "axios";

interface RequestData {
  inputs: {
    image: string;
  }[];
}

const apiToken = "instill_sk_OwuGQ8RGL6ObzYsneAG9Mib1k6zi9Gmj"; // Replace with your actual API token

const yolov7 = async (
  requestData: RequestData
): Promise<{ status: string; data?: any; error?: string }> => {
  const apiUrl =
    "https://api.instill.tech/vdp/v1alpha/users/namananand-instill-ai/pipelines/happy-yellow-ostrich/trigger";

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

export default yolov7;
