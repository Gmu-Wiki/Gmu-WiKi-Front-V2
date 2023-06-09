import { useCallback, useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import GetRole from "../lib/GetRole";
import { useNavigate } from "react-router-dom";

const useUpload = ({ props }) => {
  const data = GetRole();
  const navigate = useNavigate();

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const uploadHandler = useCallback(async () => {
    try {
      await API.post(`/${roleUrl}/board`, {
        title: props.title,
        content: props.content,
        boardType: props.category,
        boardDetailType: props.detailCategory
      });

      toast.success("글 등록에 성공하였습니다.");
      navigate("/");
    } catch (e) {
      toast.error("글 등록에 실패하였습니다.");
    }
  }, [
    props.title,
    props.content,
    props.category,
    props.detailCategory,
    roleUrl,
    navigate
  ]);

  return { uploadHandler };
};

export default useUpload;
