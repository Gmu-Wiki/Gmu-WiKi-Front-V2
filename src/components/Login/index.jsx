import React from "react";
import * as S from "./style";
import * as I from "../../assets";
import { GauthProvider } from "@msg-team/gauth-react";
import "@msg-team/gauth-react/dist/index.css";
import EnvConfig from "../../apis/EnvConfig";
import GAuthLoginButton from "../GAuthButton.js";

function Login({ showLogin, setShowLogin }) {
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
          <GauthProvider
            redirectUri={EnvConfig.REDIRECTURL}
            clientId={EnvConfig.CLIENTID}
            onSuccess={async code => {
              console.log(code);
            }}
          >
            <GAuthLoginButton />
          </GauthProvider>
        </S.LoginContainer>
      </S.ModalBox>
    </>
  );
}

export default Login;
