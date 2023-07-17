import { useEffect, useState } from "react";
import GetRole from "../lib/GetRole";
import useFetch from "./useFetch";

const useContent = ({ id }) => {
  const data = GetRole();

  const [roleUrl, setRoleUrl] = useState("");

  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const { fetch } = useFetch({
    url: `/${roleUrl}/board/${id}`,
    method: "get",
    onSuccess: data => {
      setState(data);
    },
    erros: {
      400: "글을 불러오지 못했습니다."
    }
  });

  useEffect(() => {
    if (roleUrl) {
      fetch();
    }
  }, [roleUrl]);

  return state;
};

export default useContent;
