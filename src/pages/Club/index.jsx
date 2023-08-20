import React from "react";
import useBoard from "../../Hooks/useBoard";
import * as C from "../../components";
import * as S from "./style";

export default function Student() {
  const { boardList } = useBoard({ boardType: "CLUB" });

  if (!boardList) return null;

  const clubTypes = [
    { title: "전공 동아리", type: "MAJOR" },
    { title: "자율 동아리", type: "CA" }
  ];

  const renderBoardItems = clubType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === clubType)
      .sort((a, b) => a.title.localeCompare(b.title, "ko"));

    const handleBoardItemClick = boardId => {
      const boardUrl = `/board/${boardId}`;
      window.location.href = boardUrl;
    };

    return filteredItems.map(item => (
      <React.Fragment key={item.id}>
        <S.Box>
          <S.Title onClick={() => handleBoardItemClick(item.id)}>
            {item.title}
          </S.Title>
        </S.Box>
      </React.Fragment>
    ));
  };

  return (
    <C.PageContainer
      title="동아리"
      sort="동아리"
      hasPostButton={true}
      url="/post"
      hasTitle
    >
      {clubTypes.map(clubType => (
        <C.Detail hasNumber={false} title={clubType.title} key={clubType.type}>
          {renderBoardItems(clubType.type)}
        </C.Detail>
      ))}
    </C.PageContainer>
  );
}
