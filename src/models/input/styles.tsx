import styled, { css } from "styled-components";

type InputWrapperProps = {
  isError: boolean;
  hasValue: boolean;
};

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  padding-top: 5px;

  & > input {
    height: 40px;
    position: relative;
    padding: 0px 5px;
    border-radius: 5px;
    border: 2px solid ${(p) => p.theme.colors.light_gray};
    outline: none;
    ${(p) =>
    p.isError &&
    css`
        border: 2px solid red;
      `}

    &:focus {
      box-shadow: 0px 0px 1px 1px #0c94f6;
      border: 2px solid #0a87e1;
 
      ${(p) =>
    p.isError &&
    css`
          border-color: red;
          box-shadow: 0px 0px 1px 1px red;
        `}
    }

    &:focus ~ label {
      top: 0px;
      color: #0a87e1;
      ${p => p.hasValue && css`opacity: 1;`}
      background-color: white;
      border-left: 2px solid #0a87e1;
      border-right: 2px solid #0a87e1;
      ${(p) =>
    p.isError &&
    css`
          border-color: red;
          color: red;
        `}
    }
  }
  & > label {
    transition: 0.3s;
    position: absolute;
    top: 19px;
    left: 5px;
    font-size: 12px;

    ${p => p.hasValue && css`opacity: 0;`}
    font-weight: 400;
    pointer-events: none;
    ${(p) =>
    p.isError &&
    css`
        color: red;
      `}
  }
`;

export { InputWrapper };
