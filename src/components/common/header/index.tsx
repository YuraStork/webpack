import { BurgerMenu } from "models/burger-menu"
import { Container } from "../container/styles"
import { HeaderComponent } from "./styles"

export const Header = () => {
  return <HeaderComponent>
    <Container>
      Header
      <BurgerMenu />
    </Container>
  </HeaderComponent>
}