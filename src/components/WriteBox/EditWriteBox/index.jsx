import { useEffect } from "react";
import * as S from "./style";

function EditWriteBox({
  category,
  detailCategory,
  title,
  onChange,
  numArr,
  content,
  textareaRef,
  onChangeTextArea
}) {
  return (
    <>
      <S.CategoryInput>
        <span>카테고리</span>
        <select name="category" onChange={onChange} value={category}>
          <option value="">선택해주세요</option>
          <option value="student">학생</option>
          <option value="teacher">선생님</option>
          <option value="major">전공</option>
          <option value="club">동아리</option>
          <option value="event">사건</option>
        </select>
        <select name="detailCategory" onChange={onChange} value={detailCategory}>
          <option value="">선택해주세요</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </S.CategoryInput>
      <S.TitleInput>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </S.TitleInput>
      <S.ContentInput>
        <div>
          {numArr.map((num, index) => (
            <span key={index}>{num}</span>
          ))}
        </div>
        <textarea
          type="text"
          rows={1}
          value={content}
          ref={textareaRef}
          onChange={onChangeTextArea}
        />
      </S.ContentInput>
    </>
  );
}

export default EditWriteBox;
