import styled from "styled-components";

export const Button = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  border: none;
  font-size: 16px;
  color: ${props => props.color};
  border-radius: ${props => props.borderRadius}px;
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
`;
