import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const HistoryItem = ({ recordList, roleUrl }) => {
  const sortedRecordList = recordList.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);
    return dateA - dateB;
  });

  return (
    <>
      {sortedRecordList.map(item => {
        const createdDate = new Date(item.createdDate);
        const formattedDate = `${createdDate.getFullYear()}-${(
          createdDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${createdDate
          .getDate()
          .toString()
          .padStart(2, "0")} [${createdDate
          .getHours()
          .toString()
          .padStart(2, "0")}:${createdDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${createdDate
          .getSeconds()
          .toString()
          .padStart(2, "0")}]`;

        return (
          <React.Fragment key={item.id}>
            <Link to={`/${roleUrl}/board/${item.id}/record/detail`}>
              <S.Box>
                <S.Day>{formattedDate}</S.Day>
                <S.Name>수정자: {item.name}</S.Name>
              </S.Box>
            </Link>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default HistoryItem;
