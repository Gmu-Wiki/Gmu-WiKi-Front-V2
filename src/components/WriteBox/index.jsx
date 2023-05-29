import { useReducer, useState } from "react";
import * as S from "./style";
import * as C from "../index";

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
    content: "",
  });

  const { category, title, content } = state;

  const onChange = e => {
    dispatch(e.target);
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
      <S.EditButton checked={edit} onClick={handleEdit}>
        편집
      </S.EditButton>
      <S.PreviewButton checked={preview} onClick={handlePreview}>
        미리보기
      </S.PreviewButton>
      {edit && (
        <S.WriteBox>
          <C.EditWriteBox category={category} title={title} content={content} onChange={onChange} />
        </S.WriteBox>
      )}
      {preview && <S.WriteBox></S.WriteBox>}
      <S.RegisterButton>등록하기</S.RegisterButton>
    </>
  );
}

export default WriteBox;
