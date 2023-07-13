import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "TEACHER" });

  if (!boardList) return;

  const general = boardList
    .filter(item => item.boardDetailType === "GENERAL")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const speciality = boardList
    .filter(item => item.boardDetailType === "SPECIALITY")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const other = boardList
    .filter(item => item.boardDetailType === "OTHER")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="선생님"
        sort="선생님"
        hasPostButton
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        url="/post"
      >
        <C.Detail hasNumber={false} title={"일반 교과 선생님"}>
          {general.map(item => (
            <React.Fragment key={item.id}>
              <S.Box>
                <Link to={`/${roleUrl}/board/${item.id}`}>
                  <S.Title>{item.title}</S.Title>
                </Link>
              </S.Box>
            </React.Fragment>
          ))}
        </C.Detail>
        <C.Detail hasNumber={false} title={"전문 교과 선생님"}>
          {speciality.map(item => (
            <React.Fragment key={item.id}>
              <S.Box>
                <Link to={`/${roleUrl}/board/${item.id}`}>
                  <S.Title>{item.title}</S.Title>
                </Link>
              </S.Box>
            </React.Fragment>
          ))}
        </C.Detail>
        <C.Detail hasNumber={false} title={"기타 부서 선생님"}>
          {other.map(item => (
            <React.Fragment key={item.id}>
              <S.Box>
                <Link to={`/${roleUrl}/board/${item.id}`}>
                  <S.Title>{item.title}</S.Title>
                </Link>
              </S.Box>
            </React.Fragment>
          ))}
        </C.Detail>
      </C.PageContainer>

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
