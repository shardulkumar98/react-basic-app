import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000; //black
  color: #d4ac2b; //yellow
  height: 70px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Outfit";
`;
export const Img = styled.img`
  height: 68px;
  margin-left: 10px;
`;
export const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  margin: 0px 40px;
  list-style: none;
`;

export const A = styled.a`
  font-family: "Outfit";
  font-weight: 500;
  text-decoration: none;
  font-style: normal;
  color: #d4ac2b; //yellow
  letter-spacing: 0.2px;
`;
