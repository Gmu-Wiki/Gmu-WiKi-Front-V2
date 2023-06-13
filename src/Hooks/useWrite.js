import axios from "axios";
import { toast } from "react-toastify";
import EnvConfig from "../apis/EnvConfig";

const useWrite = (category, detailCategory, title, content) => {
  const writePost = () => {
    axios
      .post(EnvConfig.WRITEPOSTURL, {
        title: title,
        content: content,
        boardType: category,
        detailCategory: detailCategory,
      })
      .then(res => toast.success("글이 등록되었습니다!"))
      .catch(err => toast.error("글 등록에 실패하였습니다!"));
  };

  return writePost;
};

export default useWrite;
