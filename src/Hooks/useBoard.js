import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../apis";

const useBoard = ({ boardType }) => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const getBoardList = async () => {
      try {
        const { data } = await API.get(`/board`, {
          params: { boardType }
        });

        setBoardList(data.boardList);
      } catch (e) {
        toast.error("목록을 불러오는데 실패했습니다.");
      }
    };

    getBoardList();
  }, [boardType]);

  return { boardList };
};

export default useBoard;
