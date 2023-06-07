import axios from "axios";
import { toast } from "react-toastify";
import EnvConfig from "../apis/EnvConfig";

const useWrite = (category, title, content, imgSrc) => {
  const writePost = () => {
    axios
      .post(EnvConfig.WRITEPOSTURL, {
        category: category,
        title: title,
        content: content,
      })
      .then(res => toast.success("글이 등록되었습니다!"))
      .catch(err => toast.error("글 등록에 실패하였습니다!"));
  };

  return writePost;
};

export default useWrite;
