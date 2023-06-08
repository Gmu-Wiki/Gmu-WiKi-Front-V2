import React from "react";
import * as C from "../../components";
import * as I from "../../assets";
import * as S from "./style";

function NotFound() {
  return (
    <>
      <C.Header />
      <S.NotFoundCotainer>
        <I.NotFound />
      </S.NotFoundCotainer>
      <C.Footer />
    </>
  );
}

export default NotFound;
