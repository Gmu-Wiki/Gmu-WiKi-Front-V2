import { useEffect } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useGAuth = storeCode => {
  useEffect(() => {
    if (storeCode) {
      axios
        .post(EnvConfig.CODEPOSTURL, {
          code: storeCode,
        })
        .then(res => toast.success("로그인 성공"))
        .catch(err => toast.error("로그인 실패"));
    }
  }, [storeCode]);

  return null;
};

export default useGAuth;
