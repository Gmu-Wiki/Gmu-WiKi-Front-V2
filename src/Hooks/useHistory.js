import { useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import GetRole from "../lib/GetRole";

const useHistory = ({ id }) => {
  const data = GetRole();

  const [roleUrl, setRoleUrl] = useState("");
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  useEffect(() => {
    const getRecordList = async () => {
      if (roleUrl) {
        try {
          const { data } = await API.get(`/${roleUrl}/board/${id}/record`);

          setRecordList(data.boardRecordList);
        } catch (e) {
          toast.error("목록을 불러오는데 실패했습니다.");
        }
      }
    };

    getRecordList();
  }, [roleUrl, id]);

  return { recordList };
};

export default useHistory;
