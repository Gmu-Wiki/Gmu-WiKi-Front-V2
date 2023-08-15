import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks";
import GetRole from "../../lib/GetRole";

const HistoryDetail = () => {
  const data = GetRole();

  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  let { id } = useParams();

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const { fetch } = useFetch({
    url: `/${roleUrl}/board/${id}/record/detail`,
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

  return (
    <C.PageContainer title={state.title} sort="역사">
      <C.Explanation>
        <C.HistoryDetail
          content={state.content}
          createdDate={state.createdDate}
          editedDate={state.editedDate}
        />
      </C.Explanation>
    </C.PageContainer>
  );
};

export default HistoryDetail;
