import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useUpload = () => {
  const title = "운린이";
  const content = "히히";
  const boardType = "STUDENT";
  const boardDetailType = "FIFTH";
  const uploadHandler = useCallback(async () => {
    try {
      await API.post("/user/board", {
        title: title,
        content: content,
        boardType: boardType,
        boardDetailType: boardDetailType
      });

      toast.success("글  성공");
    } catch (e) {
      toast.error("글 등록 실패");
    }
  }, []);

  return { uploadHandler };
};

export default useUpload;
