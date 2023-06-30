import EnvConfig from "../apis/EnvConfig";

export const gauthLoginUrl = `https://gauth.co.kr/login?client_id=${EnvConfig.CLIENTID}&redirect_uri=${EnvConfig.REDIRECTURL}`;
