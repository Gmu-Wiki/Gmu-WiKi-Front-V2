import React from "react";
import * as C from "../../components";
import * as S from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "../../Hooks";
import { Link } from "react-router-dom";
import GetRole from "../../lib/GetRole";

export default function Notice() {
  const data = GetRole();
  const [noticeList, setNoticeList] = useState([]);

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const { fetch } = useFetch({
    url: `/${roleUrl}/notice`,
    method: "get",
    onSuccess: data => {
      setNoticeList(data.noticeList);
    },
    errors: {
      400: "공지 목록을 불러오지 못함."
    }
  });

  useEffect(() => {
    if (roleUrl) {
      fetch();
    }
  }, [roleUrl]);

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer
        title="공지"
        sort="공지"
        {...(data === "관리자"
          ? { hasPostButton: true }
          : { hasPostButton: false })}
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
