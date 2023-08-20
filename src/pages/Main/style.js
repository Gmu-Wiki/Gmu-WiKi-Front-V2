import styled from "styled-components";

export const DetailCenter = styled.div`
  height: auto;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 20px;

  span {
    color: #636363;
  }

  .pointWord {
    color: #007eff;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 22px;
  margin: 20px 0 10px 0;

  .point {
    color: #007eff;
    font-weight: 600;
    margin-left: 4px;
  }
`;

export const Illusion = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  font-size: 14px;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;

  .contentCenter {
    display: flex;
    justify-content: center;
  }

  .pointContent {
    margin-top: 5px;
  }
`;

export const EmailLink = styled.a`
  color: #007eff;
`;

export const Outline = styled.div`
  margin-left: 28px;
`;

export const OutlineContent = styled.div`
  margin-bottom: 30px;
`;

export const SchoolVideoContainer = styled.div`
  position: relative;
  padding-top: 56%;
  width: 100%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Lesson = styled.div`
  padding: 24px 28px 24px 20px;
  background-color: #f1f1f5;
  border-left: 8px solid #007eff;
  width: 300px;
  text-align: center;
`;

export const SchoolSonContainer = styled.div`
  text-align: center;
  img {
    object-fit: contain;
  }
`;

export const DepartmentContainer = styled.div`
  margin-left: 28px;
`;

export const DepartmentTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
`;

export const DepartmentContent = styled.div`
  margin-top: 20px;
`;

export const IntroCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
`;

export const SchoolTitleContent = styled.div`
  width: 44vw;
  height: 80px;
  font-weight: 700;
  background-color: #007eff;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .englishName {
    font-size: 14px;
    @media screen and (max-width: 1000px) {
      font-size: 0.8;
    }

    @media screen and (max-width: 800px) {
      font-size: 0.4rem;
    }
  }
  .koreanName {
    font-size: 24px;
    margin-bottom: 5px;
    @media screen and (max-width: 1000px) {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const SchoolImg = styled.img`
  width: 44vw;
  height: 24vw;
  @media screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
  }
`;
