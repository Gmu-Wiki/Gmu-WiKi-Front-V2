import { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../apis";

const useEdit = ({ props }) => {
  const navigate = useNavigate();

  const editBoardUpload = useCallback(async () => {
    try {
      await API.patch(`/board/${props.id}`, {
        title: props.editTitle,
        content: props.editContent
      });

      toast.success("편집 되었습니다.");
      navigate(`/board/${props.id}`);
    } catch (e) {
      if (!(e instanceof AxiosError)) {
        toast.error("편집에 실패하였습니다.");
        return;
      }
      if (e.response && e.response.status >= 500) {
        toast.error("편집에 실패하였습니다.");
      } else if (e.response && e.response.status >= 409) {
        toast.error("이미 존재하는 제목입니다.");
      } else if (e.response && e.response.status >= 400) {
        toast.error("변경 내용이 없습니다.");
      }
    }
  }, [props, navigate]);

  const editNoticeUpload = useCallback(async () => {
    try {
      await API.patch(`/notice/${props.id}`, {
        title: props.editTitle,
        content: props.editContent
      });

      toast.success("편집 되었습니다.");
      navigate(`/notice/${props.id}`);
    } catch (e) {
      if (!(e instanceof AxiosError)) {
        toast.error("이미 존재하는 제목입니다.");
        return;
      }
      if (e.response && e.response.status >= 409) {
        toast.error("이미 존재하는 제목입니다.");
      }
    }
  }, [props, navigate]);

  return { editBoardUpload, editNoticeUpload };
};

export default useEdit;
