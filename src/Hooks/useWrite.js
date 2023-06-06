import axios from "axios";

const useWrite = (category, title, content) => {
  const writePost = () => {
    axios
      .post("글 보내는 곳", {
        category: category,
        title: title,
        content: content,
      })
      .then(res => console.log("글이 등록되었습니다!"))
      .catch(err => console.log("글 등록에 실패하였습니다!"));
  };
  return writePost;
};

export default useWrite;
