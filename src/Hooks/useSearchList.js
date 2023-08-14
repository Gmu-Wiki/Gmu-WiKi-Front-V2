import API from "../apis";
import { useEffect, useState } from "react";
import GetRole from "../lib/GetRole";
import { toast } from "react-toastify";

const useSearchList = ({ title }) => {
  const [searchList, setSearchList] = useState([]);
  const [roleUrl, setRoleUrl] = useState(""); // 추가: roleUrl 상태

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
          console.log(boardTitleList);
          setSearchList(boardTitleList);
        }
      } catch (error) {
        console.log("Error");
      }
    };

    fetchData();
  }, [title, roleUrl]);

  // 수정: searchList와 roleUrl을 반환
  return { searchList, roleUrl };
};

export default useSearchList;
