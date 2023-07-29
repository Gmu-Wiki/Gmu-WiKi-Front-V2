import React, { useState } from "react";
import * as S from "./style";
import * as C from "../index";
import { useMail } from "../../Hooks";
import useMarkdown from "../../Hooks/useMarkdown";

const InquiryDetailItem = ({ id, content, name, inquiryType, createdDate }) => {
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
        <S.CreatedDate>작성 시간 : {createdDate}</S.CreatedDate>
      </S.NTBox>
      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
      {showRefusal && (
        <C.Refusal
          id={id}
          showLogout={showRefusal}
          setShowLogout={setShowRefusal}
        />
      )}
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
          거절
        </S.RefusalBtn>
      </S.BtnBox>
    </>
  );
};

export default InquiryDetailItem;
