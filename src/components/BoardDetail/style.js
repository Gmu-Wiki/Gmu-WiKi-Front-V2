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
  display: flex;
  margin-left: 68%;
  width: 60%;
`;

export const Date = styled.p`
  font-size: 1rem;
  margin-left: 10px;
`;
