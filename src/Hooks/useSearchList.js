import { useEffect, useState } from "react";
import API from "../apis";

const useSearchList = ({ title }) => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof title === "string" && title.trim() !== "") {
          const { data } = await API.get(`/board/search?title=${title}`, {
            params: { title }
          });

          const boardTitleList = data.boardTitleList;
          setSearchList(boardTitleList);
        }
      } catch (error) {}
    };

    fetchData();
  }, [title]);

  return { searchList };
};

export default useSearchList;
