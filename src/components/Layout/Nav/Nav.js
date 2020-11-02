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
  top: -30rem;
  right: -15rem;
  width: 0px;
  height: 0px;
  z-index: 900;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 800;
  opacity: 0;
  overflow: auto;

  @media screen and (max-width: 36rem) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
  }
`;

const ItemsWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 800;
  background-color: #eeebe5;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    padding: 3rem;
  }
`;

const Items = styled.ul`
  width: 100%;

  li {
    &:not(:last-child) {
      margin-bottom: 2rem;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        margin-bottom: 1.5rem;
      }

      @media screen and (max-width: 36rem) {
        margin-bottom: 1rem;
      }
    }
  }

  a {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.5rem;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 1.3rem;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 300;
    margin-left: 2rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 48rem) {
      display: block;
      margin-left: 0;
      margin-top: 0.5rem;
      font-size: 1.1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      display: inline;
      margin-left: 2rem;
      margin-top: 0;
      font-size: 0.9rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 0.7rem;
      margin-left: 1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
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
  @media screen and (max-width: 64rem) {
    width: 50%;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    width: 50%;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
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
