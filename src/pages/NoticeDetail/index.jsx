import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useFetch } from "../../Hooks";
import { useParams } from "react-router-dom";

const InquiryDetail = () => {
  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  let { id } = useParams();

  const { fetch } = useFetch({
    url: `/user/notice/${id}`,
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

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={state.title} sort="공지">
        <C.Explanation>
          <C.NoticeDetail
            id={state.id}
            title={state.title}
            createdDate={state.createdDate.substring(0, 10)}
            editedDate={state.editedDate.substring(0, 10)}
            content={state.content}
          />
        </C.Explanation>
      </C.PageContainer>
    </>
  );
};

export default InquiryDetail;
