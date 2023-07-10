import React from "react";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";

export default function Teacher() {
  const data = GetRole();
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="선생님"
        sort="선생님"
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
