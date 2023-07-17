import styled from "styled-components";

export const CategoryInput = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;

  span {
    color: #999999;
    font-size: 1rem;
    margin-right: 9px;
    font-weight: 600;
  }

  select {
    border: 1px solid #dddddd;
    width: 139.3px;
    height: 26px;
    outline: 0;
    color: #999999;
    margin-right: 13px;
    cursor: pointer;
  }
`;

export const TitleInput = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;

  span {
    color: #999999;
    font-size: 1rem;
    font-weight: 600;
    margin-right: 40px;
  }

  input {
    border: 1px solid #dddddd;
    width: 90%;
    height: 26px;
    padding-left: 10px;
    outline: 0;
    background-color: none;
  }
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      color: #999999;
      font-size: 1rem;
      font-weight: 600;
      line-height: 22px;
      margin: 0 42px 0 20px;
      
    }
  }

  textarea {
    border: 1px solid #dddddd;
    width: 90%;
    padding: 10px;
    outline: 0;
    background-color: none;
    resize: none;
    line-height: 22px;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
