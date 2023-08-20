import React, { useEffect, useState } from "react";
import { useFetch } from "../../Hooks";
import * as S from "./style";

export default function RecentModified() {
  const [recentList, setRecentList] = useState([]);

  const { fetch } = useFetch({
    url: `/board/recent`,
    method: "get",
    onSuccess: data => {
      setRecentList(data.boardTitleList);
    },
    errors: {
      403: "권한이 없습니다.",
      500: "목록을 불러올 수 없습니다."
    }
  });

  useEffect(() => {
    fetch();
  }, []);

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
    const boardUrl = `/board/${boardId}`;
    window.location.href = boardUrl;
  };

  return (
    <S.RecentModifiedContainer>
      <S.Title>최근 생성 / 수정된 글</S.Title>
      {recentList.map(({ id, title, editedDate }) => (
        <React.Fragment key={id}>
          <S.ModifiedItem onClick={() => handleBoardItemClick(id)}>
            <S.ModifiedItemTitle>{title}</S.ModifiedItemTitle>
            <S.ModifiedItemTime>{formatTime(editedDate)}</S.ModifiedItemTime>
          </S.ModifiedItem>
        </React.Fragment>
      ))}
    </S.RecentModifiedContainer>
  );
}
