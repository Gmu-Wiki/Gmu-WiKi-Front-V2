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
    if (accessToken) {
      axios
        .post(EnvConfig.TOKENPOSTURL, {
          Authorization: accessToken,
        })
        .then(res => {
          console.log(res.data);
          const userData = res.data;
          setEmail(userData.email);
          setName(userData.name);
          setGrade(userData.grade);
          setNum(userData.num);
          setRole(userData.role);
          setGender(userData.gender);
          setClassNum(userData.classNum);
          setProfileUrl(userData.profileUrl);
          toast.success("로그인 성공");
        })
        .catch(err => {
          const errorMessage = err.response?.data?.message || "로그인 실패";
          toast.error(errorMessage);
        });
    }
  }, [accessToken]);

  return { name, grade, email, classNum, num, gender, profileUrl, role };
};

export default useLogin;
