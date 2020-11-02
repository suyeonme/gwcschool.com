import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { Container, H3Category } from 'styles/styles';
import KaKaoMap from 'components/KaKaoMap/KaKaoMap';
import { reveal } from 'animations/animations';

const MapWrapper = styled(Container)`
  display: flex;
  align-items: center;
  padding: 6rem 6rem;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    padding: 6rem;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    padding: 6rem 3rem;
  }

  @media screen and (max-width: 36rem) {
    flex-direction: column;
    padding: 4rem 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
  }

  @media screen and (max-width: 20rem) {
    padding: 4rem 2rem;
  }
`;

const MapText = styled.div`
  width: 50%;
  margin-left: 6rem;

  @media screen and (max-width: 48rem) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    margin-left: 0;
    margin-top: 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    margin-left: 3rem;
  }

  ul,
  h3 {
    transform: translateY(50px);
    opacity: 0;
  }

  li {
    list-style-type: circle;
    margin-bottom: 0.8rem;
    margin-left: 1.1rem;
    font-size: 1rem;

    @media screen and (max-width: 48rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
    }
  }
`;

const H3Title = styled(H3Category)`
  transform: translateY(0);
  opacity: 1;
  margin-bottom: 2rem;
  padding: 0;
  font-weight: 400;
`;

const Map = ({ arr }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.3, [titleRef.current, listRef.current]);
    }
  }, [intersection]);

  return (
    <MapWrapper ref={sectionRef}>
      <KaKaoMap lat="35.177400" lng="127.306005" />
      <MapText>
        <H3Title ref={titleRef}>주변 관광지</H3Title>
        <ul ref={listRef}>
          {arr.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </MapText>
    </MapWrapper>
  );
};

export default Map;
