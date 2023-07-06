import { useState, useReducer, useRef, useCallback } from "react";
import * as S from "./style";
import * as C from "../index";

function reducer(state, action) {
  const newState = {
    ...state,
    [action.name]: action.value,
  };

  return newState;
}

export default function InquiryWrite() {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    purpose: "선택해주세요",
    title: "",
  });

  let save = [];

  const { category } = state;
  const [numArr, setNumArr] = useState([1]);
  const [content, setContent] = useState("");
  const [isAll, setIsAll] = useState(false);
  const textareaRef = useRef(null);

  const onChange = e => {
    dispatch(e.target);
  };

  const onChangeTextArea = e => {
    setContent(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    if (isAll) {
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
        {edit && (
          <C.WriteOption
            content={content}
            setContent={setContent}
            textareaRef={textareaRef}
            numArr={numArr}
            setNumArr={setNumArr}
          />
        )}
      </S.WriteOptions>
      {edit && (
        <S.WriteBox>
          <C.EditWriteBox
            title={title}
            content={content}
            textareaRef={textareaRef}
            onChange={onChange}
            onChangeTextArea={onChangeTextArea}
            numArr={numArr}
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
        <S.RegisterButton>등록하기</S.RegisterButton>
      </S.ButtonContainer>
    </>
  );
}
