import React, { useState } from "react";
import * as C from "../../components";

const History = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-08 [12:10:23]",
      editor: "이운린",
    },
    {
      id: 2,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-07 [12:10:23]",
      editor: "한준",
    },
    {
      id: 3,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-06 [12:10:23]",
      editor: "이아론",
    },
    {
      id: 4,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-05 [12:10:23]",
      editor: "이힝힝",
    },
    {
      id: 5,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-04 [12:10:23]",
      editor: "이왕린",
    },
    {
      id: 6,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-03 [12:10:23]",
      editor: "윙운린",
    },
    {
      id: 7,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-02 [12:10:23]",
      editor: "이운왕",
    },
    {
      id: 8,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-01 [12:10:23]",
      editor: "한운린",
    },
    {
      id: 9,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-00 [12:10:23]",
      editor: "이아린",
    },
    {
      id: 10,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-10 [12:10:23]",
      editor: "이아론",
    },
    {
      id: 11,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-10 [12:10:23]",
      editor: "이운린하트",
    },
    {
      id: 12,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-10 [12:10:23]",
      editor: "전설속",
    },
    {
      id: 13,
      Title: "서주미 휴대폰 세탁기에 넣다",
      subTitle: "2023-06-10 [12:10:23]",
      editor: "그녀",
    },
  ]);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="서주미 휴대폰 세탁기에 넣다" sort="역사">
        <C.HistoryItem dummyData={dummyData} />
      </C.PageContainer>
    </>
  );
};

export default History;
