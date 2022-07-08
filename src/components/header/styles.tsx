import styled from "styled-components";

const HeaderComponent = styled.header`
  background-color: black;
  color: white;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const BurgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    display: block;
  }
`;

const HeaderNavigation = styled.nav`
  @media screen and (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    display: none;
  }

  & > ul > li {
    list-style-type: none;
    display: inline-block;
    width: 100px;
    padding: 10px;
    padding-left: 0;
    position: relative;

    & > a {
      color: gold;
    }
  }
`;

export { HeaderComponent, BurgerWrapper, HeaderNavigation };
