import API from "../apis";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetRole from "../lib/GetRole";
import useFetch from "./useFetch";

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

  const data = GetRole();

  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  let { id } = useParams();

  const [roleUrl, setRoleUrl] = useState("");

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  const { fetch } = useFetch({
    url: `/${roleUrl}/notice/${id}`,
    method: "get",
    onSuccess: data => {
      setState(data);
    },
    erros: {
      400: "글을 불러오지 못했습니다."
    }
  });

  useEffect(() => {
    if (roleUrl) {
      fetch();
    }
  }, [roleUrl]);

  return { uploadNotice, deleteNotice, state };
};

export default useNotice;
