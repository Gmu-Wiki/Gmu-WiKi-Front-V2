import React from "react";
import * as C from "../../components";

const HistoryDetail = ({ title }) => {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={title} sort="역사">
        <C.Explanation>
          <C.HistoryDetail />
        </C.Explanation>
      </C.PageContainer>
    </>
  );
};

export default HistoryDetail;
