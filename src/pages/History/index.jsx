import React from "react";
import * as C from "../../components";
import useHistory from "../../Hooks/useHistory";

const History = () => {
  const { historyRecordList } = useHistory();

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={"제목이요"} sort="역사">
        <C.HistoryItem boardRecordList={historyRecordList} />
      </C.PageContainer>
    </>
  );
};

export default History;
