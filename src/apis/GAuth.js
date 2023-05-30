import axios from "axios";

const EnvConfig = {
  ClientId: process.env.REACT_APP_CLIENT_ID,
  ClientSecret: process.env.REACT_APP_CLIENT_SECRET,
  RedirectUri: process.env.REACT_APP_REDIRECT_URI,
  GAuthPostUrl: process.env.REACT_APP_GAUTH_POST_URL,
};

export default function GauthMove() {
  window.location.href = `https://gauth.co.kr/login?client_id=${EnvConfig.ClientId}&redirect_uri=${EnvConfig.RedirectUri}`;
}
axios.post(EnvConfig.GAuthPostUrl, {
  code: String,
  clientId: EnvConfig.ClientId,
  clientSecret: EnvConfig.ClientSecret,
  redirectUri: EnvConfig.RedirectUri,
});
