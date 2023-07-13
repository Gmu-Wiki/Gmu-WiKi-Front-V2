import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "CLUB" });

  if (!boardList) return null;

  const clubTypes = [
    { title: "전공 동아리", type: "MAJOR" },
    { title: "자율 동아리", type: "CA" }
  ];

  const renderBoardItems = clubType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === clubType)
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
        title="동아리"
        sort="동아리"
        hasPostButton={data === "관리자"}
        url="/post"
      >
        {clubTypes.map(clubType => (
          <C.Detail
            hasNumber={false}
            title={clubType.title}
            key={clubType.type}
          >
            {renderBoardItems(clubType.type)}
          </C.Detail>
        ))}
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
