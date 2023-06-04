import styled from "styled-components";

export const WriteBox = styled.div`
  background-color: none;
  overflow-y: auto;
  border: 1px solid #c0c0c0;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const EditButton = styled.button`
  width: 4.6vw;
  height: 5vh;
  background: none;
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => (props.checked ? "none" : "1px solid #c0c0c0")};
  color: #999999;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const PreviewButton = styled.button`
  width: 5vw;
  height: 5vh;
  background: none;
  color: #007eff;
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => (props.checked ? "none" : "1px solid #c0c0c0")};
  cursor: pointer;
  font-size: 0.9rem;
`;

export const RegisterButton = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #007eff;
  width: 8vw;
  height: 5vh;
  font-size: 1rem;
  margin-top: 20px;
  float: right;

  &:hover {
    cursor: pointer;
  }
`;
