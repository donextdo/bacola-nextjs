import axios from "axios";
import { getToken } from "../utils/token";
import baseUrl from "./baseUrl";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  async (config) => {
    const token = getToken();

    if (token) {
      console.log("has token");
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Headers"] = "Content-Type";
    } else {
      console.log("no token");
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// Testing the instance

export default instance;
