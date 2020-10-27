import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from 'assets/images/logo.png';
import HamburgerMenu from 'components/Layout/Nav/HamburgerMenu';
import Nav from 'components/Layout/Nav/Nav';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  padding: 4.5rem 3rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 75em) {
    padding: 5rem;
  }

  @media screen and (max-width: 30em) {
    padding: 3rem;
  }

  @media screen and (max-width: 20em) {
    padding: 5rem;
  }
`;

const LogoContainer = styled.div`
  width: 130px;
  height: auto;
  position: relative;
  z-index: 900;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <NavbarContainer>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <HamburgerMenu setShow={setShow} show={show} />
      <Nav show={show} setShow={setShow} />
    </NavbarContainer>
  );
};

export default Navbar;
