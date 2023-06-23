import axios from "axios";
import EnvConfig from "./EnvConfig";

const API = axios.create({
  baseURL: EnvConfig.GMUIKISERVERURL,
  withCredentials: true,
});

export default API;
