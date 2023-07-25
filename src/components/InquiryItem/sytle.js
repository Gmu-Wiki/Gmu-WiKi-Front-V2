import styled from "styled-components";

export const InquiryItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const InquiryItemWrapper = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-left: 4px solid #ddd;
  gap: 18px;
  padding: 10px 18px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    background-color: rgba(25, 25, 25, 0.04);
  }
`;
