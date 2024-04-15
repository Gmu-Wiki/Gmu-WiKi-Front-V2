import EnvConfig from "../apis/EnvConfig";

export const gauthLoginUri = `https://gauth-msg.vercel.app/login?client_id=${EnvConfig.CLIENTID}&redirect_uri=${EnvConfig.REDIRECTURL}`;
