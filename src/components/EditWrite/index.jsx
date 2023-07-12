import { useReducer, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const EditWrite = ({ title, content }) => {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    title: ""
  });

  let save = [];

  const [numArr, setNumArr] = useState([1]);
  const textareaRef = useRef(null);

  window.onbeforeunload = () => {
    return "reloadEvent";
  };

  const onChange = e => {
    dispatch(e.target);
  };

  const onChangeTextArea = e => {
    setEditContent(e.target.value);
    const textarea = textareaRef.current;

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

  const editPost = () => {};

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
            setContent={setEditContent}
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
          />
        </S.WriteBox>
      )}
      {preview && (
        <S.WriteBox>
          <C.PreviewWriteBox content={content} />
        </S.WriteBox>
      )}
      <S.ButtonContainer>
        <S.RegisterButton onClick={editPost}>편집하기</S.RegisterButton>
      </S.ButtonContainer>
    </>
  );
};

export default EditWrite;
