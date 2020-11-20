import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 10rem 25rem;
  background-color: #f7f3ec;

  @media (max-width: 992px) {
    padding: 10rem 15rem;
  }

  @media (max-width: 576px) {
    padding: 10rem 3rem;
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

const HomeVideo = ({ src, title, subTitle }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    reveal(0.4, sectionRef.current, titleRef.current, videoRef.current);
  }, []);

  return (
    <Wrapper ref={sectionRef}>
      <H3Category align="center" ref={titleRef}>
        <span>{title}</span> {subTitle}
      </H3Category>
      <VideoContainer ref={videoRef}>
        <iframe
          src={src}
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
