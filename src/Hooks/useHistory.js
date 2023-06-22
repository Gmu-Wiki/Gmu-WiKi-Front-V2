import axios from "axios";
import { useState, useEffect } from "react";
import useToken from "./useToken";
import { toast } from "react-toastify";

const useHistory = () => {
  const { accessToken } = useToken();
  const [boardRecordList, setBoardRecordList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("url", {
          headers: {
            Authorization: accessToken,
          },
        });
        setBoardRecordList(response.data.boardRecordList);
      } catch (error) {
        toast.error("리스트를 불러오지 못함");
      }
    };

    fetchData();
  }, [accessToken]);

  return { boardRecordList };
};

export default useHistory;
