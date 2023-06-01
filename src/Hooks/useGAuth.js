import { useEffect, useState } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";


const GAUTHMOVEURL = `https://gauth.co.kr/login?client_id=${EnvConfig.CLIENTID}&redirect_uri=${EnvConfig.REDIRECTURL}`;

const useGAuth = () => {
  window.location.href = GAUTHMOVEURL;

  const [storeAccessToken, setStoreAccessToken] = useState("");
  const [storeRefreshToken, setStoreRefreshToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    console.log(code);

    axios
      .post(EnvConfig.GAUTHCODEPOSTURL, {
        code: code,
        clientId: EnvConfig.CLIENTID,
        clientSecret: EnvConfig.CLIENTSECRET,
        redirectUri: EnvConfig.REDIRECTURL,
      })
      .then(res => {
        setStoreAccessToken(res.data.accessToken);
        setStoreRefreshToken(res.data.refreshToken);
      })
      .catch(err => console.log(err));
  }, []);

  return {
    storeAccessToken,
    storeRefreshToken,
  };
};

export default useGAuth;
