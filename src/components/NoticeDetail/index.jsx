import React from "react";
import * as S from "./style";
import useMarkdown from "../../Hooks/useMarkdown";
import DOMPurify from "dompurify";

const NoticeDetailItem = ({ id, content, createdDate, editedDate }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <>
      <S.NTBox>
        <S.Date>작성일 : {createdDate}</S.Date>
        <S.Date>수정일 : {editedDate}</S.Date>
      </S.NTBox>

      <S.Content dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </>
  );
};

export default NoticeDetailItem;
