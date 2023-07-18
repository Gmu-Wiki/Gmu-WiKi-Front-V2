import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useContent } from "../../Hooks";
import { useNavigate, useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { useCallback } from "react";
import API from "../../apis";
import { toast } from "react-toastify";

const BoardDetail = () => {
  const data = GetRole();

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

  const boardDelete = useCallback(async () => {
    try {
      await API.delete(`/${roleUrl}/board/${id}`);
      toast.success("삭제 성공");

      navigate("/");
    } catch (e) {
      if (e.response && e.response.status >= 403) {
        toast.error("자신의 글만 삭제할 수 있습니다.");
      } else {
        toast.error("글 삭제에 실패했습니다.");
      }
    }
  }, [roleUrl, navigate, id]);

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      boardDelete();
    }
  };

  const state = useContent({ id });

  const formattedCreatedDate = new Date(state.createdDate).toLocaleString();
  const formattedEditedDate = new Date(state.editedDate).toLocaleString();

  return (
    <>
      <C.PageContainer
        title={state.title}
        sort="글"
        hasHistoryButton={true}
        hasEditButton={true}
        hasDeleteButton={true}
        onClick={handleDelete}
        editUrl="board"
      >
        <C.Explanation>
          <C.BoardDetail
            id={state.id}
            title={state.title}
            createdDate={formattedCreatedDate}
            editedDate={formattedEditedDate}
            content={state.content}
          />
        </C.Explanation>
      </C.PageContainer>
    </>
  );
};

export default BoardDetail;
