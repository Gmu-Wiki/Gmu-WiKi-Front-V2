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
      })
      .catch(err => toast.error("로그인 실패"));
  }, [accessToken]);

  return { name, grade, email };
};

export default useLogin;
