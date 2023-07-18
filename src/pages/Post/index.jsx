import React from "react";
import * as C from "../../components";

function Post() {
  return (
    <C.PageContainer title="글쓰기" sort="G무위키" hasButton>
      <C.WriteBox />
    </C.PageContainer>
  );
}

export default Post;
