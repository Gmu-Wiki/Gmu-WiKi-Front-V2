import React, { useState } from "react";
import * as C from "../../components";
import * as S from "./style";

export default function Inquiry() {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  let [test, setTest] = useState([
    {
      id: 1,
      title: "하온이가 백엔드를 한대요!!",
      sort: "해명요청",
      contents:
        "비상입니다 하온이가 백엔드로 복귀한다고 말했습니다. 백엔드를 포기했던 김하온이 왜 다시 하려는 걸까요? 그만큼 디자인이 싫었던 걸까요? 진실은 아무도 모릅니다. 빠른 시일 내에 김하온양이 디자인으로 복귀할 수 있는 날을 기다리겠습니다. 그날까지 화이팅...!!",
      id: "2",
    },
    {
      id: 2,
      title: "아론이가 디자이너를 한대요",
      sort: "삭제요청",
      contents:
        "우리 학생들을 인성과 감성에 바탕을 둔 인문학적 소양을 갖추고 무한 상상력이 실력으로발현되는 소프트웨어 기술 명장으로 성장시키자 합니다.미래를 여는 SW/AI 교육과정을 제공하여 상상력과 창의력이 발현되는 학교에서 꿈이 실현되는 학생으로 키우겠습니다..",
    },
    {
      id: 3,
      title: "아론이가 디자이너를 한대요",
      sort: "삭제요청",
      contents:
        "우리 학생들을 인성과 감성에 바탕을 둔 인문학적 소양을 갖추고 무한 상상력이 실력으로발현되는 소프트웨어 기술 명장으로 성장시키자 합니다.미래를 여는 SW/AI 교육과정을 제공하여 상상력과 창의력이 발현되는 학교에서 꿈이 실현되는 학생으로 키우겠습니다..",
    },
    {
      id: 4,
      title: "아론이가 디자이너를 한대요",
      sort: "삭제요청",
      contents:
        "우리 학생들을 인성과 감성에 바탕을 둔 인문학적 소양을 갖추고 무한 상상력이 실력으로발현되는 소프트웨어 기술 명장으로 성장시키자 합니다.미래를 여는 SW/AI 교육과정을 제공하여 상상력과 창의력이 발현되는 학교에서 꿈이 실현되는 학생으로 키우겠습니다..",
    },
  ]);
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="문의" sort="문의">
        {test.map(({ title, sort, contents, id }) => (
          <C.InquiryItem key={id}>
            <S.InquiryTitleContainer>
              <S.StyledTitle>{truncate(title, 30)}</S.StyledTitle>
              <S.Sort>{sort}</S.Sort>
            </S.InquiryTitleContainer>
            <S.StyledContents>{truncate(contents, 140)}</S.StyledContents>
          </C.InquiryItem>
        ))}
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
