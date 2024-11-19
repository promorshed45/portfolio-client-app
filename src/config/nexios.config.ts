
import { Nexios } from "nexios-http";
import envconfig from "./envConfig";

// Initialize the Nexios instance
const nexiosInstance = new Nexios({
  baseURL: envconfig.baseApi,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


export default nexiosInstance;
