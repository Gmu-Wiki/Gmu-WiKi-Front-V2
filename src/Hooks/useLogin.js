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
    axios
      .post(EnvConfig.TOKENPOSTURL, {
        Authorization: accessToken,
      })
      .then(res => {
        console.log(res.data);
        setEmail(res.data.email);
        setName(res.data.name);
        setGrade(res.data.grade);
        setNum(res.data.num);
        setRole(res.data.role);
        setGender(res.data.gender);
        setClassNum(res.data.classNum);
        setProfileUrl(res.data.profileUrl);
      })
      .catch(err => toast.error("로그인 실패"));
  }, [accessToken]);

  return { name, grade, email, classNum, num, gender, profileUrl, role };
};

export default useLogin;
