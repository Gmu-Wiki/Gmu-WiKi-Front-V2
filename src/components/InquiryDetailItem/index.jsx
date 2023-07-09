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
        <S.Content>{content}</S.Content>
        <p>{name}</p>
        <p>{inquiryType}</p>
        <button
          onClick={() => {
            handleApproveMail();
          }}
        >
          승인
        </button>
        <button
          onClick={() => {
            handleRefusalMail();
          }}
        >
          거부
        </button>
      </C.Detail>
      {showRefusal && (
        <C.Refusal showLogout={showRefusal} setShowLogout={setShowRefusal} />
      )}
    </>
  );
};

export default InquiryDetailItem;
