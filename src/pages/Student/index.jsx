import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "STUDENT" });

  if (!boardList) return;

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="학생"
        sort="학생"
        hasPostButton
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        url="/post"
      >
        {boardList.map(item => (
          <React.Fragment key={item.id}>
            <S.StudentBox>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.StudentTitle>{item.title}</S.StudentTitle>
              </Link>
            </S.StudentBox>
          </React.Fragment>
        ))}
      </C.PageContainer>

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
