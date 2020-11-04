import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { BgWrapper } from 'styles/styles';
import BgImage from 'components/BgImage/BgImage';
import { showNav, hideNav } from 'animations/animations';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 300;
  overflow: hidden;
  background-color: #eeebe5;
`;

const Overlay = styled.div`
  background-color: #be7e64;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: -35rem;
  right: -30rem;
  width: 0px;
  height: 0px;
  z-index: 900;

  @media (max-width: 767.98px) {
    top: -45rem;
    right: -40rem;
  }

  @media (max-width: 320px) {
    top: -55rem;
    right: -50rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 800;
  opacity: 0;
  overflow: auto;

  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

const ItemsWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 5rem;
  z-index: 800;
  background-color: #eeebe5;

  ul {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 812px) and (orientation: landscape) {
      justify-content: initial;
    }
  }

  @media (max-width: 575.98px) {
    width: 100%;
    height: 65%;
  }
`;

const Items = styled.ul`
  width: 100%;

  li {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  a {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  span {
    font-size: 1.6rem;
    font-weight: 300;
    margin-left: 3rem;

    @media (max-width: 991.98px) {
      display: block;
      margin-left: 0;
      margin-top: 0.5rem;
    }
  }
`;

const activeClassName = 'active';
const StyledLink = styled(Link).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #be7e64;
  }

  &:hover {
    color: #be7e64;
    transition: color 0.3s ease-in;
  }
`;

const BgContainer = styled(BgWrapper)`
  width: 40%;

  @media (max-width: 575.98px) {
    width: 100%;
    height: 35%;
  }
`;

const Nav = ({ show, setShow }) => {
  const containerRef = useRef(null);
  const linkRef = useRef(null);
  const circleRef = useRef(null);
  const wrapperRef = useRef(null);

  const items = [
    { en: 'Home', ko: '홈', path: '/' },
    { en: 'About', ko: '소개', path: '/about' },
    { en: 'Barista', ko: '바리스타', path: '/barista' },
    { en: 'Woodcraft', ko: '목공예', path: '/woodcraft' },
    { en: 'Facilities', ko: '편의시설', path: '/facilities' },
    { en: 'Contact Us', ko: '기타정보', path: '/contact-us' },
  ];

  const handleEnter = () => {
    showNav(containerRef, circleRef, wrapperRef, linkRef.current.childNodes);
  };

  const handleExit = () => {
    hideNav(containerRef, circleRef, wrapperRef);
  };

  return (
    <Transition
      in={show}
      timeout={{
        enter: 1700,
        exit: 1200,
      }}
      unmountOnExit
      onEnter={handleEnter}
      onExit={handleExit}
    >
      <Container ref={containerRef}>
        <Overlay ref={circleRef} />
        <Wrapper ref={wrapperRef}>
          <BgContainer>
            <BgImage height="100%" filename="nav.jpg" />
          </BgContainer>
          <ItemsWrapper>
            <Items ref={linkRef}>
              {items.map((item, index) => (
                <li key={index}>
                  <StyledLink to={item.path} onClick={() => setShow(false)}>
                    {item.en}
                    <span>{item.ko}</span>
                  </StyledLink>
                </li>
              ))}
            </Items>
          </ItemsWrapper>
        </Wrapper>
      </Container>
    </Transition>
  );
};

export default Nav;
