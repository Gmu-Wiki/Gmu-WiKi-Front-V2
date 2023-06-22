import React from "react";
import * as S from "./style";
import * as C from "../index";
import useHistoryDetail from "../../Hooks/useHistoryDetail";

const HistoryDetailItem = () => {
  const { title, content, createDate, editDate } = useHistoryDetail();
  return (
    <>
      <S.DateBox>
        <S.CreateDate>생성 일자: {createDate}</S.CreateDate>
        <S.EditDate>최근 수정 시각: {editDate}</S.EditDate>
      </S.DateBox>

      <C.Detail hasNumber={false} title={title}>
        <S.Content>
          {content}
        </S.Content>
      </C.Detail>
    </>
  );
};

export default HistoryDetailItem;
