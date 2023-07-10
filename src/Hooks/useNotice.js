import API from "../apis";
import { toast } from "react-toastify";
import { useCallback } from "react";

const useNotice = ({ props }) => {
  const uploadNotice = useCallback(async () => {
    try {
      await API.post("/admin/notice", {
        title: props.title,
        content: props.content
      });

      toast.success("공지가 성공적으로 등록되었습니다.");
    } catch (e) {
      toast.error("공지글 작성에 실패했습니다.");
    }
  }, [props.title, props.content]);

  return { uploadNotice };
};

export default useNotice;
