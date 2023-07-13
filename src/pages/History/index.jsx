import React, { useEffect, useState } from "react";
import * as C from "../../components";
import useHistory from "../../Hooks/useHistory";
import { useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { useContent } from "../../Hooks";

const History = () => {
  const { id } = useParams();
  const { recordList } = useHistory({ id });
  const { title } = useContent({ id });
  const data = GetRole();
  const [roleUrl, setRoleUrl] = useState("");

  console.log(recordList);

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={title} sort="역사">
        <C.HistoryItem recordList={recordList} roleUrl={roleUrl} />
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
};

export default History;
