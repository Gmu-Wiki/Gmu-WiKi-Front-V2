import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as I from "../../assets";
import * as S from "./style";

function NotFound() {
  return (
    <>
      <Header />
      <S.NotFoundCotainer>
        <I.NotFound />
      </S.NotFoundCotainer>
      <Footer />
    </>
  );
}

export default NotFound;
