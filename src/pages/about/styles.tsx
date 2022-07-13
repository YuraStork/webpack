import styled, { keyframes } from "styled-components";

const nodeAnimation = keyframes`
  0%{
    transform: translateY(-200px);
  }
  100%{
    transform: translateY(0px);
  }
`;
const nodeAnimationRotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const AboutSection = styled.section`
  border: 1px solid ${(p) => p.theme.colors.light_gray};
  background-color: #0e1124;

  .enter {
    animation: ${nodeAnimation} 1s ease forwards;
  }
  .enterDone {
    animation: ${nodeAnimationRotate} 1s ease forwards;
  }
  .exit {
    animation: ${nodeAnimation} 1s ease reverse forwards;
  }

  & > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;

    .anima {
      width: 100px;
      height: 100px;
      border: 2px dashed white;
      border-radius: 50%;
      text-align: center;
      padding-top: 35px;
      color: white;
    }
  }

  .search {
    width: 20px;
    height: 20px;
    background: transparent;
    border: 3px solid red;
    position: relative;
    border-radius: 50%;
    cursor: pointer;

    &:after {
      content: "";
      width: 12px;
      position: absolute;
      height: 3px;
      background-color: red;
      bottom: -2px;
      right: -12px;
      transform: rotate(32deg);
    }
  }
  .pacman {
    border-left: 20px solid red;
    border-top: 20px solid red;
    border-bottom: 20px solid red;
    border-right: 20px solid transparent;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .infinite {
    width: 200px;
    height: 30px;
    position: relative;

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      width: 60px;
      height: 60px;
      border: 20px solid red;
      border-radius: 50px 50px 0px 50px;
      transform: rotate(-45deg);
    }
    &:after {
      right: -15px;
      transform: rotate(135deg);
    }
  }
`;

const maskAnimation = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-200px);
  }
  100%{
    transform: translateY(0px);
  }
`
const Mask = styled.div`

   mask-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png');
   mask-size: 600px 200px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;    
  mask-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png');

  &>img{
    animation: ${maskAnimation} infinite 15s linear; 
  }
  
`

const KubContainer = styled.div`
  position: relative;
  margin: 200px auto;
  width: 300px;
  height: 300px;
  perspective: 500px;

  & > div:first-child {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;

    & > div {
      position: absolute;
      width: inherit;
      height: inherit;
      border: 5px solid #fff;
      font: normal 70px Arial;
      text-align: center;
      line-height: 300px;
      color: #fff;
    }

    & > div:nth-child(1) {
      transform: translateZ(150px);
    }
    & > div:nth-child(6) {
      transform: rotateY(180deg) translateZ(150px);
    }
    & > div:nth-child(2) {
      transform: rotateY(90deg) translateZ(150px);
    }
    & > div:nth-child(3) {
      transform: rotateY(-90deg) translateZ(150px);
    }
    & > div:nth-child(4) {
      transform: rotateX(90deg) translateZ(150px);
    }
    & > div:nth-child(5) {
      transform: rotateX(-90deg) translateZ(150px);
    }
  }
`;

const RectangleContainer = styled.div`
  width: 400px;
  height: 100px;
  position: relative;
  perspective: 400px;
  margin-top: 200px;
  margin-right: 100px;

  & > div {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;
    transform: rotateX(-17deg) rotateY(69deg);

    & > div {
      width: inherit;
      position: absolute;
      height: inherit;
      backface-visibility: hidden;
      background-color: gray;
      border: 2px solid black;
      text-align: center;
      padding-top: 30px;
    }

    & > div:first-child {
      transform: translateZ(50px);
    }
    & > div:nth-child(2) {
      width: 100px;
      height: 100px;
      transform: rotateY(90deg) translateZ(350px);
    }
    & > div:nth-child(3) {
      width: 100px;
      height: 100px;
      transform: rotateY(-90deg) translateZ(50px);
    }
    & > div:nth-child(4) {
      transform: rotateX(90deg) translateZ(50px);
    }
    & > div:nth-child(5) {
      transform: rotateX(-90deg) translateZ(50px);
    }
    & > div:nth-child(6) {
      transform: rotateY(180deg) translateZ(50px);
    }
  }
`;

const TriangleContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 200px;
  margin-left: 200px;
  position: relative;

  & > div {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;
    perspective: 400px;

    & > div {
      width: 0;
      height: 0;
      position: absolute;
      border-left: 150px solid transparent;
      border-right: 150px solid transparent;
      border-bottom: 250px solid red;
      transform-origin: 75px 0;
      perspective-origin: 50% 50%;

      & > div:first-child {
        transform: translateZ(100px);
      }
      & > div:nth-child(2) {
        transform: rotateX(30deg) translateZ(400px);
      }
    }
  }
`;

const CardAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;
const CardStyled = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  text-align: center;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;

  & > .block {
    position: absolute;
    inset: 5px;
    color: white;
    z-index: 1;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #00ccff
    );
    animation: ${CardAnimation} 4s linear infinite -2s;
  }
  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #00ccff
    );
    animation: ${CardAnimation} 4s linear infinite;
  }
`;

const MoveSpanUp = keyframes`
  0%{
    transform: translateX(-55px);
  }
  50%{
    transform: translateX(200px);
  }
  100%{
    transform: translateX(-55px);
  }
`;
const MoveSpanDown = keyframes`
  0%{
    transform: translateX(55px);
  }
  50%{
    transform: translateX(-200px);
  }
  100%{
    transform: translateX(55px);
  }
`;

const MoveSpanRight = keyframes`
  0%{
    transform: translateY(-2px);
  }
  50%{
    transform: translateY(100px);
  }
  100%{
    transform: translateY(-2px);
  }
`;
const MoveSpanLeft = keyframes`
  0%{
    transform: translateY(-100px);
  }
  50%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(-100px);
  }
`;
const ButtonStyled = styled.button`
  display: block;
  width: 200px;
  padding: 10px 10px;
  background-color: transparent;
  cursor: pointer;
  color: #00ccff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  border: none;

  & > span {
    position: absolute;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ccff, transparent);

    &:hover {
      animation-play-state: paused;
    }
  }
  & > span:first-child {
    top: 0;
    left: 0px;
    animation: ${MoveSpanUp} infinite linear 10s;
  }
  & > span:nth-child(2) {
    bottom: 0;
    right: 5px;
    animation: ${MoveSpanDown} infinite linear 10s;
  }
  & > span:nth-child(3) {
    width: 2px;
    height: 50px;
    top: -52px;
    right: 0;
    animation: ${MoveSpanRight} infinite linear 10s;
  }
  & > span:nth-child(4) {
    width: 2px;
    height: 50px;
    bottom: -50px;
    left: 0;
    animation: ${MoveSpanLeft} infinite linear 10s;
  }
  &::before {
    content: "";
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
  }
`;

const Card = styled.div`
  width: 400px;
  height: 350px;
  margin-top: 50px;
  color: white;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
  perspective: 1000px;
  transition: 1s all ease;

  &:hover {
    transform: rotateY(180deg);
  }

  & > div:first-child {
    background: #00ccff;
    z-index: 2;
  }

  & > div {
    position: absolute;
    inset: 5px;
    transform: translateZ(100px);
    transition: 1s all ease;
  }

  & > div:last-child {
    background: #00ff80;
    transform: translateZ(99px) rotateY(180deg);
    z-index: 1;
  }
`;
export {
  AboutSection,
  KubContainer,
  RectangleContainer,
  TriangleContainer,
  CardStyled,
  ButtonStyled,
  Card,
  Mask
};
