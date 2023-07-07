import React from "react";
import * as S from "./style";
import * as I from "../../assets/index";

function WriteOption({ content, setContent, textareaRef, setNumArr }) {
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
        numArr.length + 4, 
        numArr.length + 5, 
        numArr.length + 6,
      ]);
      addOption(
        ">>\n" +
          ">==제목==<\n" +
          "\n___\n" +
          "\n#### 텍스트 (한 줄의 공백을 각 줄마다 적용해주세요!)\n" +
          "<<"
      );
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
      addOption("```\n" + "텍스트\n" + "```");
    }
  };

  return (
    <>
      <S.OptionContainer>
        <div onClick={() => passOption("h1")}>
          <I.H1Icon />
        </div>
        <div onClick={() => passOption("h2")}>
          <I.H2Icon />
        </div>
        <div onClick={() => passOption("h3")}>
          <I.H3Icon />
        </div>
        <div onClick={() => passOption("h4")}>
          <I.H4Icon />
        </div>
        <div className="unFunctionIcon">
          <I.DivideLineIcon />
        </div>
        <div onClick={() => passOption("b")}>
          <I.BoldIcon />
        </div>
        <div onClick={() => passOption("i")}>
          <I.InclineIcon />
        </div>
        <div onClick={() => passOption("draw")}>
          <I.DrawIcon />
        </div>
        <div className="unFunctionIcon">
          <I.DivideLineIcon />
        </div>
        <div onClick={() => passOption("details")}>
          <I.Toggle />
        </div>
        <div onClick={() => passOption("quote")}>
          <I.QuoteIcon />
        </div>
        <div onClick={() => passOption("a")}>
          <I.LinkIcon />
        </div>
        <div onClick={() => passOption("img")}>
          <I.ImageIcon />
        </div>
        <div onClick={() => passOption("code")}>
          <I.CodeIcon />
        </div>
      </S.OptionContainer>
    </>
  );
}

export default WriteOption;
