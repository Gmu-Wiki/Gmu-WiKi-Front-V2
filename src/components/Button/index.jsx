import React from 'react';
import * as S from './style';

function Button({ width, height, backgroundColor, children }) {
  return (
    <S.Button width={width} height={height} backgroundColor={backgroundColor}>
      {children}
    </S.Button>
  );
}

export default Button;
