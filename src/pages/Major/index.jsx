import React from "react";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";

export default function Major() {
  const data = GetRole();
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="전공"
        sort="전공"
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
