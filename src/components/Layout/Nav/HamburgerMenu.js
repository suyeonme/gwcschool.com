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

  @media (max-width: 575.98px) {
    right: 5%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hamburger = styled.div`
  &,
  &::before,
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3rem;
    height: 0.5rem;
    background-color: #be7e64;
    border-radius: 3rem;
    transition: all 0.3s ease-in;
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
    top: ${(props) => (props.show ? 0 : '-1.1rem')};
    transform: ${(props) => props.show && `rotate(135deg)`};
  }

  &::after {
    top: ${(props) => (props.show ? 0 : '1.1rem')};
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
