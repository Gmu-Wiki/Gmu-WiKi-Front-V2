import React from "react";
import useMarkdown from "../../Hooks/useMarkdown";
import * as S from "./style";

const HistoryDetailItem = ({ content, createdDate, editedDate }) => {
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

export default HistoryDetailItem;
