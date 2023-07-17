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
      if (e.response && e.response.status >= 403) {
        toast.error("권한이 없습니다.");
      } else if (e.response && e.response.status >= 401) {
        toast.error("로그인이 필요합니다.");
      } else {
        toast.error("문의 글을 작성할 수 없습니다.");
      }
    }
  }, [props, navigate, roleUrl]);

  return { inquiryUpload };
};

export default useInquiry;
