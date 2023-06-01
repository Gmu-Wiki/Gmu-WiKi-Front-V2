import React from "react";
import * as S from "./style";
import * as I from "../../assets";
import * as C from "../../components";
import useGAuth from "../../Hooks/useGAuth";

function Login({ showLogin, setShowLogin }) {
  function showLoginModal() {
    setShowLogin(prev => !prev);
  }

  const { storeAccessToken, storeRefreshToken } = useGAuth();

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
          <C.Button width="268" height="50" backgroundColor="2E80CC">
            <S.LoginButton>
              <I.GAuthLogo />
              Continue with GAuth
            </S.LoginButton>
          </C.Button>
        </S.LoginContainer>
      </S.ModalBox>
    </>
  );
}

export default Login;
