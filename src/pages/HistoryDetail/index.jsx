import React from "react";
import * as C from "../../components";

const HistoryDetail = () => {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={"타이틀이요"} sort="역사">
        <C.Explanation>
          <C.HistoryDetail />
        </C.Explanation>
      </C.PageContainer>
    </>
  );
};

export default HistoryDetail;
