import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../apis";

const useHistory = ({ id }) => {
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    const getRecordList = async () => {
      try {
        const { data } = await API.get(`/board/${id}/record`);

        setRecordList(data.boardRecordList);
      } catch (e) {
        toast.error("목록을 불러오는데 실패했습니다.");
      }
    };

    getRecordList();
  }, [id]);

  return { recordList };
};

export default useHistory;
