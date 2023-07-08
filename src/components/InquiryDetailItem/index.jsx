import React from "react";
import * as S from "./style";
import * as C from "../index";

const InquiryDetailItem = ({ title, content, name, inquiryType }) => {
  return (
    <>
      <C.Detail hasNumber={false} title={title}>
        <S.Content>{content}</S.Content>
        <p>{name}</p>
        <p>{inquiryType}</p>
      </C.Detail>
    </>
  );
};

export default InquiryDetailItem;
