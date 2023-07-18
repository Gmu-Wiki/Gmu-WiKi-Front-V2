import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "INCIDENT" });

  if (!boardList) return null;

  const years = [
    { title: "2023", type: "TWENTY_THIRD" },
    { title: "2022", type: "TWENTY_SECOND" }
  ];

  const renderBoardItems = yearType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === yearType)
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
    <C.PageContainer title="사건" sort="사건" hasPostButton={true} url="/post">
      {years.map(year => (
        <C.Detail hasNumber={false} title={year.title} key={year.type}>
          {renderBoardItems(year.type)}
        </C.Detail>
      ))}
    </C.PageContainer>
  );
}
