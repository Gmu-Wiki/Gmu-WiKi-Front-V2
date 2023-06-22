import React from "react";
import * as S from "./style";
import * as C from "../index";
import useHistoryDetail from "../../Hooks/useHistoryDetail";

const HistoryDetailItem = () => {
  const { title, content, createDate, editDate } = useHistoryDetail();
  return (
    <>
      <S.DateBox>
        <S.CreateDate>생성 일자: 2023-06-12 08:11:11</S.CreateDate>
        <S.EditDate>최근 수정 시각: 2023-06-12 08:11:11</S.EditDate>
      </S.DateBox>

      <C.Detail hasNumber={false} title={"개요"}>
        <S.Content>
          어느 새벽, <a>김새미</a>는 목이 말라 물을 뜨러 정수기에 갔다. 물을
          뜨는데 멀리서 백혜인 언니로 추정되는 사람이 걸어왔다. 김새미는
          반가움에 엉덩이를 씰룩거리면서 춤을 췄다. 언니가 점점 다가오는데,
          김새미는 문득 그 사람이 백혜인 언니가 아니라는 사실을 깨달았다.
          알고보니 물 뜨러 온 박지예 언니였다..
        </S.Content>
      </C.Detail>

      <C.Detail hasNumber={false} title={"여담"}>
        <S.Content>
          어느 새벽, 김새미는 목이 말라 물을 뜨러 정수기에 갔다. 물을 뜨는데
          멀리서 백혜인 언니로 추정되는 사람이 걸어왔다. 김새미는 반가움에
          엉덩이를 씰룩거리면서 춤을 췄다. 언니가 점점 다가오는데, 김새미는 문득
          그 사람이 백혜인 언니가 아니라는 사실을 깨달았다. 알고보니 물 뜨러 온
          박지예 언니였다..
        </S.Content>
      </C.Detail>
    </>
  );
};

export default HistoryDetailItem;
