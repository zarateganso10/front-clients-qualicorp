import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const instanceAxios = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
});

export { instanceAxios };
