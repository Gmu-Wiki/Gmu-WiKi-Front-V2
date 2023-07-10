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
  margin-left: 70%;
`;

export const Name = styled.p`
  font-size: 1rem;
`;

export const InquiryType = styled.p`
  font-size: 0.8rem;
  margin-left: 20px;
  color: #999;
`;

export const BtnBox = styled.div`
  display: flex;
  margin-left: 84%;
`;

export const ApproveBtn = styled.button`
  color: #999;
  border: 1px solid #999;
  background: none;
  width: 60px;
  height: 30px;
  cursor: pointer;

  :hover {
    border: 1px dotted #999;
  }
`;

export const RefusalBtn = styled.button`
  color: #999;
  border: 1px solid #999;
  background: none;
  width: 60px;
  height: 30px;
  margin-left: 5px;
  cursor: pointer;

  :hover {
    border: 1px dotted #999;
  }
`;
