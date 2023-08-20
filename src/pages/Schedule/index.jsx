import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";

export default function Student() {
  const role = GetRole();
  const { boardList } = useBoard({ boardType: "SCHEDULE" });

  if (!boardList) return null;

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC"
  ];

  const handleBoardItemClick = boardId => {
    const boardUrl = `/board/${boardId}`;
    window.location.href = boardUrl;
  };

  const renderBoardItems = month => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === month)
      .sort((a, b) => a.title.localeCompare(b.title, "ko"));

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
      title="학사일정"
      sort="학사일정"
      hasPostButton={role === "관리자"}
      url="/post"
      hasTitle
    >
      {months.map((month, index) => (
        <C.Detail hasNumber={false} title={`${index + 1}월`} key={month}>
          {renderBoardItems(month)}
        </C.Detail>
      ))}
    </C.PageContainer>
  );
}
