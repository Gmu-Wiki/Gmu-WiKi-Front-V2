import React from "react";
import * as S from "./style";
import useMarkdown from "../../Hooks/useMarkdown";
import DOMPurify from "dompurify";

const BoardDetailItem = ({ content, createdDate, editedDate }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <>
      <S.NTBox>
        <S.Date>생성 일자 : {createdDate}</S.Date>
        <S.Date>최근 수정 시각 : {editedDate}</S.Date>
      </S.NTBox>

      <S.Content dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
};

export default BoardDetailItem;
