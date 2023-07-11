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
        <S.Date>생성 일자 : {createdDate}</S.Date>
        <S.Date>최근 수정 시각 : {editedDate}</S.Date>
      </S.NTBox>

      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default BoardDetailItem;
