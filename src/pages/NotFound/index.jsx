import React from "react";
import Header from "../../components/Header";
import * as I from "../../assets";
import * as S from "./style";

function NotFound() {
  return (
    <>
      <Header />
      <S.NotFoundCotainer>
        <I.NotFound />
      </S.NotFoundCotainer>
    </>
  );
}

export default NotFound;
