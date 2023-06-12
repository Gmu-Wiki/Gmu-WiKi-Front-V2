import React from "react";
import * as C from "../../components";

export default function Schedule() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="학사일정" sort="학사일정"></C.PageContainer>
      <C.Footer />
    </>
  );
}
