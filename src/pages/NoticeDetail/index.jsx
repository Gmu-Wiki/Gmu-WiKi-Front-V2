import React from "react";
import * as C from "../../components";
import { useNotice } from "../../Hooks";
import { useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";

const NoticeDetail = () => {
  const data = GetRole();

  let { id } = useParams();

  const { deleteNotice, state } = useNotice({ props: { id } });

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      deleteNotice();
    }
  };

  const hasDeleteButton = data === "관리자";
  const hasEditButton = data === "관리자";

  const formattedCreatedDate = new Date(state.createdDate).toLocaleString();
  const formattedEditedDate = new Date(state.editedDate).toLocaleString();

  return (
    <C.PageContainer
      title={state.title}
      hasDeleteButton={hasDeleteButton}
      hasEditButton={hasEditButton}
      onClick={handleDelete}
      sort="공지"
      editUrl="notice"
    >
      <C.Explanation>
        <C.NoticeDetail
          id={state.id}
          title={state.title}
          createdDate={formattedCreatedDate}
          editedDate={formattedEditedDate}
          content={state.content}
        />
      </C.Explanation>
    </C.PageContainer>
  );
};

export default NoticeDetail;
