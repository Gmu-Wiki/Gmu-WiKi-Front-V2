import { useCallback, useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GetRole from "../lib/GetRole";

const useDelete = ({ id }) => {
  const [roleUrl, setRoleUrl] = useState("");
  const navigate = useNavigate();
  const data = GetRole();

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const boardDelete = useCallback(async () => {
    try {
      await API.delete(`/${roleUrl}/board/${id}`);
      toast.success("삭제 성공");
      navigate("/");
    } catch (e) {
      if (e.response && e.response.status >= 403) {
        toast.error("자신의 글만 삭제할 수 있습니다.");
      } else {
        toast.error("글 삭제에 실패했습니다.");
      }
    }
  }, [roleUrl, navigate, id]);

  return { boardDelete };
};

export default useDelete;
