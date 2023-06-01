import React from "react";
import * as C from "../../index";

function PreviewWriteBox({ content }) {

  return (
    <>
      <C.MarkDownConverter value={content} />
    </>
  );
}

export default PreviewWriteBox;