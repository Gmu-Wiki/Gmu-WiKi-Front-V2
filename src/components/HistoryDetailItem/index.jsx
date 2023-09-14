import React from "react";
import useMarkdown from "../../Hooks/useMarkdown";
import * as S from "./style";
import DOMPurify from "dompurify";

const HistoryDetailItem = ({ content, createdDate }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <>
      <S.NTBox>
        <S.Date>생성 일자 : {createdDate}</S.Date>
      </S.NTBox>

      <S.Content dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
};

export default HistoryDetailItem;
