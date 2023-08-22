import React from "react";
import * as C from "../../components";

const Project = () => {
  return (
    <>
      <C.PageContainer
        title="프로젝트"
        sort="프로젝트"
        hasPostButton={true}
        url="/project"
        hasTitle
      >
        <C.Project />
      </C.PageContainer>
    </>
  );
};

export default Project;
