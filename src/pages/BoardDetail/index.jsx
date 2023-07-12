import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useFetch } from "../../Hooks";
import { useNavigate, useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { useCallback } from "react";
import API from "../../apis";
import { toast } from "react-toastify";

const BoardDetail = () => {
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
  const navigate = useNavigate();

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

  const boardDelete = useCallback(async () => {
    try {
      await API.delete(`/${roleUrl}/board/${id}`);
      toast.success("삭제 성공");

      navigate("/");
    } catch (e) {
      console.log(e);
      toast.error("글 삭제에 실패했습니다.");
    }
  }, [roleUrl, navigate, id]);

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      boardDelete();
    }
  };

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title={state.title}
        hasHistoryButton={true}
        hasEditButton={true}
        {...(data === "관리자"
          ? { hasDeleteButton: true }
          : { hasDeleteButton: false })}
        onClick={handleDelete}
        sort="글"
      >
        <C.Explanation>
          <C.BoardDetail
            id={state.id}
            title={state.title}
            createdDate={state.createdDate.substring(0, 10)}
            editedDate={state.editedDate.substring(0, 10)}
            content={state.content}
          />
        </C.Explanation>
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
};

export default BoardDetail;
