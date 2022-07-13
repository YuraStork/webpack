import { BurgerMenu } from "components/burger-menu";
import { DropDown } from "components/drop_down";
import { AuthContext } from "context/auth.context";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "../container/styles";
import { LINKS } from "./const";
import { HeaderComponent, BurgerWrapper, HeaderNavigation, HeaderUserBlock } from "./styles";

export const Header = () => {
  const { logout, userData } = useContext(AuthContext)
  const {pathname} = useLocation();
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

        <HeaderUserBlock>
          {pathname !== "/cabinet" && <Link to="/cabinet">My Cabinet</Link>}
          <button onClick={logout}>logout</button>
        </HeaderUserBlock>
      </Container>
    </HeaderComponent>
  );
};
