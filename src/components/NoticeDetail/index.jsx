import React from "react";
import * as S from "./style";
import useMarkdown from "../../Hooks/useMarkdown";
import { useNotice } from "../../Hooks";
import GetRole from "../../lib/GetRole";

const NoticeDetailItem = ({ id, content, createdDate, editedDate }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  const { deleteNotice } = useNotice({ props: { id } });

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      deleteNotice();
    }
  };

  return (
    <>
      <S.NTBox>
        <S.Date>작성일 : {createdDate}</S.Date>
        <S.Date>수정일 : {editedDate}</S.Date>
      </S.NTBox>

      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default NoticeDetailItem;
