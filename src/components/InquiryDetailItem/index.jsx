import React, { useState } from "react";
import * as S from "./style";
import * as C from "../index";
import { useMail } from "../../Hooks";

const InquiryDetailItem = ({ id, title, content, name, inquiryType }) => {
  const { postApproveMail } = useMail({ props: { id } });

  const [showRefusal, setShowRefusal] = useState(false);

  const handleApproveMail = () => {
    postApproveMail();
  };

  const handleRefusalMail = () => {
    setShowRefusal(true);
  };

  return (
    <>
      <C.Detail hasNumber={false} title={title}>
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
        <S.Content>{content}</S.Content>
      </C.Detail>
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
