import React from "react";
import * as C from "../../components";
import { useContent, useDelete } from "../../Hooks";
import { useParams } from "react-router-dom";

const BoardDetail = () => {
  let { id } = useParams();

  const state = useContent({ id });
  const { boardDelete } = useDelete({ id });

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
