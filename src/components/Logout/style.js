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

export const LogoutContainer = styled.div`
  width: 320px;
  height: 440px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 101;

  & > svg {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
`;
export const LogoutContent = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 24px;
`;

export const LogoutTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    margin-top: 20px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 52px;
`;

export const NoButton = styled.button`
  color: #fff;
  background-color: #007eff;
  cursor: pointer;
  width: 15vw;
  height: 6vh;
  border-radius: 10px;
  border: none;
  font-size: 16px;
`;

export const YesButton = styled.button`
  color: #007eff;
  background: none;
  cursor: pointer;
  width: 15vw;
  height: 6vh;
  border-radius: 10px;
  border: 1px solid #007eff;
  margin-top: 12px;
  font-size: 16px;
`;
