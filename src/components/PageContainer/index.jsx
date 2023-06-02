import React from "react";
import * as S from "./style";
import * as C from "../../components";

function PageContainer({ children, title, sort }) {
  return (
    <S.PageCenter>
      <S.PageContainer>
        <C.WhiteContainer title={title} sort={sort} />
        <S.DetailContent>
          <S.DetailCenter>{children}</S.DetailCenter>
        </S.DetailContent>
      </S.PageContainer>
    </S.PageCenter>
  );
}

export default PageContainer;
