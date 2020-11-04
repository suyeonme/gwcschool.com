import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Container, H3Category } from 'styles/styles';
import KaKaoMap from 'components/KaKaoMap/KaKaoMap';
import { reveal } from 'animations/animations';

const MapWrapper = styled(Container)`
  display: flex;
  align-items: center;
  padding: 10rem 6rem;

  @media screen and (max-width: 768px) {
    padding: 10rem 10rem;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 10rem 6rem;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    flex-direction: row;
  }
`;

const MapText = styled.div`
  width: 50%;
  margin-left: 6rem;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0;
    margin-top: 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    margin-left: 3rem;
  }

  ul,
  h3 {
    transform: translateY(50px);
    opacity: 0;
  }

  li {
    list-style-type: circle;
    margin-bottom: 1.5rem;
    margin-left: 1.1rem;

    @media screen and (max-width: 576px) {
      margin-left: 3rem;
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

  useEffect(() => {
    reveal(0.3, sectionRef.current, titleRef.current, listRef.current);
  }, []);

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
