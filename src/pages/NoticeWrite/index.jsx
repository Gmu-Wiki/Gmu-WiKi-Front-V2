import React, { useEffect } from "react";
import * as C from "../../components";
import GetRole from "../../lib/GetRole";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NoticeWrite = () => {
  const navigate = useNavigate();
  const role = GetRole();

  useEffect(() => {
    if (role !== "관리자") {
      toast.error("권한이 없습니다.");
      navigate("/");
    }
  }, [role, navigate]);

  return (
    <C.PageContainer title="공지" sort="공지">
      <C.NoticeWrite />
    </C.PageContainer>
  );
};

export default NoticeWrite;
