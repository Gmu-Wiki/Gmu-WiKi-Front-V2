import React from "react";
import * as C from "../../components";
import { useNotice } from "../../Hooks";
import { useParams } from "react-router-dom";

const EditNotice = () => {
  const { id } = useParams();
  const { state } = useNotice({ props: { id } });

  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title={state.title} sort="편집">
        <C.EditNotice title={state.title} content={state.content} id={id} />
      </C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
};

export default EditNotice;
