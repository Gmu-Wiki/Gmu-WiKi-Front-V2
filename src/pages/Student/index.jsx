import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";

export default function Student() {
  const role = GetRole();
  const { boardList } = useBoard({ boardType: "STUDENT" });

  if (!boardList) return null;

  const generations = [
    { title: "5기", type: "FIFTH" },
    { title: "6기", type: "SIXTH" },
    { title: "7기", type: "SEVENTH" }
  ];

  const handleBoardItemClick = boardId => {
    const boardUrl = `/board/${boardId}`;
    window.location.href = boardUrl;
  };

  const renderBoardItems = generationType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === generationType)
      .sort((a, b) => a.title.localeCompare(b.title, "ko"));

    return filteredItems.map(item => (
      <React.Fragment key={item.id}>
        <S.StudentBox onClick={() => handleBoardItemClick(item.id)}>
          <S.StudentTitle>{item.title}</S.StudentTitle>
        </S.StudentBox>
      </React.Fragment>
    ));
  };

  return (
    <C.PageContainer
      title="학생"
      sort="학생"
      hasPostButton={role === "관리자"}
      url="/post"
      hasTitle
    >
      {generations.map(generation => (
        <C.Detail
          hasNumber={false}
          title={generation.title}
          key={generation.type}
        >
          {renderBoardItems(generation.type)}
        </C.Detail>
      ))}
    </C.PageContainer>
  );
}
