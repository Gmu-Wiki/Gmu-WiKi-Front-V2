import { useEffect, useState } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

const useToken = storeCode => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const replace = useNavigate();
  useEffect(() => {
    if (storeCode) {
      axios
        .post(EnvConfig.CODEPOSTURL, {
          code: storeCode,
        })
        .then(res => {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
          replace("/");
        })
        .catch(err => {
          toast.error("로그인 실패");
          replace("/");
        });
    }
  }, [storeCode, replace]);

  return { accessToken, refreshToken };
};

export default useToken;
