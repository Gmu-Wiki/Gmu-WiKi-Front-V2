import React from "react";
import * as S from "./sytle";

export default function InquiryItem({ children }) {
  return (
    <S.InquiryItemContainer>
      <S.InquiryItemWrapper>{children}</S.InquiryItemWrapper>
    </S.InquiryItemContainer>
  );
}
