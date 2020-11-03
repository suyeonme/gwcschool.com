import React, { useEffect, useState, useRef, forwardRef } from 'react';
import styled from 'styled-components';

import prev from 'assets/icons/arrow-prev.svg';
import next from 'assets/icons/arrow-next.svg';

const Container = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
`;

const SliderContainer = styled.div`
  width: 25%;
  height: auto;
  display: flex;

  img {
    min-width: 100%;
  }

  @media screen and (max-width: 48rem) {
    width: 33.333333%;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 33.333333%;
  }
`;

const Button = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.direction === 'prev' && '1%'};
  right: ${(props) => props.direction === 'next' && '1%'};
  z-index: 200;

  @media screen and (max-width: 20rem) {
    width: 40px;
    height: 40px;
  }

  img {
    width: 25%;
    height: 25%;
  }
`;

const Btn = ({ direction, onClick, img }) => {
  return (
    <Button onClick={onClick} direction={direction}>
      <img src={img} alt="이미지 슬라이더 버튼" />
    </Button>
  );
};

const Carousel = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(4);
  const slideRef = useRef(null);
  const { arr } = props;

  const handleNext = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    const vw = window.innerWidth;
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
    const mobilePort = 320 <= vw && vw < 768;
    const mobileLand = 568 <= vw && vw < 812;
    const tablet = 768 <= vw && vw < 1024;

    if (isPortrait && mobilePort) {
      // 1 image
      setTotalSlide(7);
    } else if ((isLandscape && mobileLand) || (isPortrait && tablet)) {
      // 3 images
      setTotalSlide(5);
    } else if (isLandscape && 812 <= vw) {
      // 4 images
      setTotalSlide(4);
    }
  }, []);

  return (
    <Container ref={ref}>
      <SliderContainer ref={slideRef}>
        {arr.map((img, i) => (
          <img src={img} key={i} alt="곡성 목공예&커피 체험관 이모저모" />
        ))}
      </SliderContainer>
      <Btn direction="prev" onClick={handlePrev} img={prev} />
      <Btn direction="next" onClick={handleNext} img={next} />
    </Container>
  );
});

export default Carousel;
