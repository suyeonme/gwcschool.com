import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import bgImg from 'assets/images/wood-fixed-1.jpg';
import { reveal } from 'animations/animations';

const BgImg = styled.section`
  height: 65vh;
  background: url(${(props) => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;

  @media screen and (max-width: 1200px) {
    height: 30vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    height: 50vh;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    height: 65vh;
  }

  p {
    font-size: 3rem;
    font-family: 'Song Myung';
    color: white;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (max-width: 576px) {
      font-size: 2.5rem;
      text-align: center;
      padding: 0 2rem;
    }
  }
`;

const Description = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, [titleRef.current]);
    }
  }, [intersection]);

  return (
    <BgImg bgImg={bgImg} ref={sectionRef}>
      <p ref={titleRef}>자연적 지식은, 그 무엇과도 바꿀 수 없는 가치입니다.</p>
    </BgImg>
  );
};

export default Description;
