import React from "react";
import * as C from "../../components";

export default function Notice() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="공지" sort="공지"></C.PageContainer>
      <C.Footer />
    </>
  );
}
