import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container } from 'styles/styles';
import { reveal } from 'animations/animations';

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  margin: 1.3rem 0 3rem;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 64rem) {
    font-size: 2rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 1.3rem;
    margin: 1rem 0 3rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  letter-spacing: 2px;
  text-align: center;
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 64rem) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 1rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 0.8rem;
  }
`;

const ImgWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  ${'' /* &:last-child {
      display: none;
    } */}

  @media screen and (max-width: 64rem) {
    width: 85%;
  }

  @media screen and (max-width: 48rem) {
    width: 90%;
  }

  @media screen and (max-width: 36rem) {
    ${'' /* flex-direction: column; */}
    ${'' /* justify-content: center; */}
    ${'' /* width: 85%; */}
    width: 90%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 90%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
    justify-content: space-around;
  }

  div {
    overflow: hidden;
    position: relative;
    width: 300px;
    height: 300px;

    @media screen and (max-width: 64rem) {
      width: 250px;
      height: 250px;
    }

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: 48rem) {
      width: 200px;
      height: 200px;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      width: 180px;
      height: 180px;
    }

    @media screen and (max-width: 36rem) {
      ${'' /* width: 100%;
      height: 100%; */}
      width: 150px;
      height: 150px;

      ${
        '' /* &:not(:last-child) {
        margin-bottom: 2rem;

        @media screen and (orientation: landscape) and (max-width: 36rem) {
          margin-bottom: 0;
        } */
      }
      }
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;

  @media screen and (max-width: 64rem) {
    padding: 0 7rem;
  }

  @media screen and (max-width: 48rem) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 0 2rem;
  }

  p {
    text-align: center;
    padding: 0 3rem;
    margin: 1rem 0 3rem;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (max-width: 64rem) {
      padding: 0 1rem;
    }

    @media screen and (max-width: 36rem) {
      padding: 0;
    }
  }

  ul {
    opacity: 0;
    transform: translateY(60px);
  }

  li {
    font-size: 1rem;
    list-style-type: disc;
    margin-left: 1.1rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.9rem;
      line-height: 1.3;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
    }

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
      <Title id="oneday-class">
        DIY 목공예 <span>원데이 클래스</span>
      </Title>
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
