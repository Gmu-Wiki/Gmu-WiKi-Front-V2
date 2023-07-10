import React from "react";
import * as S from "./style";
import * as C from "../index";

const HistoryDetailItem = () => {
  return (
    <>
      <S.DateBox>
        <S.CreateDate>생성 일자: 11111111</S.CreateDate>
        <S.EditDate>최근 수정 시각: 11111111</S.EditDate>
      </S.DateBox>

      <C.Detail hasNumber={false} title={"제목이요"}>
        <S.Content>ㄴ용이요</S.Content>
      </C.Detail>
    </>
  );
};

export default HistoryDetailItem;
