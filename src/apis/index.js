import axios from "axios";
import EnvConfig from "./EnvConfig";
import TokenManager from "./TokenManager";
import { reissueToken } from "../store/reissue";
import { store } from "../store";

const API = axios.create({
  baseURL: EnvConfig.GMUWIKI_SERVER_URL,
  withCredentials: true
});

API.interceptors.request.use(async config => {
  const tokenManager = new TokenManager();

  if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    ) &&
    tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  ) {
    await store.dispatch(reissueToken());
    tokenManager.initToken();
  } else if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    ) &&
    !tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  )
    tokenManager.removeTokens();

  config.headers["Authorization"] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});

export default API;
