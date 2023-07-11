import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useFetch, useNotice } from "../../Hooks";
import { useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";

const NoticeDetail = () => {
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
    url: `/${roleUrl}/notice/${id}`,
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

  const { deleteNotice } = useNotice({ props: { id } });

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      deleteNotice();
    }
  };

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title={state.title}
        {...(data === "관리자"
          ? { hasDeleteButton: true }
          : { hasDeleteButton: false })}
        onClick={handleDelete}
        sort="공지"
      >
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

export default NoticeDetail;
