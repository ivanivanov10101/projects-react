import axios from "axios";
import { apiBaseUrl } from ".";

export const Axios = axios.create({
  baseURL: apiBaseUrl,
});
