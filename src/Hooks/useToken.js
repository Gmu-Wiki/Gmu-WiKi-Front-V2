import { useEffect, useState } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

const useToken = (storeCode) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (storeCode) {
          const response = await axios.post(EnvConfig.CODEPOSTURL, {
            code: storeCode,
          });
          setAccessToken(response.data.accessToken);
          setRefreshToken(response.data.refreshToken);
          toast.success("로그인 성공");
          navigate("/");
        }
      } catch (error) {
        toast.error("로그인 실패");
        navigate("/");
      }
    };

    fetchToken();
  }, [storeCode, navigate]);

  return { accessToken, refreshToken };
};

export default useToken;
