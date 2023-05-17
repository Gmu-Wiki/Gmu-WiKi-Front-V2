import React, { useState } from "react";
import * as S from "./style";

function DropMenu() {
  return (
    <>
      <S.dropHeader>
        <S.dropMenu>
          <div className="center">
            <div>
              <div className="notice">
                <span className="fontMove">공지사항</span>
                <span>문의</span>
              </div>
            </div>
            <div>
              <div className="school">
                <span className="fontMove">학생</span>
                <span>선생님</span>
                <span>동아리</span>
                <span>전공</span>
              </div>
            </div>
            <div>
              <div className="etc">
                <span className="fontMove">사건</span>
                <span>학사일정 </span>
              </div>
            </div>
          </div>
          <div></div>
        </S.dropMenu>
      </S.dropHeader>
    </>
  );
}

export default DropMenu;
