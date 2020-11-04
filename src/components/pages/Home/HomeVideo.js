import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 10rem 25rem;
  background-color: #f7f3ec;

  @media (max-width: 991.98px) {
    padding: 10rem 15rem;
  }

  @media (max-width: 575.98px) {
    padding: 10rem 5rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 7px;
  opacity: 0;
  transform: translateY(60px);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const HomeVideo = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, '#video');
    }
  }, [intersection]);

  return (
    <Wrapper ref={sectionRef}>
      <H3Category align="center" id="video">
        <span>곡성목공예&커피체험관</span> 둘러보기
      </H3Category>
      <VideoContainer id="video">
        <iframe
          src="https://www.youtube.com/embed/4r4Aw8HvFPQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          title="곡성 목공예&커피체험관 유튜브"
        />
      </VideoContainer>
    </Wrapper>
  );
};

export default HomeVideo;
