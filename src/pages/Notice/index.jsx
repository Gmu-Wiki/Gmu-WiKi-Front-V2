import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";
import * as S from "./style";

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
      const sortedList = data.noticeList.sort((a, b) =>
        b.createdDate.localeCompare(a.createdDate)
      );
      setNoticeList(sortedList);
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
    <C.PageContainer
      title="공지"
      sort="공지"
      {...(data === "관리자"
        ? { hasPostButton: true }
        : { hasPostButton: false })}
      url="/noticeWrite"
      hasTitle
    >
      <C.ScrollButton />
      {noticeList.map(item => (
        <React.Fragment key={item.id}>
          <Link to={`/notice/${item.id}`}>
            <S.NoticeBox>
              <S.NoticeTitle>{item.title}</S.NoticeTitle>
              <S.NoticeDay>{item.createdDate.substring(0, 10)}</S.NoticeDay>
            </S.NoticeBox>
          </Link>
        </React.Fragment>
      ))}
    </C.PageContainer>
  );
}
