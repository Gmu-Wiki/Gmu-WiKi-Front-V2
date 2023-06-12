import React from "react";
import * as S from "./style";

function Graph({
  titleChild,
  contentChild,
  backgroundColor,
  color,
  contentColor,
}) {
  return (
    <>
      <S.GraphCenter>
        <S.TitleGraph backgroundColor={backgroundColor}>
          {titleChild}
        </S.TitleGraph>
        <S.ContentGraph contentColor={contentColor} color={color}>
          {contentChild}
        </S.ContentGraph>
      </S.GraphCenter>
    </>
  );
}

export default Graph;
