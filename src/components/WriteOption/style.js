import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  width: 25.4rem;
  background-color: none;
  margin-bottom: 8px;
  padding: 3px 10px;

  div {
    display: inline-block;
    svg {
      margin-left: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.275);
      }
    }

    span {
      display: none;
      position: absolute;
      max-width: 150px;
      border: 1px solid;
      border-radius: 5px;
      padding: 3px;
      font-size: 0.8em;
      color: #c0c0c0;
      background: #ffffff;
    }

    &:hover {
      span {
        display: block;
      }
    }
}

  .unFunctionIcon {
    svg {
      margin-left: 12px;
      cursor: default;
      width: 5px;

      &:hover {
        transform: scale(1);
      }
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    display: none;
  }
`;
