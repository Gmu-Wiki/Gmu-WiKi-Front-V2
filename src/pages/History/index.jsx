import React from "react";
import * as C from "../../components";
import useHistory from "../../Hooks/useHistory";
import { useParams } from "react-router-dom";

const History = ({ title }) => {
  const { id } = useParams();
  const { recordList } = useHistory({ id });
  console.log(recordList);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={title} sort="역사">
        <C.HistoryItem />
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
};

export default History;
