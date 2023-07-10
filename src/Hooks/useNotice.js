import API from "../apis";
import { toast } from "react-toastify";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNotice = ({ props }) => {
  const navigate = useNavigate();

  const uploadNotice = useCallback(async () => {
    try {
      await API.post("/admin/notice", {
        title: props.title,
        content: props.content
      });

      toast.success("공지가 성공적으로 등록되었습니다.");
      navigate("/notice");
    } catch (e) {
      toast.error("공지글 작성에 실패했습니다.");
    }
  }, [props.title, props.content, navigate]);

  const deleteNotice = useCallback(async () => {
    try {
      await API.delete(`/admin/notice/${props.id}`);

      toast.success("공지가 성공적으로 지워졌습니다.");
      navigate("/notice");
    } catch (e) {
      console.log(e);
      toast.error("공지 제거에 실패했습니다");
    }
  }, [props.id, navigate]);

  return { uploadNotice, deleteNotice };
};

export default useNotice;
