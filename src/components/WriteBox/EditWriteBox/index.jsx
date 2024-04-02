import TextareaAutosize from "react-textarea-autosize";
import * as S from "./style";
import * as I from "../../../assets";
import { memo } from "react";
import GetRole from "../../../lib/GetRole";

function EditWriteBox({
  category,
  detailCategory,
  title,
  content,
  onChange,
  textareaRef,
  onChangeTextArea,
  numArr,
  type
}) {
  const role = GetRole();
  const isAdmin = role === "관리자";
  const isUser = role === "사용자";

  return (
    <S.EditWriteBoxContainer>
      <S.CategoryInputBox type={type}>
        {type === "문의목적" && (
          <>
            <span>문의목적</span>
            <select name="category" onChange={onChange} value={category}>
              <option value="select">선택해주세요</option>
              <option value="DELETE">삭제요청</option>
              <option value="QUESTION">질문사항</option>
              <option value="REPORT">신고</option>
            </select>
          </>
        )}
        {isAdmin && type === "글쓰기" && (
          <>
            <span>카테고리</span>
            <select name="category" onChange={onChange} value={category}>
              <option value="select">선택해주세요</option>
              <option value="STUDENT">학생</option>
              <option value="TEACHER">선생님</option>
              <option value="MAJOR">전공</option>
              <option value="CLUB">동아리</option>
              <option value="INCIDENT">사건</option>
              <option value="SCHEDULE">학사일정</option>
              <option value="PROJECT">프로젝트</option>
            </select>
            <select
              name="detailCategory"
              onChange={onChange}
              value={detailCategory}
            >
              <option value="select">선택해주세요</option>
              {category === "STUDENT" && (
                <>
                  <option value="EIGHTH">8기</option>
                  <option value="SEVENTH">7기</option>
                  <option value="SIXTH">6기</option>
                  <option value="FIFTH">5기</option>
                </>
              )}
              {category === "TEACHER" && (
                <>
                  <option value="GENERAL">일반교과</option>
                  <option value="SPECIALITY">전문교과</option>
                  <option value="OTHER">기타 부서</option>
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
                  <option value="TWENTY_FIRST">2021</option>
                  <option value="TWENTY_SECOND">2022</option>
                  <option value="TWENTY_THIRD">2023</option>
                  <option value="TWENTY_FOURTH">2024</option>
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
              {category === "PROJECT" && (
                <>
                  <option value="TEAM">팀</option>
                  <option value="INDIVIDUAL">개인</option>
                </>
              )}
            </select>
          </>
        )}
        {isUser && type === "글쓰기" && (
          <>
            <span>카테고리</span>
            <select name="category" onChange={onChange} value={category}>
              <option value="select">선택해주세요</option>
              <option value="CLUB">동아리</option>
              <option value="INCIDENT">사건</option>
              <option value="PROJECT">프로젝트</option>
            </select>
            <select
              name="detailCategory"
              onChange={onChange}
              value={detailCategory}
            >
              <option value="select">선택해주세요</option>

              {category === "CLUB" && (
                <>
                  <option value="MAJOR">전공동아리</option>
                  <option value="CA">자율동아리</option>
                </>
              )}
              {category === "MAJOR" && (
                <>
                  <option value="MAJORS">전공</option>
                </>
              )}
              {category === "INCIDENT" && (
                <>
                  <option value="TWENTY_FIRST">2021</option>
                  <option value="TWENTY_SECOND">2022</option>
                  <option value="TWENTY_THIRD">2023</option>
                  <option value="TWENTY_FOURTH">2024</option>
                </>
              )}
              {category === "PROJECT" && (
                <>
                  <option value="TEAM">팀</option>
                  <option value="INDIVIDUAL">개인</option>
                </>
              )}
            </select>
          </>
        )}
      </S.CategoryInputBox>
      <S.TitleInputBox>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </S.TitleInputBox>
      <S.ContentInputBox>
        <S.LineNumberBox>
          {numArr.map((num, idx) => (
            <span key={idx}>{num}</span>
          ))}
        </S.LineNumberBox>
        <TextareaAutosize
          value={content}
          ref={textareaRef}
          onChange={onChangeTextArea}
        />
      </S.ContentInputBox>
      <S.AlarmBox>
        <I.AlarmIcon />
        <p>엔터키 / 스페이스바를 두번 작성해야 줄바꿈이 됩니다.</p>
      </S.AlarmBox>
    </S.EditWriteBoxContainer>
  );
}

export default memo(EditWriteBox);
