import React from "react";
import useBoard from "../../Hooks/useBoard";
import * as C from "../../components";
import * as S from "./style";

export default function Student() {
  const { boardList } = useBoard({ boardType: "INCIDENT" });

  if (!boardList) return null;

  const years = [
    { title: "2023", type: "TWENTY_THIRD" },
    { title: "2022", type: "TWENTY_SECOND" }
  ];

  const renderBoardItems = yearType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === yearType)
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
      title="사건"
      sort="사건"
      hasPostButton={true}
      url="/post"
      hasTitle
    >
      {years.map(year => (
        <C.Detail hasNumber={false} title={year.title} key={year.type}>
          {renderBoardItems(year.type)}
        </C.Detail>
      ))}
    </C.PageContainer>
  );
}
