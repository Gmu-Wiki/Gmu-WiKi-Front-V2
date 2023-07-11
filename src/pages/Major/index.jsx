import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "MAJOR" });

  if (!boardList) return;

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="전공"
        sort="전공"
        hasPostButton
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        url="/post"
      >
        <C.Detail hasNumber={false} title={"전공"}>
          {boardList.map(item => (
            <React.Fragment key={item.id}>
              <S.MajorBox>
                <Link to={`/${roleUrl}/board/${item.id}`}>
                  <S.MajorTitle>{item.title}</S.MajorTitle>
                </Link>
              </S.MajorBox>
            </React.Fragment>
          ))}
        </C.Detail>
      </C.PageContainer>

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
