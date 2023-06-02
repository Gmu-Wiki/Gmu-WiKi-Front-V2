import React from "react";
<<<<<<< HEAD
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
=======
import * as I from "../../assets";
import * as S from "./style";

function Graph() {
  return (
    <>
      <S.GraphCenter>asd</S.GraphCenter>
>>>>>>> 31199396f9b19a9c41a24f1dc1b4c9b58b18849e
    </>
  );
}

export default Graph;
