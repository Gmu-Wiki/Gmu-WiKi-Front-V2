import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../apis";
import GetRole from "../lib/GetRole";

const useInquiry = ({ props }) => {
  const navigate = useNavigate();

  const data = GetRole();

  const inquiryUpload = useCallback(async () => {
    try {
      await API.post(`/inquiry`, {
        title: props.title,
        content: props.content,
        inquiryType: props.category
      });
      toast.success("문의 등록 성공");

      if (data === "관리자") {
        navigate("/inquiry");
      } else if (data === "사용자") {
        navigate("/");
      }
    } catch (e) {
      if (e.response && e.response.status >= 403) {
        toast.error("권한이 없습니다.");
      } else if (e.response && e.response.status >= 401) {
        toast.error("로그인이 필요합니다.");
      } else {
        toast.error("문의 글을 작성할 수 없습니다.");
      }
    }
  }, [props, navigate, data]);

  return { inquiryUpload };
};

export default useInquiry;
