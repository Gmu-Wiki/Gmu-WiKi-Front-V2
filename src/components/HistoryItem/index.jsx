import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
const HistoryItem = ({ boardRecordList }) => {
    
  return (
    <>
      {boardRecordList.map((item) => (
        <S.Container key={item.id}>
          <Link to="/historydetail"><S.SubTitle>{item.subTitle}</S.SubTitle></Link>
          <S.Editor>수정자: {item.editor}</S.Editor>
        </S.Container>
      ))}
    </>
  );
};

export default HistoryItem;
