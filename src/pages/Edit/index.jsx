import React from "react";
import * as C from "../../components";
import { useContent } from "../../Hooks";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const state = useContent({ id });

  return (
    <C.PageContainer title={state.title} sort="편집">
      <C.EditWrite title={state.title} content={state.content} id={id} />
    </C.PageContainer>
  );
};

export default Edit;
