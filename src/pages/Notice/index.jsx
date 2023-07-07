import React from "react";
import * as C from "../../components";
import * as S from "./style";
import API from "../../apis";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useNotice from "../../Hooks/useNotice";
import { setUuid } from "../../store/uuid";

export default function Notice() {
  const dispatch = useDispatch();

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

  console.log(noticeList);

  const { uploadNotice } = useNotice();

  const handleNotice = () => {
    uploadNotice();
  };

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
        <button onClick={handleNotice}>테스트 버튼</button>
      </C.PageContainer>
      <C.Footer />
    </>
  );
}
