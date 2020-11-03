import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 900;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #be7e64;

  @media screen and (max-width: 36rem) {
    right: 5%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    width: 55px;
    height: 55px;
  }

  @media screen and (max-width: 48rem) {
    width: 55px;
    height: 55px;
  }

  @media screen and (max-width: 36rem) {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 20rem) {
    width: 38px;
    height: 38px;
  }
`;

const Hamburger = styled.div`
  &,
  &::before,
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 33px;
    height: 5px;
    background-color: #be7e64;
    border-radius: 3rem;
    transition: all 0.3s ease-in;

    @media screen and (max-width: 36rem) {
      width: 25px;
      height: 4px;
    }
  }

  &::before,
  &::after {
    content: '';
    left: ${(props) => (props.show ? 0 : '50%')};
  }

  & {
    background-color: ${(props) => props.show && `transparent`};
  }

  &::before {
    top: ${(props) => (props.show ? 0 : '-0.7rem')};
    transform: ${(props) => props.show && `rotate(135deg)`};

    @media screen and (max-width: 36rem) {
      top: ${(props) => (props.show ? 0 : '-0.6rem')};
    }

    @media screen and (max-width: 20rem) {
      top: ${(props) => (props.show ? 0 : '-0.55rem')};
    }
  }

  &::after {
    top: ${(props) => (props.show ? 0 : '0.7rem')};
    transform: ${(props) => props.show && `rotate(-135deg)`};

    @media screen and (max-width: 36rem) {
      top: ${(props) => (props.show ? 0 : '0.6rem')};
    }

    @media screen and (max-width: 20rem) {
      top: ${(props) => (props.show ? 0 : '0.55rem')};
    }
  }
`;

const HamburgerMenu = ({ setShow, show }) => {
  return (
    <Container onClick={() => setShow(!show)}>
      <Wrapper>
        <Hamburger show={show} />
      </Wrapper>
    </Container>
  );
};

export default HamburgerMenu;
