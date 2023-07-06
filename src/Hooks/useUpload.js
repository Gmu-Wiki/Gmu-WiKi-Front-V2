import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useUpload = () => {
  const post = useCallback(async () => {
    try {
      await API.post("/admin/board");

      toast.success("글  성공");
    } catch (e) {
      toast.error("글 등록 실패");
    }
  }, []);

  return { post };
};

export default useUpload;
