import React from "react";
import * as C from "../../components";
import * as S from "./style";
import API from "../../apis";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useNotice from "../../Hooks/useNotice";

export default function Notice() {
  const [noticeList, setNoticeList] = useState([]);

  const getNoticeList = async () => {
    try {
      const { data } = await API.get("/admin/notice");

      setNoticeList(data.noticeList);
    } catch (e) {
      toast.error("공지 목록을 불러오지 못함.");
    }
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="공지" sort="공지" hasPostButton>
        <C.ScrollButton />
        {noticeList.map(item => (
          <>
            <S.NoticeBox>
              <S.NoticeTitle>{item.title}</S.NoticeTitle>
              <S.NoticeDay>{item.createdDate.substring(0, 10)}</S.NoticeDay>
            </S.NoticeBox>
          </>
        ))}
      </C.PageContainer>
      <C.Footer />
    </>
  );
}
