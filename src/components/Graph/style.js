import styled from "styled-components";

export const GraphCenter = styled.div`
  width: 65%;
  display: flex;
`;

export const TitleGraph = styled.div`
  width: 24%;
  border: 1px solid #c0c0c0;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-weight: 700;
`;

export const ContentGraph = styled.div`
  width: 76%;
  border: 1px solid #dddddd;
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
