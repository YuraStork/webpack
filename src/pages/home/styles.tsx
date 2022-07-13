import styled from "styled-components";

const HomeSection = styled.section`
  border: 1px solid #d6d6d6;
`;

const Card = styled.div`
  width: 200px;
  padding: 10px;
  position: relative;
  border: 1px solid gray;
  transition: all 0.5s ease, transform 1s ease-in;
  cursor: pointer;
`;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  grid-auto-rows: 200px;
  gap: 10px;
`;

export { HomeSection, Card, CardsWrapper };
