import axios from "axios";
import { toast } from "react-toastify";
import EnvConfig from "../apis/EnvConfig";
import useToken from "./useToken";

const useWrite = (category, detailCategory, title, content) => {
  const { accessToken } = useToken();

  const writePost = async () => {
    try {
      await axios.post(
        EnvConfig.WRITEPOSTURL,
        {
          title: title,
          content: content,
          boardType: category,
          boardDetailType: detailCategory,
        },
        { headers: { Authorization: accessToken } }
      );
      toast.success("글이 등록되었습니다!");
    } catch (error) {
      toast.error("글 등록에 실패하였습니다!");
    }
  };

  return writePost;
};

export default useWrite;
