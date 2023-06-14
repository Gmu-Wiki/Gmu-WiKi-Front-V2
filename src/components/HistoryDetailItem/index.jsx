import React from "react";
import * as S from "./style";
import * as C from "../index";

const HistoryDetailItem = () => {
  return (
    <>
      <C.Detail hasNumber={true} title={"개요"}>
        <S.Content>
          어느 새벽, 김새미는 목이 말라 물을 뜨러 정수기에 갔다. 물을 뜨는데
          멀리서 백혜인 언니로 추정되는 사람이 걸어왔다. 김새미는 반가움에
          엉덩이를 씰룩거리면서 춤을 췄다. 언니가 점점 다가오는데, 김새미는 문득
          그 사람이 백혜인 언니가 아니라는 사실을 깨달았다. 알고보니 물 뜨러 온
          박지예 언니였다..{" "}
        </S.Content>
      </C.Detail>

      <C.Detail hasNumber={true} title={"여담"}>
        <S.Content>
          어느 새벽, 김새미는 목이 말라 물을 뜨러 정수기에 갔다. 물을 뜨는데
          멀리서 백혜인 언니로 추정되는 사람이 걸어왔다. 김새미는 반가움에
          엉덩이를 씰룩거리면서 춤을 췄다. 언니가 점점 다가오는데, 김새미는 문득
          그 사람이 백혜인 언니가 아니라는 사실을 깨달았다. 알고보니 물 뜨러 온
          박지예 언니였다..{" "}
        </S.Content>
      </C.Detail>
    </>
  );
};

export default HistoryDetailItem;
