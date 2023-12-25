import axios, { AxiosResponse } from "axios";

interface RequestData {
  inputs: {
    image: string;
    question: string;
  }[];
}

const apiToken = "instill_sk_lHvdxR1kt7znbaYmJbIxckTBEvZEFBQk"; // Replace with your actual API token

const llava7b = async (
  requestData: RequestData
): Promise<{ status: string; data?: any; error?: any }> => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL +
    "/vdp/v1beta/users/admin/pipelines/jumbotron-visual-understanding/trigger";

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
    if (error.response && error.response.data && error.response.data.message) {
      return {
        status: "error",
        error: error.response.data.message,
      };
    } else {
      return {
        status: "error",
        error: error.toString(),
      };
    }
  }
};

export default llava7b;
