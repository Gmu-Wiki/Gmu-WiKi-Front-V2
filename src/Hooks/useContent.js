import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useContent = ({ id }) => {
  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  const { fetch } = useFetch({
    url: `/board/${id}`,
    method: "get",
    onSuccess: data => {
      setState(data);
    },
    erros: {
      400: "글을 불러오지 못했습니다."
    }
  });

  useEffect(() => {
    fetch();
  }, [id]);

  return state;
};

export default useContent;
