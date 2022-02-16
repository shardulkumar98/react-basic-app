import React from "react";
import { Nav, Logo, Img, NavItems, Ul, Li, A } from "styles/components/navbar";
import logo from "assets/images/logo.png";
const Navbar = () => (
  <Nav>
    <Logo>
      <Img src={logo} />
    </Logo>
    <NavItems>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="/">About</A>
        </Li>
        <Li>
          <A href="/">Contact</A>
        </Li>
      </Ul>
    </NavItems>
  </Nav>
);

export default Navbar;
