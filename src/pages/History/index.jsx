import React from "react";
import { useParams } from "react-router-dom";
import { useContent } from "../../Hooks";
import useHistory from "../../Hooks/useHistory";
import * as C from "../../components";

const History = () => {
  const { id } = useParams();
  const { recordList } = useHistory({ id });
  const { title } = useContent({ id });

  return (
    <C.PageContainer title={title} sort="역사">
      <C.HistoryItem recordList={recordList} />
    </C.PageContainer>
  );
};

export default History;
