import React from "react";
import * as S from "./style";
import * as C from "../index";
import useMarkdown from "../../Hooks/useMarkdown";

const HistoryDetailItem = ({ content }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);
  return (
    <>
      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default HistoryDetailItem;
