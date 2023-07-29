import styled from "styled-components";

export const Content = styled.p`
  width: 42vw;
  min-height: 30vh;
  margin-left: 20px;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  color: #191919;
  /* line-height: 20px; */

  a {
    color: #007eff;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 20px;
  }
`;

export const NTBox = styled.div`
  /* min-height: 50vh; */
  display: flex;
  margin-left: 40%;
`;

export const Name = styled.p`
  font-size: 1rem;
  margin-right: 10px;
`;

export const CreatedDate = styled.p`
  text-align: right;
  font-size: 1rem;
  color: #636363;
  font-weight: 400;
`;

export const BtnBox = styled.div`
  /* position: absolute; */
  display: flex;
  right: 0;
  left: 0;
  /* margin-left: 84%; */
`;

export const ApproveBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #007eff;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const RefusalBtn = styled.button`
  width: 80px;
  height: 40px;
  color: #007eff;
  border: 1px solid #007eff;
  background: none;
  margin-left: 12px;
  cursor: pointer;
`;
