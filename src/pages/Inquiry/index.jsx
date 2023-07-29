import React, { useState, useEffect } from "react";
import * as C from "../../components";
import * as S from "./style";
import { useFetch } from "../../Hooks";
import { Link, useNavigate } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { toast } from "react-toastify";

export default function Inquiry() {
  const [inquiryList, setInquiryList] = useState([]);

  const { fetch } = useFetch({
    url: `/admin/inquiry`,
    method: "get",
    onSuccess: data => {
      const sortedInquiryList = data.inquiryList.sort((a, b) =>
        b.createdDate.localeCompare(a.createdDate)
      );
      setInquiryList(sortedInquiryList);
    },
    errors: {
      400: "문의 정보를 가져오지 못함"
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  const navigate = useNavigate();
  const role = GetRole();

  useEffect(() => {
    if (role !== "관리자") {
      toast.error("권한이 없습니다.");
      navigate("/");
    }
  }, [role, navigate]);

  return (
    <C.PageContainer title="문의" sort="문의">
      {inquiryList.map(item => (
        <React.Fragment key={item.id}>
          <Link to={`/inquiry/${item.id}`}>
            <C.InquiryItem>
              <S.InquiryTitleContainer>
                <S.StyledTitleContainer>
                  <S.StyledTitle>{item.title}</S.StyledTitle>
                  <S.Sort>{item.inquiryType}</S.Sort>
                  <S.Date>{item.createdDate.substring(0, 10)}</S.Date>
                </S.StyledTitleContainer>
                <S.StyledContents>
                  {item.content.length > 100
                    ? item.content.substring(0, 120) + "..."
                    : item.content}
                </S.StyledContents>
              </S.InquiryTitleContainer>
            </C.InquiryItem>
          </Link>
        </React.Fragment>
      ))}
    </C.PageContainer>
  );
}
