import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useHistory = () => {
  const [historyRecordList, setHistoryRecordList] = useState([]);

  const { fetch } = useFetch({
    url: "/user/board",
    method: "get",
    onSuccess: data => {
      setHistoryRecordList(data);
    },
    errors: {
      403: "글 목록을 볼 권한이 없습니다.",
      401: "로그인을 다시 해주세요.",
      404: "글 역사를 찾을 수 없습니다.",
      500: "서버에 문제가 생겼습니다.",
    },
  });

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { historyRecordList };
};

export default useHistory;
