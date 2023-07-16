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
  url
}) {
  return (
    <>
      <C.Header />
      <S.Page>
        <S.PageContainer>
          <S.TitleContainer>
            <span>G무위키:{title}</span>
            <S.ContentsButtonContainer>
              <>
                {hasEditButton && (
                  <Link to="/edit">
                    <C.ContentsButton>편집</C.ContentsButton>
                  </Link>
                )}
                {hasPostButton && (
                  <Link to={url}>
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
          </S.TitleContainer>
          <S.SubTitleContainer>
            <span>분류: </span>
            <span>{sort}</span>
          </S.SubTitleContainer>
          <div>{children}</div>
        </S.PageContainer>
        <C.RecentModified />
        <C.ScrollButton />
      </S.Page>
      <>
        <C.Footer />
      </>
    </>
  );
}

export default PageContainer;
