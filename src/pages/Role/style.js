import styled from "styled-components";

export const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  border: solid 1px #c0c0c0;
  margin: 50px 0 10px 0;
  display: flex;
  align-items: center;
`;

export const RoleTitle = styled.div`
  font-weight: 700;
  color: #999;
  margin-left: 16px;
`;

export const RoleInput = styled.input`
  width: 20%;
  height: 60%;
  border: solid 1px #ddd;
  padding: 0 6px;
  color: #999;
  margin-left: 16px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  width: 20%;
  height: 60%;
  border: solid 1px #ddd;
  margin-left: 16px;
  outline: 0;
  color: #999;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 40vw;
`;
