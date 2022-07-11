import { BurgerMenu } from "components/burger-menu";
import { AuthContext } from "context/auth.context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../container/styles";
import { LINKS } from "./const";
import { HeaderComponent, BurgerWrapper, HeaderNavigation } from "./styles";

export const Header = () => {
  const { logout } = useContext(AuthContext)
  return (
    <HeaderComponent>
      <Container>
        <BurgerWrapper>
          <BurgerMenu list={LINKS} />
        </BurgerWrapper>

        <HeaderNavigation>
          <ul>
            {LINKS.map((link) => (
              <li key={link.url}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </HeaderNavigation>

        <div>
          <button onClick={logout}>logout</button>
        </div>
      </Container>
    </HeaderComponent>
  );
};
