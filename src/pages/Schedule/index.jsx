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

  const jan = boardList
    .filter(item => item.boardDetailType === "JAN")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const feb = boardList
    .filter(item => item.boardDetailType === "FEB")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const mar = boardList
    .filter(item => item.boardDetailType === "MAR")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const apr = boardList
    .filter(item => item.boardDetailType === "APR")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const may = boardList
    .filter(item => item.boardDetailType === "MAY")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const jun = boardList
    .filter(item => item.boardDetailType === "JUN")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const jul = boardList
    .filter(item => item.boardDetailType === "JUL")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const aug = boardList
    .filter(item => item.boardDetailType === "AUG")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const sept = boardList
    .filter(item => item.boardDetailType === "SEPT")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const oct = boardList
    .filter(item => item.boardDetailType === "OCT")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const nov = boardList
    .filter(item => item.boardDetailType === "NOV")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));
  const dec = boardList
    .filter(item => item.boardDetailType === "DEC")
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));

  return (
    <>
      <C.RecentModified />
      <C.Header />
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

      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
