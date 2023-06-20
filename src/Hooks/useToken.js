import { useEffect, useState } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToken = storeCode => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  useEffect(() => {
    if (storeCode) {
      axios
        .post(EnvConfig.CODEPOSTURL, {
          code: storeCode,
        })
        .then(res => {
          toast.success("로그인 성공");
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        })
        .catch(err => toast.error("로그인 실패"));
    }
  }, [storeCode]);

  return (accessToken, refreshToken);
};

export default useToken;
