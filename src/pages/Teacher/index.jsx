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
        {boardList.map(item => (
          <React.Fragment key={item.id}>
            <S.TeacherBox>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.TeacherTitle>{item.title}</S.TeacherTitle>
              </Link>
            </S.TeacherBox>
          </React.Fragment>
        ))}
      </C.PageContainer>

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
