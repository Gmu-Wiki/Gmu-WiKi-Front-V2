import { useCallback, useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import GetRole from "../lib/GetRole";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const useEdit = ({ props }) => {
  const navigate = useNavigate();
  const role = GetRole();

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (role === "관리자") {
      setRoleUrl("admin");
    } else if (role === "사용자") {
      setRoleUrl("user");
    }
  }, [role]);

  const editBoardUpload = useCallback(async () => {
    try {
      await API.patch(`/${roleUrl}/board/${props.id}`, {
        title: props.editTitle,
        content: props.editContent
      });

      toast.success("편집 되었습니다.");
      navigate(`/${roleUrl}/board/${props.id}`);
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
  }, [props, roleUrl, navigate]);

  const editNoticeUpload = useCallback(async () => {
    try {
      await API.patch(`/${roleUrl}/notice/${props.id}`, {
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
  }, [props, roleUrl, navigate]);

  return { editBoardUpload, editNoticeUpload };
};

export default useEdit;
