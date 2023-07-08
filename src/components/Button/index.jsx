import React from "react";
import * as S from "./style";

function Button({
  width,
  height,
  backgroundColor,
  children,
  borderRadius,
  color,
  fontWeight,
  float,
  margin,
  onClick
}) {
  return (
    <S.Button
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      fontWeight={fontWeight}
      float={float}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}

export default Button;
