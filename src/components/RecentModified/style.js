import styled from "styled-components";

export const RecentModifiedContainer = styled.div`
  position: fixed;
  right: 5%;
  top: 13%;
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
  font-size: 19px;
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
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px;
`;

export const ModifiedItemTime = styled.p`
  font-size: 12px;
  color: #999999;
`;
