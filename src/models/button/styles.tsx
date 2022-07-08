import styled, { css, keyframes } from "styled-components";

type ButtonProps = {
  margin?: string;
  background?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 10px;
  width: 100%;
  ${p => p.margin && css`margin: ${p.margin}`};
  background-color: ${p => p.background || '#1877f2'};
  color: ${p => p.color || 'black'};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:disabled{
    background-color: #808080;
    cursor:no-drop;
  }
`