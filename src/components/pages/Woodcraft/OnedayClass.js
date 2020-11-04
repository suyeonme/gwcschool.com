import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container, H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const SubTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 100;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(60px);
`;

const ImgWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }

    div {
      width: 30%;
      height: 100%;

      div {
        width: 100%;
      }
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 20rem;

  @media screen and (max-width: 1200px) {
    padding: 0 15rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 8rem;
  }

  @media screen and (max-width: 576px) {
    padding: 0;
  }

  p {
    text-align: center;
    padding: 0 3rem;
    margin: 3rem 0;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (max-width: 576px) {
      margin: 3rem 0 6rem;
    }
  }

  ul {
    opacity: 0;
    transform: translateY(60px);
  }

  li {
    list-style-type: disc;
    margin-left: 1.1rem;

    @media screen and (max-width: 576px) {
      margin-left: 5rem;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

const OnedayClass = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    reveal(0.2, sectionRef.current, '#oneday-class');
  }, []);

  const images = [
    { filename: 'oneday-1.jpg', alt: '목공예 원데이클래스 작품 1' },
    { filename: 'oneday-2.jpg', alt: '목공예 원데이클래스 작품 2' },
    { filename: 'oneday-3.jpg', alt: '목공예 원데이클래스 작품 3' },
  ];

  const info = [
    { key: '담당강사', value: '김광수 관장' },
    { key: '수업정원', value: ' 1~30명' },
    { key: '소요기간', value: '1~3시간' },
    { key: '체험내용', value: ' 편백도마, 트레이등 100여가지 소품 만들기' },
    { key: '수강일정', value: '상담필수' },
    { key: '수강금액', value: '상담필수' },
  ];

  return (
    <Container ref={sectionRef}>
      <SubTitle id="oneday-class">누구나 할 수 있는</SubTitle>
      <H2Title id="oneday-class" align="center">
        DIY 목공예 <span>원데이 클래스</span>
      </H2Title>
      <ImgWrapper>
        {images.map((img, i) => (
          <ImageWrapper key={i}>
            <Image filename={img.filename} alt={img.alt} />
          </ImageWrapper>
        ))}
      </ImgWrapper>
      <TextWrapper>
        <p id="oneday-class">
          편리한 플라스틱이 집안을 점령하고 있는 요즘, 대량으로 생산되는 식상한
          가구 대신 자연을 닮은 편백 향이 물씬 풍기는 나만의 소품을
          만들어보세요. 남녀노소 누구나 내 손으로 직접 설계하고 만들며 오감으로
          즐길 수 있는 체험 활동입니다.
        </p>
        <ul id="oneday-class">
          {info.map((el, i) => (
            <li key={i}>
              <span>{el.key}:</span> &nbsp; {el.value}
            </li>
          ))}
        </ul>
      </TextWrapper>
    </Container>
  );
};

export default OnedayClass;
