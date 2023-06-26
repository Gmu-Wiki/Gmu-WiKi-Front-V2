import TokenManager from "../apis/TokenManager";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";

const useLogin = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const gauthCode = searchParams.get("code");

  const { fetch } = useFetch({
    url: "/auth",
    method: "post",
    successMessage: "로그인 성공",
    errors: "로그인 실패",
    onSuccess: data => {
      if (typeof window !== "undefined") {
        const tokenManager = new TokenManager();
        tokenManager.setTokens(data);
      }
      window.location.href("/");
    },
    onFailure: () => {
      window.location.href("/");
    },
  });

  useEffect(() => {
    if (!gauthCode) return;
    fetch({ code: gauthCode });
  }, [gauthCode, fetch]);
};

export default useLogin;
