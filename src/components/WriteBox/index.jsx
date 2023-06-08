import { useCallback, useReducer, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";
import useWrite from "../../Hooks/useWrite";
import axios from "axios";
import EnvConfig from "../../apis/EnvConfig";
import { toast } from "react-toastify";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function WriteBox() {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    category: "선택해주세요",
    title: "",
  });
  const { category, title } = state;
  const [numArr, setNumArr] = useState([1]);
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");

  let save = [];

  const handleKeyDown = e => {
    const textarea = textareaRef.current;
    if (e.key === "Tab") {
      e.preventDefault();
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      const Tab = "  ";

      const newContent =
        content.substring(0, startPos) + Tab + content.substring(endPos);

      setContent(newContent);
    } else if (e.key === "Enter") {
      setNumArr([]);
      for (let i = 1; i <= content.split("\n").length + 1; i++) {
        save.push(i);
        setNumArr(save);
      }
    }
  };

  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = useCallback(
    async e => {
      setLoading(false);

      const fileName = e.target.files[0];
      const formData = new FormData();
      formData.append("file", fileName);

      // await axios.post(EnvConfig.IMGPOSTURL, formData);
      // const responseData = response.data();
      // console.log(responseData);

      const imgObj = {
        src: loading ? "![업로드 중..](...)" : `![](${fileName.name})`,
      };

      setLoading(true);

      const textarea = textareaRef.current;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      const newValue =
        content.substring(0, startPos) + imgObj.src + content.substring(endPos);

      setContent(newValue);
      textarea.setSelectionRange(
        startPos + imgObj.length,
        startPos + imgSrc.length
      );
    },
    [content, imgSrc.length, loading]
  );

  const onChange = e => {
    dispatch(e.target);
  };

  const onChangeTextArea = e => {
    setContent(e.target.value);
    // textarea 높이 늘리기
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleEdit = () => {
    setEdit(true);
    setPreview(false);
  };

  const handlePreview = () => {
    setEdit(false);
    setPreview(true);
  };

  const writePost = useWrite(category, title, content);

  return (
    <>
      <S.ChangeButtonContainer>
        <S.EditButton checked={edit} onClick={handleEdit}>
          편집
        </S.EditButton>
        <S.PreviewButton checked={preview} onClick={handlePreview}>
          미리보기
        </S.PreviewButton>
      </S.ChangeButtonContainer>
      {edit && (
        <S.WriteBox>
          <C.EditWriteBox
            category={category}
            title={title}
            onChange={onChange}
            onChangeTextArea={onChangeTextArea}
            numArr={numArr}
            content={content}
            textareaRef={textareaRef}
            handleKeyDown={handleKeyDown}
          />
        </S.WriteBox>
      )}
      {preview && (
        <S.WriteBox>
          <C.PreviewWriteBox content={content} />
        </S.WriteBox>
      )}
      <S.ButtonContainer>
        {edit && (
          <S.FileButtonContainer>
            <label htmlFor="file">파일첨부</label>
            <input
              accept="image/*"
              multiple
              type="file"
              id="file"
              ref={fileRef}
              onChange={handleUpload}
            />
          </S.FileButtonContainer>
        )}
        <S.RegisterButton onClick={writePost}>등록하기</S.RegisterButton>
      </S.ButtonContainer>
    </>
  );
}

export default WriteBox;
