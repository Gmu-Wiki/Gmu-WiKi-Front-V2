import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";
import { useEdit } from "../../Hooks";

const EditWrite = ({ title, content, id }) => {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [editTitle, setEditTitle] = useState("");

  let save = [];

  const [numArr, setNumArr] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    setEditContent(content);
    setEditTitle(title);

    for (let i = 1; i <= content.split("\n").length; i++) {
      save.push(i);
    }
    setNumArr(save);
  }, [content, title]);

  window.onbeforeunload = () => {
    return "reloadEvent";
  };

  const onChange = e => {
    setEditTitle(e.target.value);
  };

  const onChangeTextArea = e => {
    setEditContent(e.target.value);
    const textarea = textareaRef.current;
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
    textarea.style.height = `${lineHeight}px`;
    const numberOfLines = Math.floor(textarea.scrollHeight / lineHeight);
    textarea.style.height = `${numberOfLines * lineHeight + 20}px`;

    setNumArr([]);
    for (let i = 1; i <= numberOfLines; i++) {
      save.push(i);
    }
    setNumArr(save);
  };

  const handleEdit = () => {
    setEdit(true);
    setPreview(false);
  };

  const handlePreview = () => {
    setEdit(false);
    setPreview(true);
  };

  const { editBoardUpload } = useEdit({
    props: { id, editContent, editTitle }
  });

  const editPost = () => {
    const shouldPost = window.confirm("이 글을 편집하시겠습니까?");
    if (shouldPost) {
      editBoardUpload();
    }
  };

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
            content={editContent}
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
            title={editTitle}
            content={editContent}
            textareaRef={textareaRef}
            onChange={onChange}
            onChangeTextArea={onChangeTextArea}
            numArr={numArr}
          />
        </S.WriteBox>
      )}
      {preview && (
        <S.WriteBox>
          <C.PreviewWriteBox content={editContent} />
        </S.WriteBox>
      )}
      <S.RegisterButton onClick={editPost}>편집하기</S.RegisterButton>
    </>
  );
};

export default React.memo(EditWrite);
