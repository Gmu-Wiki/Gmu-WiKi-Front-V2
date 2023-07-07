import { useState, useReducer, useRef } from "react";
import * as S from "./style";
import * as C from "../index";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function InquiryWrite() {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    purpose: "선택해주세요",
    title: ""
  });

  let save = [];

  const { title, purpose } = state;
  const [numArr, setNumArr] = useState([1]);
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  const onChange = e => {
    dispatch(e.target);
  };

  const onChangeTextArea = e => {
    setContent(e.target.value);
    const textarea = textareaRef.current;

    setNumArr([]);
    for (let i = 1; i <= textarea.value.split("\n").length; i++) {
      save.push(i);
      setNumArr(save);
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
            type="문의목적"
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
