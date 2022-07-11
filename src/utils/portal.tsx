import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ChildrenWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: #8282825d;
  height: 100%;
  z-index: 9999;
  top: 0;
`;

type Props = {
  children?: ReactNode
}
export const Portal = ({ children = null }: Props) => {
  return createPortal(
    <ChildrenWrapper>{children}</ChildrenWrapper>,
    document.getElementById("modal") as HTMLDivElement
  );
};
