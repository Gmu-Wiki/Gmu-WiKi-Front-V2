import styled from "styled-components";

export const PageContainer = styled.div`
  width: 1120px;
  height: auto;
  display: flex;
  background-color: white;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  border-top: 0;
  margin-left: 150px;

  .a {
    width: 90%;
  }
`;

export const PageCenter = styled.div`
  display: flex;
  margin-right: 470px;
  justify-content: center;
  padding-top: 60px;
`;

export const DetailContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DetailCenter = styled.div`
  width: 94%;
`;

export const Explanation = styled.div`
  padding-top: 30px;
  width: 100%;

  .explanationContent {
    width: 100%;
    border: 1px solid #c0c0c0;
    border-left: 0;
    border-right: 0;
  }
`;
