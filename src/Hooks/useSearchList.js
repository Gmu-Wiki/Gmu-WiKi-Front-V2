import API from "../apis";
import { useEffect, useState } from "react";
import GetRole from "../lib/GetRole";
import { toast } from "react-toastify";

const useSearchList = ({ title }) => {
  const [searchList, setSearchList] = useState([]);

  const data = GetRole();
  const [roleUrl, setRoleUrl] = useState("");

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

          // 가정: 서버 응답 구조에서 boardTitleList를 가져온다고 가정
          const boardTitleList = data.boardTitleList;
          console.log(boardTitleList.length);
          setSearchList(boardTitleList);
        }
      } catch (error) {
        console.log("Error");
      }
    };

    fetchData();
  }, [title, roleUrl]);

  return { searchList };
};

export default useSearchList;
