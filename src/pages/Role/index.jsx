import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as C from "../../components";
import RoleImg1 from "../../imgs/RoleImg1.png";
import RoleImg2 from "../../imgs/RoleImg2.png";
import { useFetch } from "../../Hooks";
import { useNavigate } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { toast } from "react-toastify";

export default function Role() {
  const navigate = useNavigate();
  const role = GetRole();

  useEffect(() => {
    if (role !== "관리자") {
      toast.error("권한이 없습니다.");
      navigate("/");
    }
  }, [role, navigate]);

  const [formData, setFormData] = useState({});
  const { fetch } = useFetch({
    url: `/admin/role/${formData.role === "admin" ? "grant" : "revoke"}`,
    method: "patch",
    successMessage: "권한 부여에 성공했습니다.",
    errors: "권한이 없습니다."
  });

  return (
    <C.PageContainer title="권한" sort="권한">
      <img src={RoleImg1} alt="Role이미지1" loading="lazy" />
      <S.RoleContainer>
        <S.InputContainer>
          <S.RoleTitle>이메일</S.RoleTitle>
          <S.RoleInput
            type="text"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <S.RoleTitle>권한</S.RoleTitle>
          <S.Select
            name="role"
            defaultValue="none"
            onChange={e => {
              setFormData({ ...formData, role: e.target.value });
            }}
          >
            <option value="none">선택해주세요</option>
            <option value="admin">관리자</option>
            <option value="user">사용자</option>
          </S.Select>
        </S.InputContainer>
        <C.Button
          width="120"
          height="40"
          backgroundColor="#007EFF"
          color="#fff"
          onClick={() => {
            fetch({ email: formData.email });
          }}
        >
          부여하기
        </C.Button>
      </S.RoleContainer>
      <img src={RoleImg2} alt="Role이미지2" loading="lazy" />
    </C.PageContainer>
  );
}
