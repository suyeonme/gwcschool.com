import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image from 'components/Image/Image';
import textbgImg from 'assets/images/profile-background.jpg';
import { Container, H3Category } from 'styles/styles';
import { reveal, slideImg } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 6rem 0 7rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 36rem) {
    padding: 4rem 0;
  }
`;

const ContentWrapper = styled.div`
  width: 90%;
  height: auto;
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 64rem) {
    min-height: 55vh;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    min-height: 100vh;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    min-height: 120vh;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    min-height: 100vh;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    min-height: 150vh;
  }
`;

const ImgWrapper = styled.div`
  width: 45%;
  height: auto;
  position: absolute;
  z-index: 200;
  top: 50%;
  transform: translateY(-50%) translateX(-5%);

  @media screen and (max-width: 64rem) {
    width: 49%;
    transform: translateY(-50%) translateX(-5%);
  }

  @media screen and (max-width: 48rem) {
    position: static;
    width: 90%;
    margin: 0 auto;
    transform: translateY(0) translateX(0);
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    width: 49%;
    height: auto;
    position: absolute;
    z-index: 200;
    top: 50%;
    transform: translateY(-50%) translateX(-5%);
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 49%;
    height: auto;
    position: absolute;
    z-index: 200;
    top: 50%;
    transform: translateY(-50%) translateX(-5%);
  }
`;

const TextWrapper = styled.div`
  background-image: linear-gradient(
      rgba(239, 235, 230, 0.7),
      rgba(239, 235, 230, 0.7)
    ),
    ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 55%;
  height: auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 0;
  top: 53%;
  transform: translateY(-50%);
  padding: 5rem;
  color: #352825;
  align-self: flex-start;

  @media screen and (max-width: 64rem) {
    width: 53%;
    padding: 4rem;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    padding: 3rem;
  }

  @media screen and (max-width: 48rem) {
    position: static;
    width: 90%;
    margin: 0 auto;
    transform: translateY(0);
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    width: 53%;
    position: absolute;
    right: 0;
    top: 53%;
    margin: 0;
    padding: 2.5rem 2.5rem 2.5rem 3rem;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 36rem) {
    padding: 2rem;
    width: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 53%;
    position: absolute;
    right: 0;
    top: 53%;
    margin: 0;
    padding: 2.5rem 2.5rem 2.5rem 3rem;
    transform: translateY(-50%);
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    padding: 2rem 2rem 2rem 2.5rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.15rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 1rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.15rem;
      text-align: center;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 0.9rem;
    }

    span {
      font-size: 1.2rem;
      font-weight: 300;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        font-size: 0.9rem;
      }

      @media screen and (orientation: landscape) and (max-width: 48rem) {
        font-size: 0.75rem;
      }

      @media screen and (max-width: 36rem) {
        font-size: 0.9rem;
      }

      @media screen and (orientation: landscape) and (max-width: 36rem) {
        font-size: 0.7rem;
      }
    }
  }

  blockquote {
    font-size: 1.1rem;
    line-height: 2.5;
    padding-top: 2rem;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.8rem;
      padding-top: 1.5rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 0.75rem;
      padding-top: 1rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 0.8rem;
      padding-top: 1.5rem;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 0.7rem;
      padding-top: 1rem;
    }
  }
`;

const Title = styled(H3Category)`
  @media screen and (max-width: 36rem) {
    text-align: center;
  }
`;

const Message = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, [titleRef.current, subTitleRef.current, textRef.current]);
      slideImg(imgRef.current);
    }
  }, [intersection]);

  return (
    <Wrapper ref={sectionRef}>
      <ContentWrapper>
        <ImgWrapper ref={imgRef}>
          <Title align="left" ref={titleRef}>
            곡성 목공예&커피체험관 <span>소개</span>
          </Title>
          <Image
            filename="profile.jpg"
            alt="곡성 목공예커피체험관 김광수관장"
          />
        </ImgWrapper>
        <TextWrapper bgImg={textbgImg}>
          <h3 ref={subTitleRef}>
            커피카펜터 김광수<span> 관장</span>
          </h3>
          <blockquote ref={textRef}>
            곡성 목공예커피체험관에 오신 것을 환영합니다. 곡성
            목공예커피체험관은 오랜 세월이 흐르고 손때가 묻을수록 그 가치를 느낄
            수 있습니다. 누구나 쉽게 배우고 내 손으로 직접 디자인하는 DIY
            목공예, 그리고 커피를 직접 메뉴를 만들어보는 자연 속 체험관입니다.
            모두가 바쁘게만 살아가는 디지털 시대를 넘어 인공지능이 자리 잡아가는
            시대에 삶, 숨, 쉼이 있는 ‘느림의 미학’.. 서로 공감대 형성, 가족 간의
            협동심, 공유, 성취감과 즐거움을 동시에 느낄 수 있는 자연 속 체험관이
            될 수 있도록 최선을 다하겠습니다. 감사합니다.
          </blockquote>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Message;
