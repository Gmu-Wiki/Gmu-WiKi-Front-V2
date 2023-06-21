import { useEffect, useState } from "react";
import axios from "axios";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import useToken from "./useToken";

const useLogin = () => {
  const { accessToken } = useToken();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [num, setNum] = useState("");
  const [gender, setGender] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          EnvConfig.TOKENPOSTURL,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const userData = response.data;
        setEmail(userData.email);
        setName(userData.name);
        setGrade(userData.grade);
        setNum(userData.num);
        setRole(userData.role);
        setGender(userData.gender);
        setClassNum(userData.classNum);
        setProfileUrl(userData.profileUrl);
        toast.success("로그인 성공");
      } catch (error) {
        const errorMessage = error.response?.data?.message || "로그인 실패";
        toast.error(errorMessage);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return { name, grade, email, classNum, num, gender, profileUrl, role };
};

export default useLogin;
