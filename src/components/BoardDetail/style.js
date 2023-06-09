import styled from "styled-components";

export const Content = styled.p`
  width: 42vw;
  margin-left: 20px;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  color: #191919;
  line-height: 20px;

  a {
    color: #007eff;
  }

  img {
    align-items: center;
    width: 30vw;
    height: 45vh;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 20px;
  }
`;

export const NTBox = styled.div`
  margin-top: 10px;
  margin-left: 68%;
`;

export const Date = styled.p`
  text-align: right;
  font-size: 1rem;
  color: #636363;
  font-weight: 400;
`;
