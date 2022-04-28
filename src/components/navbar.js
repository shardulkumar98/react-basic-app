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
          <A href="/dashboard">Home</A>
        </Li>
        <Li>
          <A href="/about">About</A>
        </Li>
        <Li>
          <A href="/contact">Contact</A>
        </Li>
      </Ul>
    </NavItems>
    <div>
      <p>Log out</p>
    </div>
  </Nav>
);

export default Navbar;
