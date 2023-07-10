import React from "react";
import * as S from "./style";
import * as C from "../index";
import useMarkdown from "../../Hooks/useMarkdown";
import { useNotice } from "../../Hooks";
import GetRole from "../../lib/GetRole";

const InquiryDetailItem = ({ id, content, createdDate, editedDate }) => {
  const data = GetRole();
  const { deleteNotice } = useNotice({ props: { id } });
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");

    if (shouldDelete) {
      deleteNotice();
    }
  };

  return (
    <>
      <S.NTBox>
        <S.Date>작성일 : {createdDate}</S.Date>
        <S.Date>수정일 : {editedDate}</S.Date>
      </S.NTBox>
      {data === "관리자" ? (
        <S.BtnBox>
          <S.DeleteBtn
            onClick={() => {
              handleDelete();
            }}
          >
            삭제
          </S.DeleteBtn>
        </S.BtnBox>
      ) : null}

      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default InquiryDetailItem;
