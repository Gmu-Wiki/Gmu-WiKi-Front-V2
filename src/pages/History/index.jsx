import React from "react";
import * as C from "../../components";
import useHistory from "../../Hooks/useHistory";

const History = () => {

  const { boardRecordList } = useHistory();

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="서주미 휴대폰 세탁기에 넣다" sort="역사">
        <C.HistoryItem boardRecordList={boardRecordList} />
      </C.PageContainer>
    </>
  );
};

export default History;
