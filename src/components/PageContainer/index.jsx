import React from "react";
import * as S from "./style";
import * as C from "../../components";

function PageContainer({ children, title, sort }) {
  return (
    <S.PageCenter>
      <S.PageContainer>
        <C.WhiteContainer title={title} sort={sort} />
        <S.DetailContent>
          <S.DetailCenter>
            <S.Explanation>{children}</S.Explanation>
            {/*padding-top: auto; 설정하여 height에 맞게 증가*/}
          </S.DetailCenter>
        </S.DetailContent>
      </S.PageContainer>
    </S.PageCenter>
  );
}

export default PageContainer;
