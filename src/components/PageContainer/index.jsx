import React from "react";
import * as S from "./style";
import * as C from "../../components";

function PageContainer({ children, title, sort, hasButton }) {
  return (
    <S.PageCenter>
      <S.PageContainer>
        <S.TitleContainer>
          <C.WhiteContainer title={title} sort={sort}>
            <S.ContentsButtonContainer>
              {hasButton && (
                <>
                  <C.ContentsButton>편집</C.ContentsButton>
                  <C.ContentsButton>추가</C.ContentsButton>
                  <C.ContentsButton>역사</C.ContentsButton>
                </>
              )}
            </S.ContentsButtonContainer>
          </C.WhiteContainer>
        </S.TitleContainer>

        <S.DetailContent>
          <S.DetailCenter>
            {children}
            {/*padding-top: auto; 설정하여 height에 맞게 증가*/}
          </S.DetailCenter>
        </S.DetailContent>
      </S.PageContainer>
    </S.PageCenter>
  );
}

export default PageContainer;
