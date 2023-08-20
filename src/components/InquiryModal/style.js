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

export const InquiryModalContainer = styled.div`
  width: 20vw;
  height: 33vh;
  z-index: 101;
  background: #ffffff;
  border: none;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 38px 18px 26px 18px;

  & > svg {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }

  h2 {
    color: #000000;
    font-size: 1.485rem;
  }

  p {
    color: #999999;
    font-weight: 300;
    width: 12vw;
    text-align: center;
    font-size: 1rem;
    line-height: 22px;
  }

  button {
    width: 100%;
    height: 36px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: #007eff;
    color: #ffffff;
    font-size: 0.912rem;
    font-weight: 400;
    cursor: pointer;
  }
`