import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks";
import * as C from "../../components";

const HistoryDetail = () => {
  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  let { id } = useParams();

  const { fetch } = useFetch({
    url: `/board/${id}/record/detail`,
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
  }, []);

  const formattedCreatedDate = new Date(state.createdDate).toLocaleString();
  const formattedEditedDate = new Date(state.editedDate).toLocaleString();

  return (
    <C.PageContainer title={state.title} sort="역사">
      <C.Explanation>
        <C.HistoryDetail
          content={state.content}
          createdDate={formattedCreatedDate}
          editedDate={formattedEditedDate}
        />
      </C.Explanation>
    </C.PageContainer>
  );
};

export default HistoryDetail;
