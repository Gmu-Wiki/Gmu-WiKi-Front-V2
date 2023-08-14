import styled from "styled-components";

export const ChangeButtonContainer = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 1px;
`;

export const EditButton = styled.button`
  width: 4.6vw;
  height: 5vh;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => (props.checked ? "none" : "")};
  color: #999999;
  cursor: pointer;
  font-size: 0.9rem;
  outline: none;
`;

export const PreviewButton = styled.button`
  width: 5vw;
  height: 4.7vh;
  color: #007eff;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => props.checked && "1px solid #ffffff"};
  cursor: pointer;
  font-size: 0.8rem;
  outline: none;
`;

export const WriteOptions = styled.div`
  position: relative;
  top: 3px;
  width: 98.5%;
  display: flex;
  justify-content: space-between;
`;

export const WriteBox = styled.div`
  background-color: none;
  overflow-y: auto;
  border: 1px solid #c0c0c0;
  width: 97%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 15px;
  float: right;
`;

export const RegisterButton = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #007eff;
  width: 8vw;
  height: 5vh;
  font-size: 1rem;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;
