import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #${(props) => props.backgroundColor};
  border: none;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;
