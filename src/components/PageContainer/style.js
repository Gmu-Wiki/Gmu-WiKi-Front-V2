import styled from "styled-components";

export const PageContainer = styled.div`
  width: 1120px;
  min-height: 80vh;
  height: auto;
  display: flex;
  background-color: white;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  border-top: 0;
  margin-left: 150px;
  padding-bottom: 100px;
`;

export const PageCenter = styled.div`
  display: flex;
  margin-right: 470px;
  justify-content: center;
  padding-top: 60px;
  margin-bottom: 30px;
`;

export const DetailContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const DetailCenter = styled.div`
  width: 89.5%;
`;

export const ContentsButtonContainer = styled.div`
  display: flex;
  gap: 1px;

  button {
    border: 2px solid #dddddd;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
`;
