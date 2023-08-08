import React, { useEffect, useState } from "react";
import { useFetch } from "../../Hooks";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import { Link } from "react-router-dom";

export default function RecentModified() {
  const role = GetRole();

  const [roleUrl, setRoleUrl] = useState("");
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    if (role === "관리자") {
      setRoleUrl("admin");
    } else if (role === "사용자") {
      setRoleUrl("user");
    }
  }, [role]);

  const { fetch } = useFetch({
    url: `/${roleUrl}/board/recent`,
    method: "get",
    onSuccess: data => {
      console.log(data);
      setRecentList(data.boardTitleList);
    },
    errors: {
      403: "권한이 없습니다.",
      500: "목록을 불러올 수 없습니다."
    }
  });

  useEffect(() => {
    if (roleUrl) {
      fetch();
    }
  }, [roleUrl]);

  function formatTime(timeString) {
    const date = new Date(timeString);
    const now = new Date();

    const elapsedMilliseconds = now - date;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    const elapsedMonths = Math.floor(elapsedDays / 30);

    if (elapsedMonths > 0) {
      return `${elapsedMonths}개월 전`;
    } else if (elapsedDays > 0) {
      return `${elapsedDays}일 전`;
    } else if (elapsedHours > 0) {
      return `${elapsedHours}시간 전`;
    } else if (elapsedMinutes > 0) {
      return `${elapsedMinutes}분 전`;
    } else {
      return `방금 전`;
    }
  }

  const handleBoardItemClick = boardId => {
    const boardUrl = `/${roleUrl}/board/${boardId}`;
    window.location.href = boardUrl;
  };

  return (
    <S.RecentModifiedContainer>
      <S.Title>최근 수정된 글</S.Title>
      {recentList.map(({ id, title, editedDate }) => (
        <React.Fragment key={id}>
          <S.ModifiedItem onClick={() => handleBoardItemClick(id)}>
            <S.ModifiedItemTitle>
              {title.length > 9 ? title.substr(0, 9) + "..." : title}
            </S.ModifiedItemTitle>
            <S.ModifiedItemTime>{formatTime(editedDate)}</S.ModifiedItemTime>
          </S.ModifiedItem>
        </React.Fragment>
      ))}
    </S.RecentModifiedContainer>
  );
}
