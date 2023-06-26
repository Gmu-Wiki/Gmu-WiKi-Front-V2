import axios from "axios";
import { toast } from "react-toastify";
import useToken from "./useToken";
import EnvConfig from "../apis/EnvConfig";
import useFetch from "./useFetch";

const useLogout = () => {
  const { fetch } = useFetch({
    url: "auth",
    method: "delete",
    successMessage: "로그아웃 성공",
    errors: "로그아웃 실패",
  });
};

export default useLogout;
