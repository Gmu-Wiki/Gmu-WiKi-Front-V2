import styled from "styled-components";

export const RecentModifiedContainer = styled.div`
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  z-index: -1;
  top: 16%;
  right: 4%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.div`
  color: #ffffff;
  background-color: #007eff;
  line-height: 5vh;
  width: 15vw;
  height: 5vh;
  font-size: 1.2rem;
  text-align: center;
`;

export const ModifiedContents = styled.div``;

export const ModifiedItem = styled.div`
  width: 15vw;
  height: 4.5vh;
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
