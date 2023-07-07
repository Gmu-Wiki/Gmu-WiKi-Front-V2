import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useUpload = ({ props }) => {
  const uploadHandler = useCallback(async () => {
    try {
      await API.post("/user/board", {
        title: props.title,
        content: props.content,
        boardType: props.category,
        boardDetailType: props.detailCategory
      });

      toast.success("글  성공");
    } catch (e) {
      toast.error("글 등록 실패");
    }
  }, [props.title, props.content, props.category, props.detailCategory]);

  return { uploadHandler };
};

export default useUpload;
