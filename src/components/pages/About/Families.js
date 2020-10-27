import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import mickey from 'assets/images/cat-1.jpg';
import cookie from 'assets/images/cat-2.jpg';
import wood from 'assets/images/dog.jpg';
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
  }
`;

const Title = styled(H3Category)`
  text-align: right;
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
    { img: mickey, name: '미 키' },
    { img: cookie, name: '쿠 키' },
    { img: wood, name: '우 드' },
  ];

  return (
    <Wrapper ref={sectionRef}>
      <Title align="right" ref={titleRef}>
        패밀리
      </Title>
      <ItemContainer>
        {imgArr.map((img, i) => (
          <figure key={i} id="family">
            <img src={img.img} alt={`곡성 목공예&커피체험관 ${img.name}`} />
            <figcaption>{img.name}</figcaption>
          </figure>
        ))}
      </ItemContainer>
    </Wrapper>
  );
};

export default Families;
