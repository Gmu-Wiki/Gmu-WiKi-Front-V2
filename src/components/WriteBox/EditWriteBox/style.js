import styled from "styled-components";

export const EditWriteBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    color: #999999;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const CategoryInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => (props.type === "문의목적" ? "14.8vw" : "26vw")};
  margin-bottom: 10px;

  select {
    border: 1px solid #dddddd;
    width: 10vw;
    height: 25px;
    outline: none;
    color: #999999;
    font-weight: 300;
  }
`;

export const TitleInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
  margin-bottom: 10px;

  span {
    margin-left: 12px;
  }

  input {
    border: 1px solid #dddddd;
    width: 55.2vw;
    height: 25px;
    padding-left: 8px;
    outline: none;
    color: #191919;
  }
`;

export const ContentInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;

  textarea {
    width: 55.2vw;
    height: auto;
    padding: 8px;
    color: #191919;
    border: 1px solid #dddddd;
    font-size: 0.8rem;
    outline: none;
    resize: none;
    line-height: 22px;
    overflow-y: hidden;
  }
`;

export const LineNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 22px;
  margin-left: 20px;
`;
