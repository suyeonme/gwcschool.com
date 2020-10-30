import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image from 'components/Image/Image';
import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 6rem;
`;

const ItemContainer = styled.div`
  width: 35%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 48rem) {
    width: 45%;
  }

  @media screen and (max-width: 36rem) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 45%;
    margin: 0 0 0 auto;
  }

  figure {
    width: 26%;
    height: 26%;

    opacity: 0;
    transform: translateY(60px);

    img {
      border-radius: 50%;
    }
  }

  figcaption {
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;

    @media screen and (max-width: 36rem) {
      font-size: 0.85rem;
    }
  }
`;

const Title = styled(H3Category)`
  @media screen and (max-width: 36rem) {
    text-align: center;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    text-align: right;
  }
`;

const Families = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.2, [titleRef.current, '#family']);
    }
  });

  const imgArr = [
    { img: 'cat-1.jpg', name: '미 키' },
    { img: 'cat-2.jpg', name: '쿠 키' },
    { img: 'dog.jpg', name: '우 드' },
  ];

  return (
    <Wrapper ref={sectionRef}>
      <Title align="right" ref={titleRef}>
        곡성 목공예&커피체험관 <span>패밀리</span>
      </Title>
      <ItemContainer>
        {imgArr.map((img, i) => (
          <figure key={i} id="family">
            <Image
              filename={img.img}
              alt={`곡성 목공예&커피체험관 ${img.name}`}
            />
            <figcaption>{img.name}</figcaption>
          </figure>
        ))}
      </ItemContainer>
    </Wrapper>
  );
};

export default Families;
