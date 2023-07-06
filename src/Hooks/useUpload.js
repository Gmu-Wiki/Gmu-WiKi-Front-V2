import API from "../apis";
import { toast } from "react-toastify";

const useUpload = async ({ title, content, boardType, boardDetailType }) => {
  try {
    await API.post("/admin/board", {
      title: title,
      content: content,
      boardType: boardType,
      boardDetailType: boardDetailType
    });

    toast.success("글  성공");
  } catch (e) {
    toast.error("글 등록 실패");
  }

  return;
};

export default useUpload;
