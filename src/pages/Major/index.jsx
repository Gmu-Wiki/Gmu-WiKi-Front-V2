import React from "react";
import * as C from "../../components";

export default function Major() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="전공" sort="전공"></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
