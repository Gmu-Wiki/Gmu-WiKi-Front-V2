import API from "../apis";
import { useEffect, useState } from "react";
import GetRole from "../lib/GetRole";

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
        const { data } = await API.get(`/${roleUrl}/board/search`, {
          params: { title }
        });

        console.log(data);

        setSearchList(data.boardTitleList);
      } catch (error) {
        console.log(error);
      }
    };

    if (typeof inputValue === "string" && title.trim() !== "") {
      fetchData();
    }
  }, [title, roleUrl]);

  return { searchList };
};

export default useSearchList;
