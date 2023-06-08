import styled from "styled-components";

export const ChangeButtonContainer = styled.div`
  position: relative;
  top: 0.3%;
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
  height: 5vh;
  color: #007eff;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => (props.checked && "1px solid #ffffff")};
  cursor: pointer;
  font-size: 0.9rem;
  outline: none;
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


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  float: right;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20%;
`;

export const FileButtonContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    padding: 7px 30px;
    border: 1px solid #007eff;
    background-color: none;
    color: #007eff;
    cursor: pointer;
  }

  input {
    display: none;
  }
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
