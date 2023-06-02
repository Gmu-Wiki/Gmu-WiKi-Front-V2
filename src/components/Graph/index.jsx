import React from "react";
import * as S from "./style";

function Graph({
  graphWidth,
  titleWidth,
  contentWidth,
  titleChild,
  contentChild,
  backgroundColor,
}) {
  return (
    <>
      <S.GraphCenter graphWidth={graphWidth}>
        <S.TitleGraph titleWidth={titleWidth} backgroundColor={backgroundColor}>
          {titleChild}
        </S.TitleGraph>
        <S.ContentGraph contentWidth={contentWidth}>
          {contentChild}
        </S.ContentGraph>
      </S.GraphCenter>
    </>
  );
}

export default Graph;
