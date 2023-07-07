import TextareaAutosize from "react-textarea-autosize";
import * as S from "./style";

function EditWriteBox({
  category,
  detailCategory,
  title,
  content,
  onChange,
  textareaRef,
  onChangeTextArea,
  numArr
}) {
  return (
    <>
      <S.CategoryInput>
        <span>카테고리</span>
        <select name="category" onChange={onChange} value={category}>
          <option value="select">선택해주세요</option>
          <option value="STUDENT">학생</option>
          <option value="TEACHER">선생님</option>
          <option value="MAJOR">전공</option>
          <option value="CLUB">동아리</option>
          <option value="INCIDENT">사건</option>
          <option value="SCHEDULE">달</option>
        </select>
        <select
          name="detailCategory"
          onChange={onChange}
          value={detailCategory}
        >
          <option value="select">선택해주세요</option>
          {category === "STUDENT" && (
            <>
              <option value="SEVENTH">7기</option>
              <option value="SIXTH">6기</option>
              <option value="FIFTH">5기</option>
            </>
          )}
          {category === "TEACHER" && (
            <>
              <option value="GENERAL">일반교과</option>
              <option value="SPECIALITY">전문교과</option>
              <option value="OTHER">전문교육부</option>
            </>
          )}
          {category === "MAJOR" && (
            <>
              <option value="MAJORS">전공</option>
            </>
          )}
          {category === "CLUB" && (
            <>
              <option value="MAJOR">전공동아리</option>
              <option value="CA">자율동아리</option>
            </>
          )}
          {category === "INCIDENT" && (
            <>
              <option value="TWENTY_SECOND">2022</option>
              <option value="TWENTY_THIRD">2023</option>
            </>
          )}
          {category === "SCHEDULE" && (
            <>
              <option value="JAN">1</option>
              <option value="FEB">2</option>
              <option value="MAR">3</option>
              <option value="APR">4</option>
              <option value="MAY">5</option>
              <option value="JUN">6</option>
              <option value="JUL">7</option>
              <option value="AUG">8</option>
              <option value="SEPT">9</option>
              <option value="OCT">10</option>
              <option value="NOV">11</option>
              <option value="DEC">12</option>
            </>
          )}
        </select>
      </S.CategoryInput>
      <S.TitleInput>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
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
