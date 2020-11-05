import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container } from 'styles/styles';
import { PrimaryBtn } from 'components/Button/Button';
import { reveal } from 'animations/animations';

const CourseWrapper = styled(Container)`
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  min-height: 75vh;
  color: #efebe6;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1200px) {
    min-height: 40vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    min-height: 55vh;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    min-height: 50vh;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    min-height: 85vh;
  }

  &:hover {
    background-size: 110%;

    ${'' /* IE */}
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      background-size: cover;
    }
  }
`;

const TextWrapper = styled.div`
  padding: 0 6rem;
  text-align: center;

  h2 {
    font-family: 'Song Myung';
    font-size: 3rem;
  }

  h2,
  p {
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(60px);
  }
`;

const ImgWrapper = styled(ImageWrapper)`
  position: absolute;
  top: 0;
  left: 0;
`;

const CTAItem = ({ course }) => {
  const { bgImg, title, des, path } = course;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    reveal(
      0.4,
      sectionRef.current,
      titleRef.current,
      textRef.current,
      btnRef.current,
    );
  }, []);

  return (
    <Wrapper bgImg={bgImg} ref={sectionRef}>
      <ImgWrapper>
        <Image filename={bgImg} />
      </ImgWrapper>
      <TextWrapper>
        <h2 ref={titleRef}>{title}</h2>
        <p ref={textRef}>{des}</p>
        <PrimaryBtn
          path={path}
          text="더 알아보기"
          color="#aa9995"
          isLink={true}
          ref={btnRef}
        />
      </TextWrapper>
    </Wrapper>
  );
};

const CTA = () => {
  const courses = [
    {
      title: '핸드드립 전문가',
      des:
        '커피의 향미 및 추출에 대해 깊이 있게 접근하며, 커피의 기본적인 이해를 바탕으로 세밀하게 퀄리티를 높여주는 과정입니다.',
      path: '#course-handDrip',
      bgImg: 'course-1.jpg',
    },
    {
      title: '바리스타 2급',
      des:
        '좋은 원두를 고르는 법부터 맛있는 커피를 내리는 방법까지, 남녀노소 누구나 기본 커피의 이해 및 스킬을 습득할 수 있는 과정입니다.',
      path: '#course-barista',
      bgImg: 'course-2.jpg',
    },
  ];

  return (
    <CourseWrapper>
      {courses.map((course, i) => (
        <CTAItem course={course} key={i} />
      ))}
    </CourseWrapper>
  );
};

export default CTA;
