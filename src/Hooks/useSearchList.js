import API from "../apis";
import { useEffect, useState } from "react";
import GetRole from "../lib/GetRole";
import { toast } from "react-toastify";

const useSearchList = ({ title }) => {
  const [searchList, setSearchList] = useState([]);
  const [roleUrl, setRoleUrl] = useState("");

  const data = GetRole();

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof title === "string" && title.trim() !== "") {
          const { data } = await API.get(
            `/${roleUrl}/board/search?title=${title}`,
            {
              params: { title }
            }
          );

          const boardTitleList = data.boardTitleList;
          setSearchList(boardTitleList);
        }
      } catch (error) {}
    };

    fetchData();
  }, [title, roleUrl]);

  return { searchList, roleUrl };
};

export default useSearchList;
