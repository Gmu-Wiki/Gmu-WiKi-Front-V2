import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../apis";
import useFetch from "./useFetch";

const useNotice = ({ props }) => {
  const navigate = useNavigate();

  const uploadNotice = useCallback(async () => {
    try {
      await API.post("/notice", {
        title: props.title,
        content: props.content
      });

      toast.success("공지가 성공적으로 등록되었습니다.");
      navigate("/notice");
    } catch (e) {
      if (e.response && e.response.status >= 403) {
        toast.error("권한이 없습니다.");
      } else if (e.response && e.response.status >= 401) {
        toast.error("로그인이 필요합니다.");
      } else {
        toast.error("공지 글을 작성할 수 없습니다.");
      }
    }
  }, [props.title, props.content, navigate]);

  const deleteNotice = useCallback(async () => {
    try {
      await API.delete(`/notice/${props.id}`);

      toast.success("공지가 성공적으로 지워졌습니다.");
      navigate("/notice");
    } catch (e) {
      if (e.response && e.response.status >= 403) {
        toast.error("권한이 없습니다.");
      } else if (e.response && e.response.status >= 401) {
        toast.error("로그인이 필요합니다.");
      } else {
        toast.error("공지 글을 삭제할 수 없습니다.");
      }
    }
  }, [props.id, navigate]);

  const [state, setState] = useState({
    id: "",
    content: "",
    title: "",
    createdDate: "",
    editedDate: ""
  });

  let { id } = useParams();

  const { fetch } = useFetch({
    url: `/notice/${id}`,
    method: "get",
    onSuccess: data => {
      setState(data);
    },
    erros: {
      400: "글을 불러오지 못했습니다."
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  return { uploadNotice, deleteNotice, state };
};

export default useNotice;
