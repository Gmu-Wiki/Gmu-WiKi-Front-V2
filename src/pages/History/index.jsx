import React from "react";
import * as C from "../../components";
import useHistory from "../../Hooks/useHistory";
import useHistoryDetail from "../../Hooks/useHistoryDetail";

const History = () => {
  const { historyRecordList } = useHistory();
  const { title } = useHistoryDetail();

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={title} sort="역사">
        <C.HistoryItem boardRecordList={historyRecordList} />
      </C.PageContainer>
    </>
  );
};

export default History;
