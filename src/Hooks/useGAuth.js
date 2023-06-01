import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const EnvConfig = {
  ClientId: process.env.REACT_APP_CLIENT_ID,
  ClientSecret: process.env.REACT_APP_CLIENT_SECRET,
  RedirectUri: process.env.REACT_APP_REDIRECT_URI,
  GAuthPostUrl: process.env.REACT_APP_GAUTH_POST_URL,
  WritePostUrl: process.env.REACT_APP_WRITE_POST_URL,
};

const GAUTHMOVEURL = `https://gauth.co.kr/login?client_id=${EnvConfig.ClientId}&redirect_uri=${EnvConfig.RedirectUri}`;

const useGAuth = () => {

  window.location.href = GAUTHMOVEURL;
  
  const getLocation = useLocation();

  const [storeAccessToken, setStoreAccessToken] = useState("");
  const [storeRefreshToken, setStoreRefreshToken] = useState("");

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

  useEffect(() => {
    axios
      .post(EnvConfig.WritePostUrl, {
        accessToken: storeAccessToken,
        refreshToken: storeRefreshToken,
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, [storeAccessToken, storeRefreshToken]);

  return {
    storeAccessToken,
    storeRefreshToken,
  };
};

export default useGAuth;
