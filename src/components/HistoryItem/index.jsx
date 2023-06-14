import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
const HistoryItem = ({ dummyData }) => {
    
  return (
    <>
      {dummyData.map((item) => (
        <S.Container key={item.id}>
          <Link to="/history"><S.SubTitle>{item.subTitle}</S.SubTitle></Link>
          {item.editor}
        </S.Container>
      ))}
    </>
  );
};

export default HistoryItem;
