import React from "react";
import * as S from "./style.js";

function WhiteContiner({ title, sort }) {
  return (
    <S.WhiteContainer>
      <S.WhiteCotainerContent>
        <S.ContainerCenter>
          <S.Title>
            <span>G무위키:{title}</span>
          </S.Title>
          <S.ClassIfication>
            <div classification>
              분류 : <span>{sort}</span>
            </div>
          </S.ClassIfication>
          <S.Explanation>
            <div className="explanationContent">d</div>
          </S.Explanation>
        </S.ContainerCenter>
      </S.WhiteCotainerContent>
    </S.WhiteContainer>
  );
}

export default WhiteContiner;
