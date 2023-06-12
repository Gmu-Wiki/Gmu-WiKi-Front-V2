import React from "react";
import * as S from "./style";

function Graph({ titleChild, contentChild, backgroundColor }) {
  return (
    <>
      <S.GraphCenter>
        <S.TitleGraph backgroundColor={backgroundColor}>
          {titleChild}
        </S.TitleGraph>
        <S.ContentGraph>{contentChild}</S.ContentGraph>
      </S.GraphCenter>
    </>
  );
}

export default Graph;
