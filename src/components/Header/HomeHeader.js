import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Container = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 130vh;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    min-height: 100vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    min-height: 130vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 50%;
  left: 15rem;
  transform: translateY(-50%);

  @media (max-width: 1200px) {
    top: 60%;
  }

  @media (max-width: 576px) {
    left: 6rem;
  }
`;

const Title = styled.h1`
  font-family: 'Song Myung';
  color: #f7f3ec;
  writing-mode: vertical-rl;
  margin: 0;
  opacity: 0;
  transform: translateY(10px);
`;

const MainTitle = styled(Title)`
  font-size: 9.5rem;
  letter-spacing: 10px;
`;

const SubTitle = styled(Title)`
  font-size: 4.2rem;
  letter-spacing: 2px;
  margin: 2rem 0;
`;

const HomeHeader = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    gsap.to([subTitleRef.current, titleRef.current], {
      opacity: 1,
      stagger: 0.6,
      delay: 0.7,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <Container fluid={image.sharp.fluid}>
      <Wrapper>
        <SubTitle ref={subTitleRef}>삶.숨.쉼.이 있는 </SubTitle>
        <MainTitle ref={titleRef}>느림의 미학 </MainTitle>
      </Wrapper>
    </Container>
  );
};

export default HomeHeader;
