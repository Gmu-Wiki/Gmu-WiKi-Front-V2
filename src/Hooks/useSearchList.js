import API from "../apis";
import { useEffect, useState } from "react";
import GetRole from "../lib/GetRole";

const useSearchList = ({ inputValue }) => {
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
          title: inputValue
        });

        setSearchList(data.boardTitleList);
      } catch (error) {
        console.log(error);
      }
    };

    if (typeof inputValue === "string" && inputValue.trim() !== "") {
      fetchData();
    }
  }, [inputValue, roleUrl]);

  return { searchList };
};

export default useSearchList;
