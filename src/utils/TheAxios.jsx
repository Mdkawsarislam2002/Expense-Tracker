import axios from "axios";

const TheAxios = axios.create({
  baseURL: "http://localhost:9000",
});

export default TheAxios;
