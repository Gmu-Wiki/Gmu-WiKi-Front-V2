import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useInquiry = ({ props }) => {
  const navigate = useNavigate();

  const inquiryUpload = useCallback(async () => {
    try {
      await API.post("/admin/inquiry", {
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
  }, [props.title, props.content, props.category, navigate]);

  return { inquiryUpload };
};

export default useInquiry;
