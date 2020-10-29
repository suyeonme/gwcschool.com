import React, { forwardRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 1.3rem 3.1rem;
  align-self: flex-start;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 64rem) {
    padding: 1rem 2.8rem;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    padding: 0.8rem 2.6rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 0.8rem 2.6rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 20rem) {
    padding: 0.6rem 2.4rem;
    font-size: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.color};
    color: white;
    transition: all 0.3s ease-in;
  }
`;

const LinkTag = styled.a`
  display: inline-block;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 1.3rem 3.1rem;
  align-self: flex-start;

  opacity: 0;
  transform: translateY(60px);

  &:hover {
    background-color: ${(props) => props.color};
    color: white;
    transition: all 0.3s ease-in;
  }
`;

export const PrimaryBtn = forwardRef((props, ref) => {
  const { path, color, isLink, text } = props;

  if (isLink) {
    return (
      <LinkTag href={path} color={color} ref={ref}>
        {text}
      </LinkTag>
    );
  } else {
    return (
      <StyledLink to={path} color={color} ref={ref}>
        {text}
      </StyledLink>
    );
  }
});
