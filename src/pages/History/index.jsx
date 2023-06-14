import React, { useState } from "react";
import * as C from "../../components";

const History = () => {
  
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="서주미 휴대폰 세탁기에 넣다" sort="역사">
        <C.HistoryItem />
      </C.PageContainer>
    </>
  );
};

export default History;
