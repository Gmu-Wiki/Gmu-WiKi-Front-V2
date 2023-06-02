import * as S from "./style";

function EditWriteBox({
  category,
  title,
  onChange,
  content,
  textareaRef,
  handleKeyDown,
  onChangeTextArea,
}) {
  return (
    <>
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
          rows={1}
          value={content}
          onChange={onChangeTextArea}
          onKeyDown={handleKeyDown}
          ref={textareaRef}
        />
      </S.ContentInput>
    </>
  );
}

export default EditWriteBox;
