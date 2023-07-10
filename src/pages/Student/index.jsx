import React from "react";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";

export default function Student() {
  const data = GetRole();
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="학생"
        sort="학생"
        hasPostButton
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
        url="/post"
      ></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
