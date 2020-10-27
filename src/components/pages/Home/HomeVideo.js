import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const VideoContainer = styled(Container)`
  background-color: #f7f3ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 6rem 0;
`;

const Wrapper = styled.div`
  width: 60%;
  border-radius: 7px;
  overflow: hidden;
`;

const Youtube = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
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
    <VideoContainer ref={sectionRef}>
      <H3Category align="center" id="video">
        <span>곡성목공예&커피체험관</span> 둘러보기
      </H3Category>
      <Wrapper>
        <Youtube>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4r4Aw8HvFPQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="곡성 목공예&커피체험관 유튜브"
          />
        </Youtube>
      </Wrapper>
    </VideoContainer>
  );
};

export default HomeVideo;
