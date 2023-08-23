import React from "react";
import * as C from "../../components";
import * as S from "./style";
import GetRole from "../../lib/GetRole";
import useBoard from "../../Hooks/useBoard";

export default function Project() {
  const { boardList } = useBoard({ boardType: "PROJECT" });

  if (!boardList) return null;

  const projects = [
    { title: "팀", type: "TEAM" },
    { title: "개인", type: "INDIVIDUAL" }
  ];

  const handleBoardItemClick = boardId => {
    const boardUrl = `/board/${boardId}`;
    window.location.href = boardUrl;
  };

  const renderBoardItems = projectType => {
    const filteredItems = boardList
      .filter(item => item.boardDetailType === projectType)
      .sort((a, b) => a.title.localeCompare(b.title, "en"));

    return filteredItems.map(item => (
      <React.Fragment key={item.id}>
        <S.ProjectBox>
          <S.ProjectTitle onClick={() => handleBoardItemClick(item.id)}>
            {item.title}
          </S.ProjectTitle>
        </S.ProjectBox>
      </React.Fragment>
    ));
  };

  return (
    <C.PageContainer
      title="프로젝트"
      sort="프로젝트"
      hasPostButton={true}
      url="/post"
      hasTitle
    >
      {projects.map(project => (
        <C.Detail hasNumber={false} title={project.title} key={project.type}>
          {renderBoardItems(project.type)}
        </C.Detail>
      ))}
    </C.PageContainer>
  );
}
