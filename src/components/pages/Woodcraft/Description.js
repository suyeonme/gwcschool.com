import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import bgImg from 'assets/images/wood-fixed-1.jpg';
import { FixedImg } from 'styles/styles';
import { reveal } from 'animations/animations';

// const BgImg = styled(FixedImg)`
//   height: 65vh;
//   background-size: contain;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 6rem 0;

//   p {
//     font-family: 'Song Myung';
//     font-size: 2.2rem;
//     color: white;

//     opacity: 0;
//     transform: translateY(60px);
//   }
// `;

const BgImg = styled.section`
  height: 65vh;
  background: url(${(props) => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;

  @media screen and (max-width: 64rem) {
    height: 40vh;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    height: 65vh;
  }

  p {
    font-family: 'Song Myung';
    font-size: 2.2rem;
    color: white;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.8rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.3rem;
      text-align: center;
      padding: 0 1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 1.1rem;
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
