import axios from "axios";
import { BASE_URL, API_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
  apiURL: API_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    const message = error.response?.data?.message || "Unknown Erroe";
    return Promise.reject({ message });
  }
);

export default apiService;