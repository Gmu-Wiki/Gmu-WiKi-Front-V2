import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "SCHEDULE" });

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

  const renderBoardItems = month => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === month)
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
        title="학사일정"
        sort="학사일정"
        hasPostButton={data === "관리자"}
        url="/post"
      >
        {months.map((month, index) => (
          <C.Detail hasNumber={false} title={`${index + 1}월`} key={month}>
            {renderBoardItems(month)}
          </C.Detail>
        ))}
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
