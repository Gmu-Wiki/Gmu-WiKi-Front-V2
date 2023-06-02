import styled from "styled-components";

export const CategoryInput = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;

  span {
    color: #999999;
    font-size: 1rem;
    margin-right: 10px;
    font-weight: 600;
  }

  select {
    border: 1px solid #dddddd;
    width: 16%;
    outline: 0;
    background-color: none;
    color: #999999;

    option {
      background-color: none;
      &:hover {
        background-color: #e4f1ff;
      }
    }
  }
`;

export const TitleInput = styled.div`
  width: 38%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #999999;
    font-size: 1rem;
    font-weight: 600;
  }

  input {
    border: 1px solid #dddddd;
    width: 80%;
    height: 26px;
    padding-left: 10px;
    outline: 0;
    background-color: none;
  }
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    span {
      color: #999999;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 6px;
    }
  }

  textarea {
    box-sizing: border-box;
    border: 1px solid #dddddd;
    width: 92.4%;
    padding: 10px;
    outline: 0;
    background-color: none;
    resize: none;
  }
`;