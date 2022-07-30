import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  top: 0px;
  left: 0px;
  right: 0px;
  height: 80px;
  position: fixed;
  display: flex;

  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-dark-white);
  font-size: 18px;
  z-index: 3;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 10px;
  padding: 10px;
  color: var(--color-light-gray);

  &:hover {
    color: var(--color-black);
    cursor: pointer;
  }

  &:active {
    color: var(--color-black);
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 30%;
  right: 20px;
  font-size: var(--size-large);
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
      <Logo>Issue List</Logo>
    </NavbarContainer>
  );
}
