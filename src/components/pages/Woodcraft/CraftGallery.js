import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import img1 from 'assets/images/woodcraft-1.jpg';
import img2 from 'assets/images/woodcraft-6.jpg';
import img3 from 'assets/images/woodcraft-3.jpg';
import img4 from 'assets/images/woodcraft-4.jpg';
import img5 from 'assets/images/woodcraft-8.jpg';
import img6 from 'assets/images/woodcraft-2.jpg';
import img7 from 'assets/images/woodcraft-7.jpg';
import img8 from 'assets/images/woodcraft-5.jpg';
import img9 from 'assets/images/woodcraft-9.jpg';
import { Container, H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 6rem 0;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3rem;

  div {
    ${'' /* width: 350px;
    height: 350px; */}
    ${'' /* padding: 2rem; */}
    width: 300px;
    height: 300px;
    margin: 2rem;

    overflow: hidden;
    position: relative;

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
  }
`;

const CraftGallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0, [titleRef.current]);
    }
  }, [intersection]);

  const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <Wrapper ref={sectionRef}>
      <H2Title align="center" ref={titleRef}>
        <span>목공예</span> 작품 갤러리
      </H2Title>
      <ImgWrapper>
        {imgArr.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`DIY 목공예 작품 ${i + 1}`} />
          </div>
        ))}
      </ImgWrapper>
    </Wrapper>
  );
};

export default CraftGallery;
