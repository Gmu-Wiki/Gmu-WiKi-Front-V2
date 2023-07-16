import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";
import { Link } from "react-router-dom";

export default function Student() {
  const data = GetRole();
  const { boardList, roleUrl } = useBoard({ boardType: "SCHEDULE" });

  if (!boardList) return;

  const jan = boardList.filter(item => item.boardDetailType === "JAN");
  const feb = boardList.filter(item => item.boardDetailType === "FEB");
  const mar = boardList.filter(item => item.boardDetailType === "MAR");
  const apr = boardList.filter(item => item.boardDetailType === "APR");
  const may = boardList.filter(item => item.boardDetailType === "MAY");
  const jun = boardList.filter(item => item.boardDetailType === "JUN");
  const jul = boardList.filter(item => item.boardDetailType === "JUL");
  const aug = boardList.filter(item => item.boardDetailType === "AUG");
  const sept = boardList.filter(item => item.boardDetailType === "SEPT");
  const oct = boardList.filter(item => item.boardDetailType === "OCT");
  const nov = boardList.filter(item => item.boardDetailType === "NOV");
  const dec = boardList.filter(item => item.boardDetailType === "DEC");

  return (
    <C.PageContainer
      title="학사일정"
      sort="학사일정"
      hasPostButton
      {...(data === "관리자"
        ? { hasPostButton: true }
        : { hasPostButton: false })}
      url="/post"
    >
      <C.Detail hasNumber={false} title={"1월"}>
        {jan.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"2월"}>
        {feb.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"3월"}>
        {mar.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"4월"}>
        {apr.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"5월"}>
        {may.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"6월"}>
        {jun.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"7월"}>
        {jul.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"8월"}>
        {aug.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"9월"}>
        {sept.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"10월"}>
        {oct.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"11월"}>
        {nov.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
      <C.Detail hasNumber={false} title={"12월"}>
        {dec.map(item => (
          <React.Fragment key={item.id}>
            <S.Box>
              <Link to={`/${roleUrl}/board/${item.id}`}>
                <S.Title>{item.title}</S.Title>
              </Link>
            </S.Box>
          </React.Fragment>
        ))}
      </C.Detail>
    </C.PageContainer>
  );
}
