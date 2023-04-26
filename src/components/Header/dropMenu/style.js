import styled from "styled-components";

export const dropHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");
  width: 100%;
  background-color: #3e9dff;
  height: 150px;
  color: white;

  span {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 700;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
  }

  .notice {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .school {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 40px 0 40px;
  }

  .etc {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fontMove {
    margin-top: 15px;
  }
`;

export const noticeContent = styled.div``;

export const schoolContent = styled.div``;

export const etcContent = styled.div``;

export const dropMenu = styled.div`
  width: 100%;
  display: flex;
  margin-left: 16.5%;
`;
