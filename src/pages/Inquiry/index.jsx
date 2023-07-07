import React, { useState, useEffect } from "react";
import * as C from "../../components";
import * as S from "./style";
import API from "../../apis";
import { toast } from "react-toastify";
import { setUuid } from "../../store/uuid";
import { useDispatch } from "react-redux";

export default function Inquiry() {
  const dispatch = useDispatch();

  const [inquiryList, setInquiryList] = useState([]);

  const getInquiry = async () => {
    try {
      const { data } = await API.get("/admin/inquiry");

      setInquiryList(data.inquiryList);
    } catch (e) {
      toast.error("문의 정보를 가져오는데 실패함");
      console.log(e);
    }
  };

  useEffect(() => {
    getInquiry();
  }, []);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="문의" sort="문의">
        {inquiryList.map(item => (
          <C.InquiryItem
            key={item.uuid}
            onClick={() => dispatch(setUuid(item.uuid))}
          >
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
