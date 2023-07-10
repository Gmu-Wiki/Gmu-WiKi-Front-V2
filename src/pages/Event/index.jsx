import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "INCIDENT" });

  if (!boardList) return;

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="사건"
        sort="사건"
        hasPostButton
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        url="/post"
      >
        {boardList.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.PageContainer>

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
