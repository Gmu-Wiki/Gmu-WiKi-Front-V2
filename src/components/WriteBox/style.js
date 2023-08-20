import styled from "styled-components";

export const WriteBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const WriteOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 4.7vh;
`;

export const ChangeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const EditButton = styled.button`
  width: 4.6vw;
  height: 5vh;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => (props.checked ? "none" : "")};
  color: #999999;
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  @media screen and (max-width: 1400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const PreviewButton = styled.button`
  width: 5vw;
  height: 5vh;
  color: #007eff;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => props.checked && "1px solid #ffffff"};
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  @media screen and (max-width: 1400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const WriteBox = styled.div`
  background-color: none;
  overflow-y: auto;
  border: 1px solid #c0c0c0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const RegisterButton = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #007eff;
  width: 8vw;
  height: 5vh;
  font-size: 1rem;
  margin: 20px 0;
  margin-left: auto;
  cursor: pointer;
`;
