import axios from "axios";
import { useEffect, useState } from "react";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";

const useHistory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    axios
      .get(EnvConfig.GETHISTORY)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setCreateDate(res.data.createdDate);
        setEditDate(res.data.editedDate);
      })
      .catch(err => toast.error("무언가가 잘못됬다 "));
  }, []);
  return (title, content, createDate, editDate);
};

export default useHistory;
