import React, { forwardRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  font-size: 1.5rem;
  letter-spacing: 1px;
  padding: 2rem 4.3rem;
  align-self: flex-start;
  opacity: 0;
  transform: translateY(60px);

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
  font-size: 1.5rem;
  letter-spacing: 1px;
  padding: 2rem 4.3rem;
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
