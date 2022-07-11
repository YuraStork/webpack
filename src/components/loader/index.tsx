import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
`
const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 3px 1px #a0a0a0;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  animation: ${loaderAnimation} 1.5s infinite; 

  & > div {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #808080;
    border-radius: 50%;
  }

  & > div:first-of-type {
    top: 0px;
    left: 44px;
  }
  & > div:nth-child(2) {
    top: 1px;
    left: 55px;
  }
  & > div:nth-child(3) {
    top: 5px;
    left: 65px;
  }
  & > div:nth-child(4) {
    top: 12px;
    left: 74px;
  }
  & > div:nth-child(5) {
    top: 20px;
    left: 81px;
  }
  & > div:nth-child(6) {
    top: 1px;
    left: 33px;
  }
  & > div:nth-child(7) {
    top: 5px;
    left: 22px;
  }
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

    </LoaderWrapper>
  );
};
