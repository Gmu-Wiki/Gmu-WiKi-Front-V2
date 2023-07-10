import React from "react";
import * as C from "../../components";

const History = () => {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="공지" sort="공지">
        <C.NoticeWrite />
      </C.PageContainer>
    </>
  );
};

export default History;
