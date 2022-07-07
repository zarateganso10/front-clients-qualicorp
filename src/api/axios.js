import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://api-clients-qualicorp.herokuapp.com/",
  timeout: 5000,
});

export { instanceAxios };
