import React from "react";
import * as S from "./style";
import * as C from "../../components";
import { Link } from "react-router-dom";

function PageContainer({
  children,
  title,
  sort,
  hasEditButton,
  hasPostButton,
  hasHistoryButton,
}) {
  return (
    <S.PageCenter>
      <S.PageContainer>
        <S.TitleContainer>
          <C.WhiteContainer title={title} sort={sort}>
            <S.ContentsButtonContainer>
              <>
                {hasEditButton && (
                  <Link to="/edit">
                    <C.ContentsButton>편집</C.ContentsButton>
                  </Link>
                )}
                {hasPostButton && (
                  <Link to="/post">
                    <C.ContentsButton>추가</C.ContentsButton>
                  </Link>
                )}
                {hasHistoryButton && (
                  <Link to="/history">
                    <C.ContentsButton>역사</C.ContentsButton>
                  </Link>
                )}
              </>
            </S.ContentsButtonContainer>
          </C.WhiteContainer>
        </S.TitleContainer>

        <S.DetailContent>
          <S.DetailCenter>{children}</S.DetailCenter>
        </S.DetailContent>
      </S.PageContainer>
    </S.PageCenter>
  );
}

export default PageContainer;
