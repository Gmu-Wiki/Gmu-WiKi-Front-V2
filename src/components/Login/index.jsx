import React from "react";
import * as S from "./style";
import * as I from "../../assets";
import { gauthLoginUri } from "../../lib/GAuthLoginUrl";

function Login({ onClose }) {
  const onClick = () => {
    onClose();
  };

  return (
    <>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalBox>
        <S.LoginContainer>
          <I.X onClick={onClose} />
          <S.LoginTitle>
            <I.LoginLogo />
            <S.LoginContent>GSM학생들이 가꿔나가는 위키</S.LoginContent>
          </S.LoginTitle>
          <S.GAuthLoginButton
            onClick={() => window.location.replace(gauthLoginUri)}
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
