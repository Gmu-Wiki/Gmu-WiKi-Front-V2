import React from "react";
import * as C from "../../components";

export default function Student() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="학생" sort="학생" hasPostButton></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
