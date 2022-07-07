import { BurgerMenu } from "models/burger-menu"
import { Container } from "../container/styles"
import { LINKS } from "./const"
import { HeaderComponent } from "./styles"

export const Header = () => {
  return <HeaderComponent>
    <Container>
      <BurgerMenu list={LINKS}/>
    </Container>
  </HeaderComponent>
}