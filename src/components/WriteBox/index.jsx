import { useCallback, useReducer, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";
import useWrite from "../../Hooks/useWrite";
import axios from "axios";
import EnvConfig from "../../apis/EnvConfig";
import HeaderConfig from "../../apis/HeaderConfig";
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
    yearCategory: "선택해주세요",
    title: "",
  });
  const { category, title, detailCategory } = state;
  const [numArr, setNumArr] = useState([1]);
  const [content, setContent] = useState("");
  const [isAll, setIsAll] = useState(false);
  const textareaRef = useRef(null);

  let save = [];

  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [urlFile, setUrlFile] = useState("");

  const handleUpload = useCallback(
    async e => {
      const fileName = e.target.files[0];
      const formData = new FormData();
      formData.append("file", fileName);
      setUrlFile(fileName.name);
      console.log(fileName.name);
      console.log(urlFile);

      await axios
        .post(EnvConfig.IMGPOSTURL, formData, HeaderConfig.Headers)
        .then(res => {
          console.log(res.data);
          setLoading(false);
          // setUrlFile(res.data.url);
        })
        .catch(err => {
          toast.error("이미지를 불러오는데 실패했습니다.");
          setLoading(true);
          // setUrlFile("이미지를 불러오는데 실패했습니다.");
        });

      const imgObj = loading ? "![업로드 중..](...)" : `![](${urlFile})`;

      const textarea = textareaRef.current;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      const newValue =
        content.substring(0, startPos) + imgObj + content.substring(endPos);

      setContent(newValue);
    },
    [content, loading, urlFile]
  );

  const onChange = e => {
    dispatch(e.target);
  };

  const onChangeTextArea = e => {
    setContent(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    if(isAll) {
      textarea.style.height = "42px";
      setIsAll(false);
    } else {
      textarea.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    
    setNumArr([]);
    for (let i = 1; i <= textarea.value.split("\n").length; i++) {
      save.push(i);
      setNumArr(save);
    }
  };

  const handleKeyDown = e => {
    const textarea = textareaRef.current;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;

    if (e.ctrlKey && e.key === "a") {
      e.target.select();
    } else if (
      e.key === "Backspace" &&
      textarea.value &&
      selectionStart === 0 &&
      selectionEnd === textarea.value.length
    ) {
      setIsAll(true);
    }
  };

  const handleEdit = () => {
    setEdit(true);
    setPreview(false);
  };

  const handlePreview = () => {
    setEdit(false);
    setPreview(true);
  };

  const writePost = useWrite(category, detailCategory, title, content);

  return (
    <>
    <S.WriteOptions>
      <S.ChangeButtonContainer>
        <S.EditButton checked={edit} onClick={handleEdit}>
          편집
        </S.EditButton>
        <S.PreviewButton checked={preview} onClick={handlePreview}>
          미리보기
        </S.PreviewButton>
      </S.ChangeButtonContainer>
      {edit && <C.WriteOption content={content} setContent={setContent} textareaRef={textareaRef} numArr={numArr} setNumArr={setNumArr} />}
      </S.WriteOptions>
      {edit && (
        <S.WriteBox>
          <C.EditWriteBox
            category={category}
            detailCategory={detailCategory}
            title={title}
            textareaRef={textareaRef}
            onChange={onChange}
            onChangeTextArea={onChangeTextArea}
            numArr={numArr}
            content={content}
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
