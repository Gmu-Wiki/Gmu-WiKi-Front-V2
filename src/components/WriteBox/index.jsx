import { useState } from "react";
import * as S from "./style";
import * as C from "../index";

function WriteBox() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  return (
    <>
      <S.WriteBox>
        <S.CategoryInput>
          <span>카테고리</span>
          <select onChange={onChangeCategory} value={category}>
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
          <input type="text" value={title} onChange={onChangeTitle} />
        </S.TitleInput>
        <S.ContentInput>
          <div>
            <span>1</span>
            <span>2</span>
          </div>
            <textarea type="text" value={content} onChange={onChangeContent} />
        </S.ContentInput>
      </S.WriteBox>
      <S.RegisterButton>등록하기</S.RegisterButton>
    </>
  );
}

export default WriteBox;
