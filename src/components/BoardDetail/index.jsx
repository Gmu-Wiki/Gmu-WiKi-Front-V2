import React from "react";
import * as S from "./style";
import useMarkdown from "../../Hooks/useMarkdown";
import GetRole from "../../lib/GetRole";

const BoardDetailItem = ({ content, createdDate, editedDate }) => {
  const data = GetRole();
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

export default BoardDetailItem;
