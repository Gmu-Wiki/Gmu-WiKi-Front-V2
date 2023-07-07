import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useInquiry = () => {
  const inquiryUpload = useCallback(async () => {
    try {
      await API.post("/user/inquiry", {
        title: "문의 제목",
        content: "문의 내용",
        inquiryType: "DELETE"
      });
      toast.success("문의 등록 성공");
    } catch (e) {
      toast.error("문의 등록 실패");
    }
  }, []);

  return { inquiryUpload };
};

export default useInquiry;
