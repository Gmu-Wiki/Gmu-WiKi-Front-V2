import { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../apis";

const useUpload = ({ props }) => {
  const navigate = useNavigate();

  const uploadHandler = useCallback(async () => {
    try {
      await API.post(`/board`, {
        title: props.title,
        content: props.content,
        boardType: props.category,
        boardDetailType: props.detailCategory
      });

      toast.success("글 등록에 성공하였습니다.");
      navigate("/");
    } catch (e) {
      if (!(e instanceof AxiosError)) {
        toast.error("편집에 실패하였습니다.");
        return;
      }

      if (e.response && e.response.status >= 500) {
        toast.error("글 등록에 실패하였습니다.");
      } else if (e.response && e.response.status >= 409) {
        toast.error("이미 해당하는 글 제목이 있습니다.");
      } else {
        toast.error("글 등록에 실패하였습니다.");
      }
    }
  }, [props, navigate]);

  return { uploadHandler };
};

export default useUpload;
