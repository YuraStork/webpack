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
  background-color: ${p => p.background || '#006eff'};
  color: ${p => p.color || 'black'};
  border-radius: 5px;
  transition: all .3s ease-in;
  border: none;
  cursor: pointer;

  &:disabled{
    background-color: #808080;
    cursor:no-drop;
  }

  &:hover:not([disabled]){
 
    transform: translate(-2px, -2px);
    box-shadow: 2px 3px 0px 0px #1161c9;
  }
`