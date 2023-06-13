import React from "react";
import * as C from "../../components";

export default function Teacher() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="선생님"
        sort="선생님"
        hasPostButton
      ></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
