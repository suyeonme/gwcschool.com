import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  border: 3px solid #be7e64;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`;

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hamburger = styled.div`
  &,
  &::before,
  &::after {
    position: absolute;
    display: inline-block;
    width: 33px;
    height: 5px;
    background-color: #be7e64;
    border-radius: 3rem;
    transition: all 0.3s ease-in;
  }

  &::before,
  &::after {
    content: '';
  }

  & {
    background-color: ${(props) => props.show && `transparent`};
  }

  &::before {
    left: 0;
    top: ${(props) => (props.show ? 0 : '-0.7rem')};
    transform: ${(props) => props.show && `rotate(135deg)`};
  }

  &::after {
    left: 0;
    top: ${(props) => (props.show ? 0 : '0.7rem')};
    transform: ${(props) => props.show && `rotate(-135deg)`};
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
