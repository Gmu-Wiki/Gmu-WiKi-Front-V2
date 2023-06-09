import React, { useState } from "react";
import * as S from "./style";
import * as C from "../index";
import { useMail } from "../../Hooks";
import useMarkdown from "../../Hooks/useMarkdown";

const InquiryDetailItem = ({ id, content, name, inquiryType }) => {
  const { postApproveMail } = useMail({ props: { id } });

  const [showRefusal, setShowRefusal] = useState(false);

  const handleApproveMail = () => {
    const shouldApprove = window.confirm("정말로 승인하시겠습니까?");

    if (shouldApprove) {
      postApproveMail();
    }
  };

  const handleRefusalMail = () => {
    setShowRefusal(true);
  };

  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  return (
    <>
      <S.NTBox>
        <S.Name>작성자 : {name}</S.Name>
        <S.InquiryType>문의 종류 : {inquiryType}</S.InquiryType>
      </S.NTBox>
      <S.BtnBox>
        <S.ApproveBtn
          onClick={() => {
            handleApproveMail();
          }}
        >
          승인
        </S.ApproveBtn>
        <S.RefusalBtn
          onClick={() => {
            handleRefusalMail();
          }}
        >
          거부
        </S.RefusalBtn>
      </S.BtnBox>
      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
      {showRefusal && (
        <C.Refusal
          id={id}
          showLogout={showRefusal}
          setShowLogout={setShowRefusal}
        />
      )}
    </>
  );
};

export default InquiryDetailItem;
