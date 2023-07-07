import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useInquiry = ({ props }) => {
  const inquiryUpload = useCallback(async () => {
    try {
      await API.post("/user/inquiry", {
        title: props.title,
        content: props.content,
        inquiryType: props.category
      });
      toast.success("문의 등록 성공");
    } catch (e) {
      toast.error("문의 등록 실패");
    }
  }, [props.title, props.content, props.category]);

  return { inquiryUpload };
};

export default useInquiry;
