import { useCallback, useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GetRole from "../lib/GetRole";

const useInquiry = ({ props }) => {
  const navigate = useNavigate();

  const data = GetRole();

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const inquiryUpload = useCallback(async () => {
    try {
      await API.post(`/${roleUrl}/inquiry`, {
        title: props.title,
        content: props.content,
        inquiryType: props.category
      });
      toast.success("문의 등록 성공");

      navigate("/");
    } catch (e) {
      console.log(e);
      toast.error("문의 등록 실패");
    }
  }, [props.title, props.content, props.category, navigate, roleUrl]);

  return { inquiryUpload };
};

export default useInquiry;
