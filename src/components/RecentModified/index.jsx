import React, { useState } from "react";
import * as S from "./style";

export default function RecentModified() {
  const [test, setTest] = useState([
    {
      id: 1,
      title: "서주미",
      latestTime: "1시간",
    },
    {
      id: 2,
      title: "서주미",
      latestTime: "13시간",
    },
    {
      id: 3,
      title: "서주미",
      latestTime: "2시간",
    },
    {
      id: 4,
      title: "서주미",
      latestTime: "3시간",
    },
    {
      id: 5,
      title: "서주미",
      latestTime: "4시간",
    },
    {
      id: 6,
      title: "서주미",
      latestTime: "5시간",
    },
    {
      id: 7,
      title: "서주미",
      latestTime: "6시간",
    },
    {
      id: 8,
      title: "이운린",
      latestTime: "7시간",
    },
    {
      id: 9,
      title: "이아론",
      latestTime: "8시간",
    },
    {
      id: 10,
      title: "한준",
      latestTime: "9시간",
    },
  ]);
  return (
    <S.RecentModifiedContainer>
      <S.Title>최근 수정된 글</S.Title>
      <S.ModifiedContents>
        {test.map(({ id, title, latestTime }) => (
          <S.ModifiedItem key={id}>
            <S.ModifiedItemTitle>{title}</S.ModifiedItemTitle>
            <S.ModifiedItemTime>{latestTime}</S.ModifiedItemTime>
          </S.ModifiedItem>
        ))}
      </S.ModifiedContents>
    </S.RecentModifiedContainer>
  );
}
