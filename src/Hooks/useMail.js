import { useCallback } from "react";
import API from "../apis";
import { toast } from "react-toastify";

const useMail = ({ props }) => {
  const postApproveMail = useCallback(async () => {
    try {
      await API.post(`/admin/inquiry/approve/${props.id}`);
      toast.success("승인 메일 발송 성공");
    } catch (e) {
      console.log(e);
      toast.error("메일 발송 실패");
    }
  }, [props.id]);

  const postRefusalMail = useCallback(async () => {
    try {
      await API.post(`/admin/inquiry/refusal/${props.id}`);
      toast.success("거부 메일 발송 성공");
    } catch (e) {
      console.log(e);
      toast.error("메일 발송 실패");
    }
  }, [props.id]);

  return { postApproveMail, postRefusalMail };
};

export default useMail;
