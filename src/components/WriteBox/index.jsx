import { useReducer, useState } from "react";
import * as S from "./style";
import * as C from "../index";

function reducer(state, action) {
  console.log("으아아아아아")
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
  }) 

  const {category, title, content} = state;

  const onChange = (e) => {
    dispatch(e.target);
  }

  return (
    <>
      <S.EditButton>편집</S.EditButton>
      <S.PreviewButton>미리보기</S.PreviewButton>
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
            <textarea type="text" name="content" value={content} onChange={onChange} />
        </S.ContentInput>
      </S.WriteBox>
      <S.RegisterButton>등록하기</S.RegisterButton>
    </>
  );
}

export default WriteBox;
