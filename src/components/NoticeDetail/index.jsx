import React from "react";
import * as S from "./style";
import useMarkdown from "../../Hooks/useMarkdown";

const NoticeDetailItem = ({ id, content, createdDate, editedDate }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

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
