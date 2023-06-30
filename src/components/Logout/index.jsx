import React from "react";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import TokenManager from "../../apis/TokenManager";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import * as I from "../../assets";
import { toast } from "react-toastify";

function Logout({ isShow, setIsShow }) {
  const navigate = useNavigate();
  const tokenManager = new TokenManager();

  function showLogoutModal() {
    setIsShow(prev => !prev);
  }
  const [queryState, setQueryState] = useState({
    url: "",
    method: "get",
  });

  const { fetch } = useFetch({
    url: queryState.url,
    method: queryState.method,
    onSuccess: () => {
      tokenManager.removeTokens();

      navigate("/");
      toast.success("로그아웃 성공");
    },
  });

  const onDelete = ({ url, method }) => {
    setQueryState({
      url,
      method,
    });
    setIsShow(true);
  };

  return (
    <>
      <S.ModalOverlay onClick={showLogoutModal} />
      <S.ModalBox>
        <S.LogoutContainer>
          <I.X onClick={showLogoutModal} />
          <S.LogoutTitle>
            <I.Logout />
            <S.LogoutContent>로그아웃 하시겠습니까?</S.LogoutContent>
          </S.LogoutTitle>
          <S.BtnContainer>
            <S.NoButton onClick={showLogoutModal}>아니요</S.NoButton>
            <S.YesButton
              onClick={() =>
                onDelete({
                  url: "/auth",
                  method: "delete",
                })
              }
            >
              예
            </S.YesButton>
          </S.BtnContainer>
        </S.LogoutContainer>
      </S.ModalBox>
    </>
  );
}

export default Logout;
