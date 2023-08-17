import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  width: 70vw;
  min-height: calc(100vh - 150px);
  height: auto;
  background-color: #fff;
  margin: 0 4vw 20px 8vw;
  padding: 0 3vw 5vw 3vw;
  border-top: none;
  border: 1px solid #c0c0c0;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
    min-height: calc(100vh - 130px);
  }
`;

export const Page = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  color: #636363;
  font-size: 2.4rem;
  font-weight: 600;
  margin: 3vw 0 2vw 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const SubTitleContainer = styled.div`
  border: 1px solid #d9d9d9;
  height: 5vh;
  line-height: 5vh;
  padding: 0 1vw;
  color: #191919;
  margin-bottom: 32px;

  span:nth-child(2) {
    color: #007eff;
  }
`;

export const ContentsButtonContainer = styled.div`
  display: flex;
  gap: 1px;

  button {
    border: 2px solid #dddddd;
  }
`;
