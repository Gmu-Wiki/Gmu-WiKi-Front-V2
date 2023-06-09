import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: fixed;
`;

export const ModalBox = styled.div`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginContainer = styled.div`
  width: 320px;
  height: 440px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  z-index: 101;

  & > svg {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
`;
export const LoginContent = styled.p`
  margin-top: 25px;
  font-size: 18px;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  gap: 10px;
`;

export const GAuthLoginButton = styled.button`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 1rem !important;
  width: 17rem !important;
  height: 3.125rem !important;
  white-space: nowrap !important;
  background: #2e80cc;
  color: white;
  cursor: pointer !important;
  font-size: 1rem !important;
  border-radius: 0.5rem;
  padding: 0.7rem 0 !important;
  font-weight: 600 !important;
  outline: none !important;
  border: none;
`;
