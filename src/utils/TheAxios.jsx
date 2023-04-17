import axios from "axios";

const TheAxios = axios.create({
  // transactions
  baseURL: "http://localhost:9000/",
});

export default TheAxios;
