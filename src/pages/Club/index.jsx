import React from "react";
import * as C from "../../components";

export default function Club() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="동아리" sort="동아리"></C.PageContainer>
      <C.Footer />
    </>
  );
}
