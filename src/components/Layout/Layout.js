import React from 'react';
import { useLocation } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'assets/fonts/fonts.css';

import SEO from 'components/Layout/SEO/SEO';
import Navbar from 'components/Layout/Nav/Navbar';
import Footer from 'components/Layout/Footer/Footer';
import HomeHeader from 'components/Header/HomeHeader/';
import SubHeader from 'components/Header/SubHeader';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
  }

  body {
    font-size: 62.5%; 
    font-family: 'Montserrat', 'Spoqa Han Sans';
    font-weight: 300;
    color: black;
    background-color:#EEEBE5;
    overflow-x: hidden;

    @media screen and (max-width: 64rem) {
      font-size: 56.25%;
    }

    @media screen and (max-width: 48rem) {
      font-size: 50%;
    }

    @media screen and (max-width: 36rem) {
      font-size: 31.25%; 
    }

    @media screen and (max-width: 20rem) {
      font-size: 25%; 
    }
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  ul, li {
    list-style: none;
  }

  li {
    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.9rem;
      line-height: 1.3;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
    }
  }

  img, video {
    width: 100%;
    height: 100%;
  }

  button {
    color: inherit; 
    font-family: inherit; 
    font-size: inherit;
    outline: none; 
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  p, a {
    font-size: 1.1rem;

    @media screen and (max-width: 48rem) {
      font-size: 1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
    }
  }

  p {
    line-height: 2;
  }

  span {
    font-weight: 400;
  }

  ::selection {
    background-color: #BE7E64;
    color: #fff;
  }

  ::-webkit-scrollbar {
  width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #efebe6; 
  }
  
  ::-webkit-scrollbar-thumb {
    background:  #BE7E64;
    border-radius: 20px;
  }
`;

const Layout = ({ children }) => {
  let currentPath = useLocation();

  const Header = () => {
    currentPath = currentPath.pathname;

    if (currentPath === '/') {
      return <HomeHeader />;
    } else {
      return <SubHeader path={currentPath} />;
    }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <SEO />
      <GlobalStyle />
      <header>
        <Navbar />
        {Header()}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
