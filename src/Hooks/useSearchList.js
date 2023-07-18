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
        const { data } = await API.get(`/${roleUrl}/board/search`, {
          params: { title }
        });
        setSearchList(data);
      } catch (error) {
        console.log("Error");
      }
    };

    if (typeof title === "string" && title.trim() !== "") {
      fetchData();
    }
  }, [title, roleUrl]);

  return { searchList };
};

export default useSearchList;
