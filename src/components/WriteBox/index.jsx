import { useReducer, useState } from "react";
import * as S from "./style";

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
          <S.CategoryInput>
            <span>카테고리</span>
            <select name="category" onChange={onChange} value={category}>
              <option>선택해주세요</option>
              <option>학생</option>
              <option>선생님</option>
              <option>전공</option>
              <option>동아리</option>
              <option>사건</option>
            </select>
          </S.CategoryInput>
          <S.TitleInput>
            <span>제목</span>
            <input type="text" name="title" value={title} onChange={onChange} />
          </S.TitleInput>
          <S.ContentInput>
            <div>
              <span>1</span>
              <span>2</span>
            </div>
            <textarea
              type="text"
              name="content"
              value={content}
              onChange={onChange}
            />
          </S.ContentInput>
        </S.WriteBox>
      )}
      {preview && <S.WriteBox></S.WriteBox>}
      <S.RegisterButton>등록하기</S.RegisterButton>
    </>
  );
}

export default WriteBox;
