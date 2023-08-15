import React from "react";
import * as S from "./style";
import * as I from "../../assets";

function Logout({ setShowLogout, onConfirm }) {
  function showLogoutModal() {
    setShowLogout(prev => !prev);
  }
  const onClick = () => {
    setShowLogout(prev => !prev);
    onConfirm();
  };
  return (
    <>
      <S.ModalOverlay onClick={showLogoutModal} />
      <S.ModalBox>
        <S.LogoutContainer>
          <I.X onClick={showLogoutModal} />
          <S.LogoutTitle>
            <I.Logout />
            <S.LogoutContent>로그아웃 하시겠습니까?</S.LogoutContent>
          </S.LogoutTitle>
          <S.BtnContainer>
            <S.NoButton onClick={showLogoutModal}>아니요</S.NoButton>
            <S.YesButton onClick={onClick}>예</S.YesButton>
          </S.BtnContainer>
        </S.LogoutContainer>
      </S.ModalBox>
    </>
  );
}

export default Logout;
