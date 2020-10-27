import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import img1 from 'assets/images/oneday-1.jpg';
import img2 from 'assets/images/oneday-2.jpg';
import img3 from 'assets/images/oneday-3.jpg';
import { Container } from 'styles/styles';
import { reveal } from 'animations/animations';

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  margin: 1.3rem 0 3rem;

  opacity: 0;
  transform: translateY(60px);
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  letter-spacing: 2px;
  text-align: center;

  opacity: 0;
  transform: translateY(60px);
`;

const ImgWrapper = styled.div`
  display: flex;
  padding: 0 8rem;

  div {
    ${'' /* padding: 2rem; */}
    margin: 2rem;

    overflow: hidden;
    position: relative;
    width: 300px;
    height: 300px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.1);
    transition: 0.5s ease-in-out;

    &:hover {
      transform: scale(1);
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;

  p {
    text-align: center;
    padding: 0 3rem;
    margin: 1rem 0 3rem;

    opacity: 0;
    transform: translateY(60px);
  }

  ul {
    opacity: 0;
    transform: translateY(60px);
  }

  li {
    font-size: 1rem;
    list-style-type: disc;
    margin-left: 1.1rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const OnedayClass = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.2, '#oneday-class');
    }
  }, [intersection]);

  const images = [
    { img: img1, alt: '목공예 원데이클래스 작품 1' },
    { img: img2, alt: '목공예 원데이클래스 작품 2' },
    { img: img3, alt: '목공예 원데이클래스 작품 3' },
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
      <Title id="oneday-class">
        DIY 목공예 <span>원데이 클래스</span>
      </Title>
      <ImgWrapper>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img.img} alt={img.alt} />
          </div>
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
