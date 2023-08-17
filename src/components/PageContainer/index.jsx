import React from "react";
import { Link, useParams } from "react-router-dom";
import * as C from "../../components";
import * as S from "./style";

function PageContainer({
  children,
  title,
  sort,
  hasEditButton,
  hasPostButton,
  hasHistoryButton,
  hasDeleteButton,
  url,
  onClick,
  editUrl,
  hasTitle
}) {
  const { id } = useParams();

  return (
    <>
      <>
        <C.Header />
      </>
      <S.Page>
        <S.PageContainer>
          <S.TitleContainer>
            <div>
              {hasTitle && <span>G무위키:</span>}
              <span>{title}</span>
            </div>
            <S.ContentsButtonContainer>
              <>
                {hasEditButton && (
                  <Link to={`/${editUrl}/edit/${id}`}>
                    <C.ContentsButton>편집</C.ContentsButton>
                  </Link>
                )}
                {hasPostButton && (
                  <Link to={url}>
                    <C.ContentsButton>추가</C.ContentsButton>
                  </Link>
                )}
                {hasHistoryButton && (
                  <Link to={`/board/${id}/record`}>
                    <C.ContentsButton>역사</C.ContentsButton>
                  </Link>
                )}
                {hasDeleteButton && (
                  <Link onClick={onClick}>
                    <C.ContentsButton>삭제</C.ContentsButton>
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
      <C.Footer />
    </>
  );
}

export default PageContainer;
