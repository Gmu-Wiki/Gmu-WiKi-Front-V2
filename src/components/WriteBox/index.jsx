import { useReducer, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";
import useWrite from "../../Hooks/useWrite";
import axios from "axios";
import EnvConfig from "../../apis/EnvConfig";

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
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");

  const handleKeyDown = e => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = textareaRef.current;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      const Tab = "  ";

      const newContent =
        content.substring(0, startPos) + Tab + content.substring(endPos);

      setContent(newContent);
    }
  };
  const [imgLink, setImgLink] = useState("");

  const handleUpload = e => {
    setImgSrc(e.target.value);

    const imgObj = {
      src: `![](${imgLink})`,
    };

    axios
      .post(EnvConfig.IMGPOSTURL, { file: imgSrc })
      .then(res => setImgLink(res.data))
      .catch(err => setImgLink("변환 실패"));

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
  };

  const onChange = e => {
    dispatch(e.target);
  };

  const onChangeTextArea = e => {
    setContent(e.target.value);
    // textarea 높이 늘리기
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
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
