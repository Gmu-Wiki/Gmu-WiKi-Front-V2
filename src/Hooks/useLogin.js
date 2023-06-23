import TokenManager from "../apis/TokenManager";
import { useEffect } from "react";
import useFetch from "./useFetch";

const useLogin = gauthCode => {

  const { fetch } = useFetch({
    url: "/auth",
    method: "post",
    onSuccess: data => {
      if (typeof window !== "undefined") {
        const tokenManager = new TokenManager();
        tokenManager.setTokens(data);
      }
      window.location.href('/')
    },
    onFailure: () => {
      window.location.href('/')
    },
  });

  useEffect(() => {
    if (!gauthCode) return;
    fetch({ code: gauthCode });
  }, [gauthCode, fetch]);
};

export default useLogin;
