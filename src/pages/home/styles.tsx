import styled from "styled-components";

const HomeSection = styled.section`
  border: 1px solid #d6d6d6;
`;


const Card = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid gray;
  transition: all .5s ease;  
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000;

  &:hover{
    transform: translate3d(42px, 10px, 10px);
  }

  &::after{
    content: '';
    width: 100%;
    height: 100%;
  }
`
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(150px, 200px));
  grid-auto-rows: 200px;
  gap: 10px;
`

export { HomeSection, Card, CardsWrapper };
