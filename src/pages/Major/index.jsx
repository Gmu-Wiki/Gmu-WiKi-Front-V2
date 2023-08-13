import React from "react";
import * as C from "../../components";
import * as S from "./style";
import useBoard from "../../Hooks/useBoard";

export default function Student() {
  const { boardList, roleUrl } = useBoard({ boardType: "MAJOR" });

  if (!boardList) return;

  const handleBoardItemClick = boardId => {
    const boardUrl = `/${roleUrl}/board/${boardId}`;
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
            <S.MajorBox onClick={() => handleBoardItemClick(item.id)}>
              <S.MajorTitle>{item.title}</S.MajorTitle>
            </S.MajorBox>
          </React.Fragment>
        ))}
      </C.Detail>
    </C.PageContainer>
  );
}
