import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "TEACHER" });

  if (!boardList) return null;

  const boardTypes = [
    { title: "일반 교과 선생님", type: "GENERAL" },
    { title: "전문 교과 선생님", type: "SPECIALITY" },
    { title: "기타 부서 선생님", type: "OTHER" }
  ];

  const renderBoardItems = boardType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === boardType)
      .sort((a, b) => a.title.localeCompare(b.title, "ko"));

    return filteredItems.map(item => (
      <React.Fragment key={item.id}>
        <S.Box>
          <Link to={`/${roleUrl}/board/${item.id}`}>
            <S.Title>{item.title}</S.Title>
          </Link>
        </S.Box>
      </React.Fragment>
    ));
  };

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="선생님"
        sort="선생님"
        hasPostButton={data === "관리자"}
        url="/post"
      >
        {boardTypes.map(boardType => (
          <C.Detail
            hasNumber={false}
            title={boardType.title}
            key={boardType.type}
          >
            {renderBoardItems(boardType.type)}
          </C.Detail>
        ))}
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
