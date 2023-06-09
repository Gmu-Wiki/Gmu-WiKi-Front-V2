import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "CLUB" });

  if (!boardList) return;

  const major = boardList.filter(item => item.boardDetailType === "MAJOR");
  const ca = boardList.filter(item => item.boardDetailType === "CA");

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="동아리"
        sort="동아리"
        hasPostButton
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        url="/post"
      >
        <C.Detail hasNumber={false} title={"전공 동아리"}>
          {major.map(item => (
            <React.Fragment key={item.id}>
              <S.Box>
                <Link to={`/${roleUrl}/board/${item.id}`}>
                  <S.Title>{item.title}</S.Title>
                </Link>
              </S.Box>
            </React.Fragment>
          ))}
        </C.Detail>
        <C.Detail hasNumber={false} title={"자율 동아리"}>
          {ca.map(item => (
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
