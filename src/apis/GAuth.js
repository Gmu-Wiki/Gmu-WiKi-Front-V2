import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";

const EnvConfig = {
  ClientId: process.env.REACT_APP_CLIENT_ID,
  ClientSecret: process.env.REACT_APP_CLIENT_SECRET,
  RedirectUri: process.env.REACT_APP_REDIRECT_URI,
  GAuthPostUrl: process.env.REACT_APP_GAUTH_POST_URL,
};

export default function GauthMove() {
  window.location.href = `https://gauth.co.kr/login?client_id=${EnvConfig.ClientId}&redirect_uri=${EnvConfig.RedirectUri}`;
  
  const getLocation = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(getLocation.search);
    const code = urlParams.get("code");
    console.log(code);
    axios
      .post(EnvConfig.GAuthPostUrl, {
        code: code,
        clientId: EnvConfig.ClientId,
        clientSecret: EnvConfig.ClientSecret,
        redirectUri: EnvConfig.RedirectUri,
      })
      .then(res => {
        setStoreAccessToken(res.data.accessToken);
        setStoreRefreshToken(res.data.refreshToken);
      })
      .catch(err => console.log(err));
  }, [getLocation]);

  const [storeAccessToken, setStoreAccessToken] = useState("");
  const [storeRefreshToken, setStoreRefreshToken] = useState("");

  axios
    .post("민욱이한테 보낼 URL", {
      accessToken: storeAccessToken,
      refreshToken: storeRefreshToken,
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}
