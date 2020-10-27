import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { Container } from 'styles/styles';
import KaKaoMap from 'components/KaKaoMap/KaKaoMap';
import { reveal } from 'animations/animations';

const MapWrapper = styled(Container)`
  display: flex;
  background-color: #f6f3ec;
  padding: 6rem 6rem 3rem;
`;

const MapText = styled.div`
  width: 50%;
  margin-left: 6rem;

  ul,
  h3 {
    transform: translateY(50px);
    opacity: 0;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.1rem;
    list-style-type: circle;
    margin-bottom: 0.8rem;
    margin-left: 1.1rem;
  }
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
        <h3 ref={titleRef}>주변 관광지</h3>
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
