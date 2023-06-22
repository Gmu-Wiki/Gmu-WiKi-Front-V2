import axios from "axios";
import { useEffect, useState } from "react";
import EnvConfig from "../apis/EnvConfig";
import { toast } from "react-toastify";
import useToken from "./useToken";

const useHistory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [editDate, setEditDate] = useState("");
  const { accessToken } = useToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          EnvConfig.GETHISTORY,
          {},
          {
            headers: {
              Authorization: `${accessToken}`,
            },
          }
        );
        const historyData = response.data;
        setTitle(historyData.title);
        setContent(historyData.content);
        setCreateDate(historyData.createdDate);
        setEditDate(historyData.editedDate);
      } catch (error) {
        toast.error("글을 불러오는데 실패했습니다.");
      }
    };

    fetchData();
  }, [accessToken]);

  return { title, content, createDate, editDate };
};

export default useHistory;
