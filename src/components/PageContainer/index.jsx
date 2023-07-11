import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as C from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { useCallback } from "react";
import { toast } from "react-toastify";
import API from "../../apis";

function PageContainer({
  children,
  title,
  sort,
  hasEditButton,
  hasPostButton,
  hasHistoryButton,
  hasDeleteButton,
  url
}) {
  const { id } = useParams();
  const data = GetRole();
  const navigate = useNavigate();

  const [roleUrl, setRoleUrl] = useState("");

  const boardDelete = useCallback(async () => {
    try {
      await API.delete(`/${roleUrl}/board/${id}`);

      toast.success("삭제 성공");
      navigate("/");
    } catch (e) {
      console.log(e);
      toast.error("글 삭제에 실패했습니다.");
    }
  }, [roleUrl, id, navigate]);

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      boardDelete();
    }
  };

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

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
                  <Link to={url}>
                    <C.ContentsButton>추가</C.ContentsButton>
                  </Link>
                )}
                {hasHistoryButton && (
                  <Link to={`/${roleUrl}/board/${id}/record`}>
                    <C.ContentsButton>역사</C.ContentsButton>
                  </Link>
                )}
                {hasDeleteButton && (
                  <button
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    삭제
                  </button>
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
