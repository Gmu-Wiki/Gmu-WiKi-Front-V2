import React from "react";
import * as S from "./style";
import * as I from "../../assets";
import { gauthLoginUrl } from "../../lib/GAuthLoginUrl";

function Login({ setShowLogin }) {
  function showLoginModal() {
    setShowLogin(prev => !prev);
  }

  return (
    <>
      <S.ModalOverlay onClick={showLoginModal} />
      <S.ModalBox>
        <S.LoginContainer>
          <I.X onClick={showLoginModal} />
          <S.LoginTitle>
            <I.LoginLogo />
            <S.LoginContent>GSM학생들이 가꿔나가는 위키</S.LoginContent>
          </S.LoginTitle>
          <S.GAuthLoginButton
            onClick={() => window.location.replace(gauthLoginUrl)}
          >
            <I.GAuthLogo />
            Continue with GAuth
          </S.GAuthLoginButton>
        </S.LoginContainer>
      </S.ModalBox>
    </>
  );
}

export default Login;
