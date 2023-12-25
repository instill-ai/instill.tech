import axios, { AxiosResponse } from "axios";

interface RequestData {
  inputs: {
    image: string;
  }[];
}

const apiToken = "instill_sk_lHvdxR1kt7znbaYmJbIxckTBEvZEFBQk"; // Replace with your actual API token

const yolov7 = async (
  requestData: RequestData
): Promise<{ status: string; data?: any; error?: string }> => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL +
    "/vdp/v1beta/users/admin/pipelines/jumbotron-yolov7/trigger";

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

export default yolov7;
