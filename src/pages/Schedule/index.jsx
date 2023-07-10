import React from "react";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";

export default function Schedule() {
  const data = GetRole();
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="학사일정"
        sort="학사일정"
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
