import React from "react";
import Header from "../../components/Header";
import WhiteContiner from "../../components/WhiteContainer";
import * as S from "./style";

function Main() {
  return (
    <>
      <Header />
      <S.PageCenter>
        <S.PageContainer>
          <WhiteContiner title="대문" sort="G무위키" />
          <S.DetailContent>
            <S.DetailCenter>
              <S.Explanation>
                <div className="explanationContent">asd</div>
              </S.Explanation>
            </S.DetailCenter>
          </S.DetailContent>
        </S.PageContainer>
      </S.PageCenter>
    </>
  );
}

export default Main;
