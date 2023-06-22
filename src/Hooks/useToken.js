import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const useToken = storeCode => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [accessExp, setAccessExp] = useState(null);
  const [refreshExp, setRefreshExp] = useState(null);
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
          setAccessExp(response.data.accessExp);
          setRefreshExp(response.data.refreshExp);
          toast.success("로그인 성공");
        }
      } catch (error) {
        toast.error("로그인 실패");
      }
    };

    fetchToken();
  }, [storeCode]);

  const refreshAccessToken = useCallback(async () => {
    try {
      const response = await axios.patch(
        EnvConfig.REFRESHTOKENPATCHURL,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
    } catch (error) {
      toast.error("토큰 재발급 실패");
    }
  }, [refreshToken]);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (accessToken && accessExp) {
        const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (단위: 초)
        const timeUntilExpiration = accessExp - currentTime;

        if (timeUntilExpiration <= 0) {
          refreshAccessToken();
        }
      }
    };

    const interval = setInterval(checkTokenExpiration, 60000); // 1분 (60초)마다 토큰 만료 확인

    return () => {
      clearInterval(interval);
    };
  }, [accessToken, accessExp, refreshAccessToken]);

  useEffect(() => {
    // 토큰과 만료 시간이 존재하면 로그인 성공 후 "/" 경로로 이동
    if (accessToken && accessExp) {
      navigate("/");
    }
  }, [accessToken, accessExp, navigate]);

  return {
    accessToken,
    refreshToken,
    refreshAccessToken,
    setAccessToken,
    setRefreshToken,
  };
};

export default useToken;
