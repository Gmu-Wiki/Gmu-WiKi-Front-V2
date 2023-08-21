import React from "react";
import useBoard from "../../Hooks/useBoard";
import * as C from "../../components";
import * as S from "./style";

export default function Student() {
  const { boardList } = useBoard({ boardType: "MAJOR" });

  if (!boardList) return;

  const handleBoardItemClick = boardId => {
    const boardUrl = `/board/${boardId}`;
    window.location.href = boardUrl;
  };

  return (
    <C.PageContainer
      title="전공"
      sort="전공"
      hasPostButton={true}
      url="/post"
      hasTitle
    >
      <C.Detail hasNumber={false} title={"전공"}>
        {boardList.map(item => (
          <React.Fragment key={item.id}>
            <S.MajorBox>
              <S.MajorTitle onClick={() => handleBoardItemClick(item.id)}>
                {item.title}
              </S.MajorTitle>
            </S.MajorBox>
          </React.Fragment>
        ))}
      </C.Detail>
    </C.PageContainer>
  );
}
