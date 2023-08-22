import React from "react";
import * as C from "../../components";
import { useNotice } from "../../Hooks";
import { useNavigate, useParams } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { toast } from "react-toastify";
import { useEffect } from "react";

const EditNotice = () => {
  const navigate = useNavigate();
  const role = GetRole();

  useEffect(() => {
    if (role !== "관리자") {
      toast.error("권한이 없습니다.");
      navigate("/");
    }
  }, [role, navigate]);
  const { id } = useParams();
  const { state } = useNotice({ props: { id } });

  return (
    <C.PageContainer title={state.title} sort="편집">
      <C.EditNotice title={state.title} content={state.content} id={id} />
    </C.PageContainer>
  );
};

export default EditNotice;
