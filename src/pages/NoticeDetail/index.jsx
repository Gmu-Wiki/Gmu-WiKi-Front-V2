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

  return (
    <>
      <C.RecentModified />
      <C.Header />
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

export default NoticeDetail;
