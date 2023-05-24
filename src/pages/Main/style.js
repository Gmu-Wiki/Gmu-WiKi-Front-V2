import styled from "styled-components";

export const DetailCenter = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 20px;

  span {
    color: #636363;
  }

  .pointWord {
    color: #007eff;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 22px;
  margin: 20px 0 10px 0;

  .point {
    color: #007eff;
    font-weight: 600;
    margin-left: 4px;
  }
`;

export const Illusion = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  font-size: 14px;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;

  .contentCenter {
    display: flex;
    justify-content: center;
  }

  .pointContent {
    margin-top: 5px;
  }
`;
