import TextareaAutosize from 'react-textarea-autosize';
import * as S from "./style";

function EditWriteBox({
  category,
  detailCategory,
  title,
  content,
  onChange,
  textareaRef,
  onChangeTextArea,
  numArr,
}) {
  return (
    <>
      <S.CategoryInput>
        <span>카테고리</span>
        <select
          name="category"
          onChange={onChange}
          value={category}
        >
          <option value="select">선택해주세요</option>
          <option value="student">학생</option>
          <option value="teacher">선생님</option>
          <option value="major">전공</option>
          <option value="club">동아리</option>
          <option value="event">사건</option>
        </select>
        <select
          name="detailCategory"
          onChange={onChange}
          value={detailCategory}
        >
          <option value="select">선택해주세요</option>
          {category === "student" && (
            <>
              <option value="7grade">7기</option>
              <option value="6grade">6기</option>
              <option value="5grade">5기</option>
            </>
          )}
          {category === "teacher" && (
            <>
              <option value="normal">일반교과</option>
              <option value="professional">전문교과</option>
              <option value="professionalEdu">전문교육부</option>
            </>
          )}
          {category === "major" && (
            <>
              <option value="major">전공</option>
            </>
          )}
          {category === "club" && (
            <>
              <option value="major-club">전공동아리</option>
              <option value="autonomy-club">자율동아리</option>
            </>
          )}
          {category === "event" && (
            <>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </>
          )}
        </select>
      </S.CategoryInput>
      <S.TitleInput>
        <span>제목</span>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
      </S.TitleInput>
      <S.ContentInput>
        <div>
          {numArr.map((num, idx) => (
            <span key={idx}>{num}</span>
          ))}
        </div>
        <TextareaAutosize
          value={content}
          ref={textareaRef}
          onChange={onChangeTextArea}
        />
      </S.ContentInput>
    </>
  );
}

export default EditWriteBox;
