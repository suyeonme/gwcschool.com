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

  @media screen and (max-width: 36rem) {
    padding: 3rem 1rem;
  }

  @media screen and (max-width: 20rem) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  width: 130px;
  height: auto;
  position: relative;
  z-index: 900;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    width: 110px;
  }

  @media screen and (max-width: 36rem) {
    width: 80px;
  }

  @media screen and (max-width: 20rem) {
    width: 70px;
  }
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
