import React, { useState } from 'react';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as I from '../../image';
import Button from '../Button';
function Login({ showLogin, setShowLogin }) {
  function showLoginModal() {
    setShowLogin((prev) => !prev);
  }
  return (
    <>
      <S.ModalOverlay onClick={showLoginModal} />
      <S.LoginContainer>
        <I.X onClick={showLoginModal} />
        <S.LoginTitle>
          <I.LoginLogo />
          <S.LoginContent>GSM학생들이 가꿔나가는 위키</S.LoginContent>
        </S.LoginTitle>
        <Button width="268" height="50" backgroundColor="2E80CC">
          <S.LoginButton>
            <I.GAuthLogo />
            Continue with GAuth
          </S.LoginButton>
        </Button>
      </S.LoginContainer>
    </>
  );
}

export default Login;
