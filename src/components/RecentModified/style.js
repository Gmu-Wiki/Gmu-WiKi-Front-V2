import styled from "styled-components";

export const RecentModifiedContainer = styled.div`
  position: fixed;
  right: 4.5%;
  top: 12.5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const Title = styled.div`
  color: #ffffff;
  background-color: #007eff;
  text-align: center;
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 28px;
  font-size: 1.2rem;
`;

export const ModifiedContents = styled.div``;

export const ModifiedItem = styled.div`
  width: 250px;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 28px;
  border: solid 1px #c0c0c0;
  border-top: none;
`;

export const ModifiedItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px;
`;

export const ModifiedItemTime = styled.p`
  font-size: 0.8rem;
  color: #999999;
`;
