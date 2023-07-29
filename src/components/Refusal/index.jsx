import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../assets";
import * as C from "../../components";
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
    const shouldRefusal = window.confirm("정말로 거부하시겠습니까?");

    if (shouldRefusal) {
      postRefusalMail();
    }
  };
  return (
    <>
      <S.ModalOverlay onClick={showLogoutModal} />
      <S.ModalBox>
        <S.RefusalContainer>
          <I.X onClick={showLogoutModal} />
          <S.RefusalContent>거부 사유 입력</S.RefusalContent>
          <S.InputRefusal onChange={changeRefusal} />
          <S.YesButton onClick={onClick}>메일 전송</S.YesButton>
        </S.RefusalContainer>
      </S.ModalBox>
    </>
  );
}

export default Refusal;
