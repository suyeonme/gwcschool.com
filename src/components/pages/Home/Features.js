import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Image from 'components/Image/Image';
import { PrimaryBtn } from 'components/Button/Button';
import { Container, H3Category } from 'styles/styles';
import { revealWithImg } from 'animations/animations';

const Wrapper = styled.div`
  position: relative;
  padding: 10rem 0;

  &:last-child {
    margin-top: 4rem;
    margin-bottom: 2.5rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 65%;
  font-size: 2rem;
  margin-left: ${(props) => props.align === 'right' && 'auto'};
  transform: ${(props) =>
    props.align === 'left' ? `translateX(-60px)` : `translateX(60px)`};

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    width: 100%;
  }

  img {
    position: relative;
    z-index: 200;
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 90%;
  background: linear-gradient(to right bottom, #fdfcfb, #e2d1c3);
  z-index: 100;
  position: absolute;
  bottom: -2.5rem;
  right: ${(props) => props.align === 'right' && '2.5rem'};
  left: ${(props) => props.align === 'left' && '2.5rem'};
`;

const TextContainer = styled.div`
  width: 45rem;
  height: auto;
  min-height: 28rem;
  z-index: 300;
  color: #394744;
  background-color: #fff;
  padding: 5rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  right: ${(props) => props.align === 'left' && '13rem'};
  left: ${(props) => props.align === 'right' && '13rem'};

  @media (max-width: 1200px) {
    right: ${(props) => props.align === 'left' && '5rem'};
    left: ${(props) => props.align === 'right' && '5rem'};
  }

  @media (max-width: 768px) {
    right: ${(props) => props.align === 'left' && '0'};
    left: ${(props) => props.align === 'right' && '0'};
  }

  @media (max-width: 576px) {
    width: 100%;
    position: static;
    transform: translateY(2.5rem);
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    width: 45rem;
    right: ${(props) => props.align === 'left' && '0'};
    left: ${(props) => props.align === 'right' && '0'};
    position: absolute;
    transform: translateY(-50%);
  }

  h2,
  p {
    transform: translateY(50px);
    opacity: 0;
  }

  h2 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 3rem;

    span {
      font-size: 1.8rem;
      font-weight: 300;
      margin-left: 2rem;
    }
  }

  p {
    margin-bottom: 3rem;
  }
`;

const Feature = ({ feature }) => {
  const { align, titleKo, category, img, titleEn, path } = feature;
  const sectionRef = useRef(null);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    revealWithImg(
      0.4,
      sectionRef.current,
      imgRef.current,
      categoryRef.current,
      titleRef.current,
      textRef.current,
      btnRef.current,
    );
  }, []);

  return (
    <Wrapper ref={sectionRef}>
      <ImgContainer align={align} ref={imgRef}>
        <H3Category align={align} ref={categoryRef}>
          <span>{titleKo} </span> 체험 및 자격증
        </H3Category>
        <Gradient align={align} />
        <Image filename={img} alt={category} />
      </ImgContainer>
      <TextContainer align={align}>
        <h2 ref={titleRef}>
          {titleEn}
          <span>{titleKo}</span>
        </h2>
        {titleEn === 'Barista' ? (
          <p ref={textRef}>
            오늘날 커피의 대중화에도 불구하고
            <span> 제대로 맛있는 커피</span>를 맛보기가 힘든 것은 사실입니다.
            나만의 커피를 직접 만들고 심도 있게 커피를 즐겨보세요.
          </p>
        ) : (
          <p ref={textRef}>
            디지털의 홍수 속에서 살아가는 우리의 감성이 점점 메말라갑니다.
            편리한 플라스틱이 집안을 점령하고 있는 요즘, 목공예를 통해
            <span> 아날로그적 예술가</span>되어보세요.
          </p>
        )}
        <PrimaryBtn
          path={path}
          color="#be7e64"
          text="더 알아보기"
          ref={btnRef}
        />
      </TextContainer>
    </Wrapper>
  );
};

const Features = () => {
  const features = [
    {
      category: `목공예 체험 및 자격증`,
      titleEn: 'Woodcraft',
      titleKo: '목공예',
      img: 'woodcraft.jpg',
      des: `디지털의 홍수 속에서 살아가는 우리의 감성이 점점 메말라갑니다. 편리한 플라스틱이 집안을 점령하고 있는 요즘, 목공예를 통해 아날로그적 예술가가 되어보세요.`,
      path: '/woodcraft',
      align: 'left',
    },
    {
      category: `바리스타 체험 및 자격증`,
      titleEn: 'Barista',
      titleKo: '바리스타',
      img: 'barista.jpg',
      des:
        '오늘날 커피의 대중화에도 불구하고 제대로 맛있는 커피를 맛보기가 힘든 것은 사실입니다. 나만의 커피를 직접 만들고 심도 있게 커피를 즐겨보세요.',
      path: '/barista',
      align: 'right',
    },
  ];

  return (
    <Container>
      {features.map((feature, i) => (
        <Feature feature={feature} key={i} />
      ))}
    </Container>
  );
};

export default Features;
