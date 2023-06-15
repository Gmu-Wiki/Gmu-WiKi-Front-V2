import React from 'react';
import * as S from "./style";
import * as I from "../../assets/index";

function WriteOption() {
    return (
        <>
          <S.OptionContainer>
            <I.H1Icon />
            <I.H2Icon />
            <I.H3Icon />
            <I.H4Icon />
            <I.DivideLineIcon />
            <I.BoldIcon />
            <I.InclineIcon />
            <I.DrawIcon />
            <I.DivideLineIcon />
            <I.QuoteIcon />
            <I.LinkIcon />
            <I.CodeIcon />
          </S.OptionContainer>
        </>
    );
}

export default WriteOption;