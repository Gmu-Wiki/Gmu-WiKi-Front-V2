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
        {boardList.map(item => (
          <React.Fragment key={item.id}>
            <S.ClubBox>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.ClubTitle>{item.title}</S.ClubTitle>
              </Link>
            </S.ClubBox>
          </React.Fragment>
        ))}
      </C.PageContainer>

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
