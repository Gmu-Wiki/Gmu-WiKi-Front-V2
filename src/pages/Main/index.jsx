import React from "react";
import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";

import SchoolImg from "../../assets/img/SchoolImg.png";

import { GauthProvider } from "@msg-team/gauth-react";
import EnvConfig from "../../apis/EnvConfig";
import useToken from "../../Hooks/useToken";
import { useState, useEffect } from "react";

document.cookie = "crossCookie=bar; SameSite=None; Secure";

function Main() {
  const [storeCode, setStoreCode] = useState("");

  console.log(storeCode);

  const schoolGraphData = [
    {
      titleChild: "성별",
      contentChild: "1954년 6월",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "마이스터 지정",
      contentChild: "2017년 3월",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "성별",
      contentChild: "남녀공학",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "유형",
      contentChild: "마이스터고등학교",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "교장",
      contentChild: "최홍진",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "교감",
      contentChild: "김광진",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "학생 수",
      contentChild: "215명(2023명 기준)",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "교휸",
      contentChild: "더불어 살아가는 사람다운 미래 인재",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "교화",
      contentChild: "동백꽃",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "교목",
      contentChild: "소나무",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "교색",
      contentChild: "파란색",
      backgroundColor: "#123262",
    },
    {
      titleChild: "교직원 수",
      contentChild: "55명(2023년 기준)",
      backgroundColor: "#123262",
    },
    {
      titleChild: "설립형태",
      contentChild: "공립",
      backgroundColor: "#123262",
    },
    {
      titleChild: "주소",
      contentChild: "광주광역시 광산구 상무대로 312",
      backgroundColor: "#123262",
    },
  ];

  const historyGraphData = [
    {
      titleChild: "날짜",
      contentChild: "내용",
      backgroundColor: "#007EFF",
      color: "true",
      contentColor: "true",
    },
    {
      titleChild: "1954년 5월 29일",
      contentChild: "송정여자상업고등학교 설립 인가",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "1954년 6월 1일",
      contentChild: "전남 광산군 송정읍 785번지에서 송정여자상업고등학교 개교",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "1979년 3월 1일",
      contentChild: "송정여자중학교와 병설 분리",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "1979년 12월 28일",
      contentChild: "학칙변경 상업과 5학급 인가",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "1996년 3월 1일",
      contentChild: "광주여자전산상업고등학교로 교명 변경, 학교 이전",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "2001년 3월 1일",
      contentChild: "광주전산고등학교로 교명 변경",
      backgroundColor: "#DFE464",
    },
    {
      titleChild: "2003년 3월 1일",
      contentChild: "실습동 구축",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2005년 12월 31일",
      contentChild: "실습동 증축/이전전 ",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2008년 3월 3일",
      contentChild: "특수학급 1학급 신설",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2009년 11월 4일",
      contentChild: "금봉관 개관",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2014년 3월 1일",
      contentChild: "교명 및 학과 개편",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2015년 3월 1일",
      contentChild: "광주경영고등학교 제 25대 이윤일 교장 취임",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2015년 10월 1일",
      contentChild: "교육부 지정 제 11차 SW분야 마이스터고등학교 지정",
      backgroundColor: "#62ADE0",
    },
    {
      titleChild: "2016년 2월 4일",
      contentChild: "제 60회 233명 졸업",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2016년 3월 2일",
      contentChild: "2016학년도 신입생 입학",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2016년 9월 1일",
      contentChild: "광주소프트웨아마이스터고등학교 제 26대 고익종 교장 취임",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2017년 3월 2일",
      contentChild: "마이스터고등학교 전환 및 광주소프트웨어마이스터고로 변경",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2017년 10월 23일",
      contentChild: "광주소프트웨어마이스터고등학교 개교식",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2018년 3월 2일",
      contentChild: "2018힉년도 신입생 입학(총 84명)",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2020년 9월 1일",
      contentChild: "광주소프트웨어마이스터고등학교 제 27대 김희철 교장 취임",
      backgroundColor: "#123262",
    },
    {
      titleChild: "2023년 3월 1일",
      contentChild: "광주소프트웨어마이스터고등학교 제 28대 최홍진 교장 취임",
      backgroundColor: "#123262",
    },
  ];

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

  useEffect(() => {}, [storeCode]);

  useToken(storeCode);

  return (
    <GauthProvider
      redirectUri={EnvConfig.REDIRECTURL}
      clientId={EnvConfig.CLIENTID}
      onSuccess={async code => {
        setStoreCode(code);
      }}
    >
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="대문"
        sort="G무위키"
        hasEditButton
        hasHistoryButton
      >
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
          <S.SchoolImg src={SchoolImg} />
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
              타인의 의견을 무시하는 행위, 차별과 비하를 조장하는 행위는
              용인되지 않으며, 이러한 행위를 할 시 제재될 수 있습니다.
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
        <C.Detail
          hasNumber={true}
          number={4}
          title={"교가"}
          detailContent={true}
        >
          <S.SchoolSonContainer>
            <I.SchoolSong />
          </S.SchoolSonContainer>
        </C.Detail>
        <C.Detail hasNumber={true} number={5} title={"학과운영"}>
          <S.DepartmentContainer>
            <div>
              현재, 1학년은 SW개발과, 임베디드SW과. 인공지능과, 2학년은
              SW개발과, 스마트IOT과. 3학년은 SW개발과, 임베디드 SW과로 운영되고
              있다.
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
                사물 즉, 각종 전자 기기, 기계, 자동차, 선박, 항공 등
                사물에내장된 컴퓨터가 수행할 수 있는 SW를 개발한다.
                <br />즉 사물인터넷(IoT), 센서 네트워크(Sensor Network) 등 IT
                융합 SW를 설계, 개발이 가능한 인재를 양성한다.
              </S.DepartmentContent>
              <S.DepartmentTitle>인공지능과</S.DepartmentTitle>
              <S.DepartmentContent>
                인공지능, 빅데이터, 사물인터넷을 바탕으로 한 인공지능 기반
                기술을 교육하여 인공지능 서비스의 요구사항을 실현하기 위한
                <br />
                인공지능 플랫폼 구현, 인공지능 서비스 기획 전문 인재를 양성한다.
              </S.DepartmentContent>
            </div>
          </S.DepartmentContainer>
        </C.Detail>
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </GauthProvider>
  );
}

export default Main;
