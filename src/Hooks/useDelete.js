import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../apis";

const useDelete = ({ id }) => {
  const navigate = useNavigate();

  const boardDelete = useCallback(async () => {
    try {
      await API.delete(`/board/${id}`);
      toast.success("삭제 성공");
      navigate("/");
    } catch (e) {
      if (e.response && e.response.status >= 403) {
        toast.error("자신의 글만 삭제할 수 있습니다.");
      } else {
        toast.error("글 삭제에 실패했습니다.");
      }
    }
  }, [navigate, id]);

  return { boardDelete };
};

export default useDelete;
