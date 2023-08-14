import React from "react";
import * as S from "./style";
import * as I from "../../assets/index";
import { useRef } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useFile } from "../../Hooks";

function WriteOption({ content, setContent, textareaRef, setNumArr }) {
  const { upload, isLoading } = useFile();
  const fileRef = useRef(null);

  const handleUpload = useCallback(
    async e => {
      const file = e.currentTarget.files?.item(0);

      if (!file) return toast.error("이미지 파일이 아닙니다.");
      const url = await upload([file]);
      if (!url) return;

      const imgObj = isLoading
        ? `![Uploading img.png...]()`
        : `![image](${url})`;

      const textarea = textareaRef.current;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      const newValue =
        content.substring(0, startPos) + imgObj + content.substring(endPos);

      setContent(newValue);
    },
    [upload, content, setContent, textareaRef, isLoading]
  );

  const addOption = text => {
    const startPos = textareaRef.current.selectionStart;
    const endPos = textareaRef.current.selectionEnd;

    const newValue =
      content.substring(0, startPos) + text + content.substring(endPos);
    setContent(newValue);
  };

  const passOption = option => {
    if (option === "h1") {
      addOption("# 텍스트");
    } else if (option === "h2") {
      addOption("## 텍스트");
    } else if (option === "h3") {
      addOption("### 텍스트");
    } else if (option === "h4") {
      addOption("#### 텍스트");
    } else if (option === "b") {
      addOption("__텍스트__");
    } else if (option === "i") {
      addOption("_텍스트_");
    } else if (option === "draw") {
      addOption("~~텍스트~~");
    } else if (option === "details") {
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 132
      }px`;
      setNumArr(numArr => [
        ...numArr,
        numArr.length + 1,
        numArr.length + 2,
        numArr.length + 3,
        numArr.length + 4
      ]);
      addOption(">>\n" + ">==제목==<\n" + "\n___\n" + "(텍스트)\n" + "<<");
    } else if (option === "quote") {
      addOption("> 텍스트");
    } else if (option === "a") {
      addOption("[텍스트](링크를 입력해주세요)");
    } else if (option === "img") {
    } else if (option === "code") {
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 44
      }px`;
      setNumArr(numArr => [...numArr, numArr.length + 1, numArr.length + 2]);
      addOption(`\`\`\`\n텍스트\n\`\`\``);
    }
  };

  return (
    <>
      <S.OptionContainer>
        <div onClick={() => passOption("h1")}>
          <I.H1Icon />
          <span>제목1</span>
        </div>
        <div onClick={() => passOption("h2")}>
          <I.H2Icon />
          <span>제목2</span>
        </div>
        <div onClick={() => passOption("h3")}>
          <I.H3Icon />
          <span>제목3</span>
        </div>
        <div onClick={() => passOption("h4")}>
          <I.H4Icon />
          <span>제목4</span>
        </div>
        <div className="unFunctionIcon">
          <I.DivideLineIcon />
        </div>
        <div onClick={() => passOption("b")}>
          <I.BoldIcon />
          <span>굵은 글씨</span>
        </div>
        <div onClick={() => passOption("i")}>
          <I.InclineIcon />
          <span>기울임꼴</span>
        </div>
        <div onClick={() => passOption("draw")}>
          <I.DrawIcon />
          <span>취소선</span>
        </div>
        <div className="unFunctionIcon">
          <I.DivideLineIcon />
        </div>
        <div onClick={() => passOption("details")}>
          <I.Toggle />
          <span>토글</span>
        </div>
        <div onClick={() => passOption("quote")}>
          <I.QuoteIcon />
          <span>인용문</span>
        </div>
        <div onClick={() => passOption("a")}>
          <I.LinkIcon />
          <span>링크</span>
        </div>
        <div>
          <label htmlFor="file">
            <I.ImageIcon />
          </label>
          <input
            accept="file/*"
            multiple
            type="file"
            id="file"
            ref={fileRef}
            onChange={handleUpload}
          />
          <span>이미지</span>
        </div>
        <div onClick={() => passOption("code")}>
          <I.CodeIcon />
          <span style={{ width: "80px" }}>코드블럭</span>
        </div>
      </S.OptionContainer>
    </>
  );
}

export default WriteOption;
