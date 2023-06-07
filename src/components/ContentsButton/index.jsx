import React from "react";
import * as C from "../../components";

export default function ContentsButton({ children }) {
  return (
    <C.Button
      width={"60"}
      height={"32"}
      color={"#999999"}
      backgroundColor={"#ffffff"}
      fontWeight={600}
    >
      {children}
    </C.Button>
  );
}
