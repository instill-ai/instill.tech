import axios from "axios";

export function handleInstillError(error: unknown): {
  status: "error";
  error: string;
} {
  if (axios.isAxiosError(error) && error.response) {
    return {
      status: "error",
      error: error.response.data.message,
    };
  } else {
    return {
      status: "error",
      error: String(error),
    };
  }
}
