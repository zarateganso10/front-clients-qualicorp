import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 1000,
});

export { instanceAxios };
