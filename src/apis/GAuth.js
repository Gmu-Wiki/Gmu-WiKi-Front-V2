import axios from "axios";

const EnvConfig = {

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
