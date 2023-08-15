import styled from "styled-components";

export const RecentModifiedContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  width: 12vw;
  height: fit-content;
  top: 6vw;

  @media screen and (max-width: 1000px) {
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
  padding-left: 22px;
`;

export const ModifiedItem = styled.div`
  width: 15vw;
  height: 4.5vh;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  border: solid 1px #c0c0c0;
  border-top: none;
  cursor: pointer;
`;

export const ModifiedItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  padding: 4px;
  color: #191919;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;

  @media screen and (max-width: 1600px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1450px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.4rem;
  }
`;

export const ModifiedItemTime = styled.p`
  font-size: 0.8rem;
  white-space: nowrap;
  color: #999999;

  @media screen and (max-width: 1450px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.4rem;
  }
`;
