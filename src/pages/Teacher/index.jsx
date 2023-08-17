import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";

export default function Student() {
  const data = GetRole();
  const { boardList } = useBoard({ boardType: "TEACHER" });

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

    const handleBoardItemClick = boardId => {
      const boardUrl = `/board/${boardId}`;
      window.location.href = boardUrl;
    };

    return filteredItems.map(item => (
      <React.Fragment key={item.id}>
        <S.Box onClick={() => handleBoardItemClick(item.id)}>
          <S.Title>{item.title}</S.Title>
        </S.Box>
      </React.Fragment>
    ));
  };

  return (
    <C.PageContainer
      title="선생님"
      sort="선생님"
      hasPostButton={data === "관리자"}
      url="/post"
      hasTitle
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
  );
}
