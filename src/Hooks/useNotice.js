import API from "../apis";
import { toast } from "react-toastify";
import { useCallback } from "react";

const useNotice = () => {
  const uploadNotice = useCallback(async () => {
    try {
      await API.post("/admin/notice", {
        title: "한준이 공지썻다 어쩌라고",
        content: "내용이지용"
      });

      toast.success("공지가 성공적으로 등록되었습니다.");
    } catch (e) {
      toast.error("공지글 작성에 실패했습니다.");
    }
  }, []);

  return { uploadNotice };
};

export default useNotice;
