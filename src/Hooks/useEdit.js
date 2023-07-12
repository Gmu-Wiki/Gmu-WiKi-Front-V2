import { useCallback, useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import GetRole from "../lib/GetRole";
import { useNavigate } from "react-router-dom";

const useUpload = ({ id, editTitle, editContent }) => {
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

  const editUpload = useCallback(async () => {
    try {
      await API.patch(`/${roleUrl}/board/${id}`, {
        title: editTitle,
        content: editContent
      });

      toast.success("편집 되었습니다.");
      navigate("/");
    } catch (e) {
      toast.error("편집에 실패하였습니다.");
    }
  }, [editTitle, editContent, id, roleUrl, navigate]);

  return { editUpload };
};

export default useUpload;