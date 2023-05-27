import React from 'react';
import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";

function Post() {
    return (
        <>
          <C.Header />
            <C.PageContainer title="글쓰기" sort="G무위키">
                <C.WriteBox />
            </C.PageContainer>
        </>
    );
}

export default Post;