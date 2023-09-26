import axios from "axios";

export const api = axios.create({
  baseURL: "https://upload-api-ai.onrender.com",
});
