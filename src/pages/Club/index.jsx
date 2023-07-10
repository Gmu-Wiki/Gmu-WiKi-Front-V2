import React from "react";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";

export default function Club() {
  const data = GetRole();
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="동아리"
        sort="동아리"
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        hasPostButton
        url="/post"
      ></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
