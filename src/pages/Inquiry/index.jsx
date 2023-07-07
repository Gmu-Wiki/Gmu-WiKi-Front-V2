import React, { useState, useEffect } from "react";
import * as C from "../../components";
import * as S from "./style";
import { useFetch } from "../../Hooks";

export default function Inquiry() {
  const [inquiryList, setInquiryList] = useState([]);

  const { fetch } = useFetch({
    url: `/admin/inquiry`,
    method: "get",
    onSuccess: data => {
      setInquiryList(data.inquiryList);
    },
    errors: {
      400: "문의 정보를 가져오지 못함"
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="문의" sort="문의">
        {inquiryList.map(item => (
          <C.InquiryItem key={item.id}>
            <S.InquiryTitleContainer>
              <S.StyledTitle>{item.title}</S.StyledTitle>
              <S.Sort>{item.inquiryType}</S.Sort>
            </S.InquiryTitleContainer>
          </C.InquiryItem>
        ))}
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
