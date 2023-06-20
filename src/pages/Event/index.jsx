import React from "react";
import * as C from "../../components";

export default function Event() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="사건" sort="사건" hasPostButton></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
