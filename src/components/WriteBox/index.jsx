import { useReducer, useRef, useState } from "react";
import * as S from "./style";
import * as C from "../index";
import { useUpload } from "../../Hooks";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function WriteBox() {
  const [edit, setEdit] = useState(true);
  const [preview, setPreview] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    category: "선택해주세요",
    detailCategory: "선택해주세요",
    title: ""
  });

  let save = [];

  const { category, detailCategory, title } = state;
  const [numArr, setNumArr] = useState([1]);
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  const onChange = e => {
    dispatch(e.target);
  };

  window.onbeforeunload = () => {
    return "reloadEvent";
  };

  const onChangeTextArea = e => {
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
    setContent(e.target.value);
  };

  const handleEdit = () => {
    setEdit(true);
    setPreview(false);
  };

  const handlePreview = () => {
    setEdit(false);
    setPreview(true);
  };

  const { uploadHandler } = useUpload({
    props: { title, content, category, detailCategory }
  });

  const post = () => {
    const shouldPost = window.confirm("글을 등록하시겠습니까?");
    if (shouldPost) {
      uploadHandler();
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
            content={content}
            setContent={setContent}
            textareaRef={textareaRef}
            numArr={numArr}
            setNumArr={setNumArr}
          />
        )}
      </S.WriteOptions>
      {edit && (
        <S.WriteBox>
          <C.EditWriteBox
            category={category}
            detailCategory={detailCategory}
            title={title}
            content={content}
            textareaRef={textareaRef}
            onChange={onChange}
            onChangeTextArea={onChangeTextArea}
            numArr={numArr}
            type="글쓰기"
          />
        </S.WriteBox>
      )}
      {preview && (
        <S.WriteBox>
          <C.PreviewWriteBox content={content} />
        </S.WriteBox>
      )}
      <S.RegisterButton onClick={post}>등록하기</S.RegisterButton>
    </>
  );
}

export default WriteBox;
