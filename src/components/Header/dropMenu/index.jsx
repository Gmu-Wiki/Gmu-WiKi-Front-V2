import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import GetRole from "../../../lib/GetRole";

function DropMenu({ onMouseEnter, onMouseLeave }) {
  const data = GetRole();

  return (
    <S.DropContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <S.DropMenu>
        <S.DropItem>
          <Link to="/notice">
            <span>공지사항</span>
          </Link>
          <Link to="/inquiryWrite">
            <span>문의</span>
          </Link>
          {data === "관리자" ? (
            <Link to="/inquiry">
              <span>문의 리스트</span>
            </Link>
          ) : null}
          {data === "관리자" ? (
            <Link to="/role">
              <span>권한 부여</span>
            </Link>
          ) : null}
        </S.DropItem>
        <S.DropItem>
          <Link to="/student">
            <span>학생</span>
          </Link>
          <Link to="/teacher">
            <span>선생님</span>
          </Link>
          <Link to="/club">
            <span>동아리</span>
          </Link>
          <Link to="/major">
            <span>전공</span>
          </Link>
        </S.DropItem>
        <S.DropItem>
          <Link to="/event">
            <span>사건</span>
          </Link>
          <Link to="/schedule">
            <span>학사일정</span>
          </Link>
          <Link to="https://github.com/Team-Ampersand">
            <span>깃허브</span>
          </Link>
        </S.DropItem>
      </S.DropMenu>
    </S.DropContainer>

    // <S.dropHeader onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    //   <S.dropMenu>
    //     <div className="center">
    //       <div>
    //         <div className="notice">
    //           <Link to="/notice">
    //             <span className="fontMove">공지사항</span>
    //           </Link>
    //           <Link to="/inquiryWrite">
    //             <span>문의</span>
    //           </Link>
    //           {data === "관리자" ? (
    //             <Link to="/inquiry">
    //               <span>문의 리스트</span>
    //             </Link>
    //           ) : null}
    //           {data === "관리자" ? (
    //             <Link to="/role">
    //               <span>권한 부여</span>
    //             </Link>
    //           ) : null}
    //         </div>
    //       </div>
    //       <div>
    //         <div className="school">
    //           <Link to="/student">
    //             <span className="fontMove">학생</span>
    //           </Link>
    //           <Link to="/teacher">
    //             <span>선생님</span>
    //           </Link>
    //           <Link to="/club">
    //             <span>동아리</span>
    //           </Link>
    //           <Link to="/major">
    //             <span>전공</span>
    //           </Link>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="etc">
    //           <Link to="/event">
    //             <span className="fontMove">사건</span>
    //           </Link>
    //           <Link to="/schedule">
    //             <span>학사일정</span>
    //           </Link>
    //           <a href="https://github.com/Team-Ampersand" target="_blank">
    //             <span>깃허브</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div></div>
    //   </S.dropMenu>
    // </S.dropHeader>
  );
}

export default DropMenu;
