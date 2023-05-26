import React from "react";
import * as S from "./style";
import * as I from "../../assets";

export default function ScrollButton() {
  function scrollToBottom() {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <S.ScrollButtonContainer>
      <div onClick={scrollToBottom}>
        <I.ScrollButton />
      </div>
      <div onClick={scrollToTop}>
        <I.ScrollButton />
      </div>
    </S.ScrollButtonContainer>
  );
}
