import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useContent, useDelete } from "../../Hooks";
import { useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";

const BoardDetail = () => {
  const data = GetRole();

  let { id } = useParams();

  const state = useContent({ id });
  const { boardDelete } = useDelete({ id });

  const [roleUrl, setRoleUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <div>로딩중..</div>;
  }

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      boardDelete();
    }
  };

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
