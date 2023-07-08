import React from "react";
import * as S from "./style";
import * as C from "../index";
import { useMail } from "../../Hooks";

const InquiryDetailItem = ({ id, title, content, name, inquiryType }) => {
  const { postApproveMail, postRefusalMail } = useMail({ props: { id } });

  const handleApproveMail = () => {
    postApproveMail();
  };

  const handleRefusalMail = () => {
    postRefusalMail();
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
    </>
  );
};

export default InquiryDetailItem;
