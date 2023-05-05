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
    margin-bottom: 15px;
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

export const dropMenu = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-around;
  .center {
    display: flex;
    margin-right: 380px;
  }
`;
