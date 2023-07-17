import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as C from "../../components";
import { Link, useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";

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
  editUrl
}) {
  const { id } = useParams();
  const data = GetRole();

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

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
                  <Link to={`/${roleUrl}/${editUrl}/edit/${id}`}>
                    <C.ContentsButton>편집</C.ContentsButton>
                  </Link>
                )}
                {hasPostButton && (
                  <Link to={url}>
                    <C.ContentsButton>추가</C.ContentsButton>
                  </Link>
                )}
                {hasHistoryButton && (
                  <Link to={`/${roleUrl}/board/${id}/record`}>
                    <C.ContentsButton>역사</C.ContentsButton>
                  </Link>
                )}
                {hasDeleteButton && <button onClick={onClick}>삭제</button>}
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
