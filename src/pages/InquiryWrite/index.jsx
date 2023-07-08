import React from "react";
import * as C from "../../components";

const History = () => {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="문의" sort="G무위키">
        <C.InquiryWrite />
      </C.PageContainer>
    </>
  );
};

export default History;
