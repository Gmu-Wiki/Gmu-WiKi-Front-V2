import React from "react";
import * as C from "../../components";
import * as S from "./style";

function Main() {
  return (
    <>
      <C.Header />
      <C.PageContainer title="대문" sort="G무위키">
        <C.Explanation>
          <S.DetailCenter>
            <S.Title>
              <span>GSM 학생들이 가꾸어 나가는</span>
              <span className="point">지식의 나무</span>
            </S.Title>
            <S.Illusion>
              <span className="pointWord">G무위키 </span>
              <span>에 오신걸 환영합니다.</span>
            </S.Illusion>
            <S.Content>
              <span className="pointWord">G무위키는 </span>
              <span>GSM 학생들을 위한 위키입니다.</span>
            </S.Content>
          </S.DetailCenter>
        </C.Explanation>
      </C.PageContainer>
      <C.Footer />
    </>
  );
}

export default Main;
