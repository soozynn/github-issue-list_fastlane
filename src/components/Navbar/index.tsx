import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-dark-white);
  z-index: 3;
`;

const Nav = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  margin: 10px;
  padding: 10px;
  color: var(--color-light-gray);

  &:hover {
    color: var(--color-black);
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
    </NavbarContainer>
  );
}
