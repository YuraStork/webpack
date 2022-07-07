import { BurgerMenu } from "models/burger-menu"
import { NavLink } from "react-router-dom"
import { Container } from "../container/styles"
import { LINKS } from "./const"
import { HeaderComponent, BurgerWrapper, HeaderNavigation } from "./styles"

export const Header = () => {
  return <HeaderComponent>
    <Container>
      <BurgerWrapper>
        <BurgerMenu list={LINKS} />
      </BurgerWrapper>

      <HeaderNavigation>
        <ul>
          {LINKS.map(link => <li key={link.url}><NavLink to={link.url}>{link.label}</NavLink></li>)}
        </ul>
      </HeaderNavigation>
    </Container>
  </HeaderComponent>
}