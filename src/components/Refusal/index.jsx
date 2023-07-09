import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../assets";
import { useMail } from "../../Hooks";

function Refusal({ showLogout, setShowLogout, id }) {
  function showLogoutModal() {
    setShowLogout(prev => !prev);
  }

  const [refusalReason, setRefusalReason] = useState("");

  const changeRefusal = e => {
    setRefusalReason(e.target.value);
  };

  const { postRefusalMail } = useMail({ props: { refusalReason, id } });

  const onClick = () => {
    setShowLogout(prev => !prev);
    postRefusalMail();
  };
  return (
    <>
      <S.ModalOverlay onClick={showLogoutModal} />
      <S.ModalBox>
        <S.RefusalContainer>
          <I.X onClick={showLogoutModal} />
          <S.RefusalTitle>
            <S.RefusalContent>거부 사유 입력</S.RefusalContent>
          </S.RefusalTitle>
          <input onChange={changeRefusal} />
          <S.BtnContainer>
            <S.YesButton onClick={onClick}>메일 보내기</S.YesButton>
          </S.BtnContainer>
        </S.RefusalContainer>
      </S.ModalBox>
    </>
  );
}

export default Refusal;
