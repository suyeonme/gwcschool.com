import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import BgImage from 'components/BgImage/BgImage';
import { Container, BgWrapper } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  position: relative;
  color: #f7f3ec;
`;

const TextWrapper = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-width: 64rem) {
    width: 80%;
  }

  @media screen and (max-width: 36rem) {
    width: 90%;
  }

  h2,
  p {
    transform: translateY(50px);
    opacity: 0;
  }

  h2,
  span {
    font-family: 'Song Myung';
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #aa9995;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 2.5;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      line-height: 2.3;
      font-size: 0.8rem;
    }

    @media screen and (max-width: 36rem) {
      line-height: 2.3;
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.65rem;
    }

    span {
      display: block;
      color: #aa9995;
      font-size: 1.5rem;
      margin-top: 2rem;
      font-weight: 300;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        font-size: 1.1rem;
      }

      @media screen and (max-width: 36rem) {
        font-size: 1rem;
        line-height: 1.8;
      }

      @media screen and (max-width: 20rem) {
        font-size: 0.75rem;
      }
    }
  }
`;

const QuotationMark = styled.span`
  position: absolute;
  top: 4rem;
  left: 4rem;
  font-family: 'Song Myung';
  font-size: 23rem;
  color: #a4a89a;
  opacity: 0.2;
  transform: rotate(5deg);

  @media screen and (max-width: 64rem) {
    font-size: 20rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 17rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 10rem;
    left: 1.5rem;
  }
`;

const BgContainer = styled(BgWrapper)`
  height: 70vh;

  @media screen and (max-width: 64rem) {
    height: 50vh;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    height: 70vh;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    height: 90vh;
  }

  @media screen and (max-width: 48rem) {
    height: 70vh;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    height: 100vh;
  }

  ${'' /* @media screen and (orientation: landscape) and (max-width: 36rem) {
    height: 100vh;
  } */}
`;

const AboutSchool = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, '#aboutSchool');
    }
  }, [intersection]);

  return (
    <Wrapper ref={sectionRef}>
      <BgContainer>
        <BgImage filename="school.jpg" height="100%" />
      </BgContainer>
      <TextWrapper>
        <h2 id="aboutSchool">박사골 오감만족관은,</h2>
        <p id="aboutSchool">
          죽곡면 봉정마을은 박사골로 불릴 정도로 많은 인재를 배출하였습니다.
          하지만 이 마을도 농촌 인구 감소와 저출산 여파는 비켜가지 않았습니다.
          이 마을이 배출한 박사님들이 다녔을 봉정 초등학교도 학생 수가 급격히
          감소하면서 폐교의 아픔을 받아들일 수밖에 없었지요. 폐교로 오랫동안
          방치되어 있던 옛 봉정 초등학교가 박사골 오감만족관으로 새롭게 문을
          열었습니다.
          <span id="aboutSchool">
            가공되지 않은 자연 그대로를 느낄 수 있는 박사골 오감만족관에서 잠시
            쉬어가세요.
          </span>
        </p>
      </TextWrapper>
      <QuotationMark>&ldquo;</QuotationMark>
    </Wrapper>
  );
};

export default AboutSchool;
