import axios from "axios";
import { toast } from "react-toastify";
import useToken from "./useToken";
import EnvConfig from "../apis/EnvConfig";

const useLogout = () => {
  const { accessToken } = useToken();
  const Logout = async () => {
    try {
      await axios.delete(
        EnvConfig.LOGOUTURL,
        {},
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      toast.success("로그아웃 성공");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "로그아웃 실패";
      toast.error(errorMessage);
    }
  };

  return Logout;
};

export default useLogout;
