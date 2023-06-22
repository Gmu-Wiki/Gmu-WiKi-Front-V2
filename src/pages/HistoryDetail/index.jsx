import React from "react";
import * as C from "../../components";

const HistoryDetail = () => {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="서주미 휴대폰 세탁기에 넣다" sort="역사">
        <C.Explanation>
          <C.HistoryDetail />
        </C.Explanation>
      </C.PageContainer>
    </>
  );
};

export default HistoryDetail;
