import React from "react";
import * as C from "../../components";
import * as S from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "../../Hooks";
import { Link } from "react-router-dom";

export default function Notice() {
  const [noticeList, setNoticeList] = useState([]);

  const { fetch } = useFetch({
    url: `/admin/notice`,
    method: "get",
    onSuccess: data => {
      setNoticeList(data.noticeList);
    },
    errors: {
      400: "공지 목록을 불러오지 못함."
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="공지"
        sort="공지"
        hasPostButton
        url="/noticeWrite"
      >
        <C.ScrollButton />
        {noticeList.map(item => (
          <>
            <Link to={`/notice/${item.id}`}>
              <S.NoticeBox key={item.id}>
                <S.NoticeTitle>{item.title}</S.NoticeTitle>
                <S.NoticeDay>{item.createdDate.substring(0, 10)}</S.NoticeDay>
              </S.NoticeBox>
            </Link>
          </>
        ))}
      </C.PageContainer>
      <C.Footer />
    </>
  );
}
