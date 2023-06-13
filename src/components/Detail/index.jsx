import React, { useState } from "react";
import * as I from "../../assets";
import * as S from "./style";

export default function Detail({
  title,
  hasNumber,
  children,
  number,
  detailContent,
}) {
  const [detailActive, setDetailActice] = useState(true);
  return (
    <S.DetailContainer detailActive={detailActive}>
      <S.DetailTitleContainer>
        <div onClick={() => setDetailActice(prev => !prev)}>
          <I.Arrow />
        </div>
        {hasNumber && (
          <S.DetailNumber detailActive={detailActive}>{number}.</S.DetailNumber>
        )}
        <S.DetailTitle>{title}</S.DetailTitle>
      </S.DetailTitleContainer>
      <S.DetailBorder />
      {detailActive && (
        <S.DetailContent detailContent={detailContent}>
          {children}
        </S.DetailContent>
      )}
    </S.DetailContainer>
  );
}
