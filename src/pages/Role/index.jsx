import React from "react";
import * as S from "./style";
import * as C from "../../components";
import RoleImg1 from "../../imgs/RoleImg1.png";
import RoleImg2 from "../../imgs/RoleImg2.png";

export default function Role() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="권한" sort="권한">
        <img src={RoleImg1} alt="Role이미지1" />
        <S.RoleContainer>
          <S.InputContainer>
            <S.RoleTitle>이메일</S.RoleTitle>
            <S.RoleInput type="text" />
            <S.RoleTitle>권한</S.RoleTitle>
            <S.Select name="role" defaultValue="none">
              <option value="none">선택해주세요</option>
              <option value="admin">관리자</option>
              <option value="user">사용자</option>
            </S.Select>
          </S.InputContainer>
          <C.Button
            width="120"
            height="40"
            backgroundColor="#007EFF"
            color="#fff"
          >
            부여하기
          </C.Button>
        </S.RoleContainer>
        <img src={RoleImg2} alt="Role이미지2" />
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
