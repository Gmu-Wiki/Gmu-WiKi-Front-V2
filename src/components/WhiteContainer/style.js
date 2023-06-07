import styled from "styled-components";

export const WhiteContainerContent = styled.div`
  width: 1200px;
  height: auto;
  /* background-color: white; */
  margin-right: 200px;
  margin-top: 60px;
  /* border: 1px solid #c0c0c0; */
  border-top: 0;
  display: flex;
  justify-content: center;
`;

export const WhiteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerCenter = styled.div`
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 200px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    font-size: 40px;
    color: #636363;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 600;
  }
`;

export const ClassIfication = styled.div`
  width: 99%;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #c0c0c0;
  margin-top: 40px;
  padding: 10px 0 10px 10px;
  span {
    color: #007eff;
  }
`;
