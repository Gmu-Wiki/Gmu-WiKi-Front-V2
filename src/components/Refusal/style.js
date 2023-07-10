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

export const RefusalContainer = styled.div`
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
export const RefusalContent = styled.p`
  margin-top: 25px;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
`;

export const InputRefusal = styled.textarea`
  height: 20%;
  width: 80%;
  outline: none;
  margin-bottom: 100px;
  resize: none;
`;

export const RefusalTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 38px;
`;

export const YesButton = styled.button`
  color: #007eff;
  background: none;
  cursor: pointer;
  width: 16vw;
  height: 7vh;
  border-radius: 8px;
  border: 1px solid #007eff;
  margin-top: 12px;
`;
