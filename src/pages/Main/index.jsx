import React from "react";
import * as C from "../../components";
import * as S from "./style";
import SchoolImg from "../../imgs/SchoolImg.png";
import SchoolSong from "../../imgs/SchoolSong.png";
import { schoolGraphData, historyGraphData } from "../../lib/mainPageData";

document.cookie = "crossCookie=bar; SameSite=None; Secure";

function Main() {
  const schoolGraphs = schoolGraphData.map((data, index) => (
    <C.Graph
      key={index}
      titleChild={data.titleChild}
      contentChild={data.contentChild}
      backgroundColor={data.backgroundColor}
      style={{ marginTop: "300px" }}
    />
  ));

  const historyGraphs = historyGraphData.map((data, index) => (
    <C.Graph
      key={index}
      titleChild={data.titleChild}
      contentChild={data.contentChild}
      backgroundColor={data.backgroundColor}
      color={data.color}
      contentColor={data.color}
    />
  ));

  return (
    <C.PageContainer title="대문" sort="G무위키">
      <C.Explanation>
        <S.DetailCenter>
          <S.Title>
            <span>GSM 학생들이 가꾸어 나가는</span>
            <span className="point">지식의 나무</span>
          </S.Title>
          <S.Illusion>
            <span className="pointWord">G무위키 </span>
            <span>에 오신걸 환영합니다!</span>
          </S.Illusion>
          <S.Content>
            <div>
              <span className="pointWord">G무위키&nbsp;</span>
              <span>GSM 학생들을 위한 위키입니다.</span>
            </div>
            <span className="pointContent">
              검증되지 않았거나 편향된 내용이 있을 수 있습니다.
            </span>
          </S.Content>
        </S.DetailCenter>
      </C.Explanation>
      <S.IntroCenter>
        <S.SchoolTitleContent>
          <div className="koreanName">광주소프트웨어마이스터고등학교</div>
          <div className="englishName">
            Gwangju Software Meister High School
          </div>
        </S.SchoolTitleContent>
        <S.SchoolImg src={SchoolImg} alt="학교 이미지" loading="lazy" />
        {schoolGraphs}
      </S.IntroCenter>
      <C.Detail hasNumber={true} number={1} title={"개요"}>
        <S.Outline>
          <S.OutlineContent>
            광주소프트웨어마이스터고만의 위키, G무위키가 출시되었습니다!
            <br />
            재학생이라면 누구든지 G무위키를 이용할 수 있습니다.
            <br />
            <br />
            타인의 의견을 무시하는 행위, 차별과 비하를 조장하는 행위는 용인되지
            않으며, 이러한 행위를 할 시 제재될 수 있습니다.
            <br />
            문의 사항은{" "}
            <S.EmailLink href="mailto:Ampersand.public@gmail.com">
              Ampersand.public@gmail.com
            </S.EmailLink>
            으로 해 주시기 바랍니다.
          </S.OutlineContent>
          <S.SchoolVideoContainer>
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/FBEBPnWafTk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
          </S.SchoolVideoContainer>
        </S.Outline>
      </C.Detail>
      <C.Detail
        hasNumber={true}
        number={2}
        title={"역사"}
        detailContent={true}
        style={{ marginTop: "300px" }}
      >
        {historyGraphs}
      </C.Detail>
      <C.Detail hasNumber={true} number={3} title={"교훈"}>
        <S.Lesson>더불어 살아가는 사람다운 미래 인재</S.Lesson>
      </C.Detail>
      <C.Detail hasNumber={true} number={4} title={"교가"} detailContent={true}>
        <S.SchoolSonContainer>
          <img
            src={SchoolSong}
            alt="광주소프트웨어마이스터고등학교 교가 이미지"
            loading="lazy"
          />
        </S.SchoolSonContainer>
      </C.Detail>
      <C.Detail hasNumber={true} number={5} title={"학과운영"}>
        <S.DepartmentContainer>
          <div>
            현재, 1학년은 SW개발과, 임베디드SW과. 인공지능과, 2학년은 SW개발과,
            스마트IOT과. 3학년은 SW개발과, 임베디드 SW과로 운영되고 있다.
          </div>
          <div>
            <S.DepartmentTitle>SW개발과</S.DepartmentTitle>
            <S.DepartmentContent>
              SW 개발의 계획에서부터 분석, 설계, 코딩, 테스팅, 유지 보수까지
              전반적 개발과정을 학습하고
              <br />
              산업수요에 부합하는 맞춤형 실무교육을 통해 정보시스템 개발과
              웹/모바일, 콘텐츠 제작이 가능하도록 전문 인재를 양성한다.
            </S.DepartmentContent>
            <S.DepartmentTitle>스마트 IOT과</S.DepartmentTitle>
            <S.DepartmentContent>
              사물 즉, 각종 전자 기기, 기계, 자동차, 선박, 항공 등 사물에내장된
              컴퓨터가 수행할 수 있는 SW를 개발한다.
              <br />즉 사물인터넷(IoT), 센서 네트워크(Sensor Network) 등 IT 융합
              SW를 설계, 개발이 가능한 인재를 양성한다.
            </S.DepartmentContent>
            <S.DepartmentTitle>인공지능과</S.DepartmentTitle>
            <S.DepartmentContent>
              인공지능, 빅데이터, 사물인터넷을 바탕으로 한 인공지능 기반 기술을
              교육하여 인공지능 서비스의 요구사항을 실현하기 위한
              <br />
              인공지능 플랫폼 구현, 인공지능 서비스 기획 전문 인재를 양성한다.
            </S.DepartmentContent>
          </div>
        </S.DepartmentContainer>
      </C.Detail>
    </C.PageContainer>
  );
}

export default Main;
