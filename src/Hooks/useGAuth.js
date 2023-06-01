import { useEffect, useState } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GAUTHMOVEURL = `https://gauth.co.kr/login?client_id=${EnvConfig.CLIENTID}&redirect_uri=${EnvConfig.REDIRECTURL}`;

const useGAuth = () => {
  window.location.href = GAUTHMOVEURL;

  const [storeAccessToken, setStoreAccessToken] = useState("");
  const [storeRefreshToken, setStoreRefreshToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
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
        .catch(err => toast.error("error"));
    }
  }, []);

  return {
    storeAccessToken,
    storeRefreshToken,
  };
};

export default useGAuth;
