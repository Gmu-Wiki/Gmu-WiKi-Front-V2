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
  width: 400px;
  height: 520px;
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
export const RefusalContent = styled.p`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  display: flex;
  margin-top: 1vw;
`;

export const InputRefusal = styled.textarea`
  height: 60%;
  width: 80%;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 16px;
  color: #575757;
  resize: none;
  background-color: #f1f1f5;
  margin-top: 1.8vw;
`;

export const YesButton = styled.button`
  color: #007eff;
  background: none;
  cursor: pointer;
  width: 80%;
  height: 10%;
  background-color: #007eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 2vw;
`;
