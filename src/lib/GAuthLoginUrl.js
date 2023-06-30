import EnvConfig from "../apis/EnvConfig";

export const gauthLoginUri = `https://gauth.co.kr/login?client_id=${EnvConfig.CLIENTID}&redirect_uri=${EnvConfig.REDIRECTURL}`;
