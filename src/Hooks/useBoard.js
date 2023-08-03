import { useEffect, useState } from "react";
import API from "../apis";
import { toast } from "react-toastify";
import GetRole from "../lib/GetRole";

const useBoard = ({ boardType }) => {
  const data = GetRole();

  const [roleUrl, setRoleUrl] = useState("");
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    if (data === "관리자") {
      setRoleUrl("admin");
    } else if (data === "사용자") {
      setRoleUrl("user");
    }
  }, [data]);

  useEffect(() => {
    const getBoardList = async () => {
      if (roleUrl) {
        try {
          const { data } = await API.get(`/${roleUrl}/board`, {
            params: { boardType }
          });

          setBoardList(data.boardList);
        } catch (e) {
          toast.error("목록을 불러오는데 실패했습니다.");
        }
      }
    };

    getBoardList();
  }, [boardType, roleUrl]);

  return { boardList, roleUrl };
};

export default useBoard;
