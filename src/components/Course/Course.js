import React, { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';

import {
  Wrapper,
  Col,
  ImgWrapper,
  Icon,
  TitleWrapper,
  Recommendation,
} from 'components/Course/CourseStyles';
import Image from 'components/Image/Image';
import thumbIcon from 'assets/icons/thumb.svg';
import { H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const Course = ({ obj }) => {
  const { img, title, info, recommendationFor, align, id } = obj;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.2, [
        subTitleRef.current,
        titleRef.current,
        rightImgRef.current,
        leftImgRef.current,
      ]);
    }
  }, [intersection]);

  if (align === 'right') {
    return (
      <Wrapper id={id && id}>
        <Col>
          <TitleWrapper align={align}>
            <h5 ref={subTitleRef}>{title.level}</h5>
            <H2Title align={align} ref={titleRef}>
              <span>{title.title}</span>
              {title.subTitle}
            </H2Title>
          </TitleWrapper>
          <ImgWrapper ref={leftImgRef}>
            <Image filename={img.img1} alt={img.alt} />
          </ImgWrapper>
        </Col>
        <Col ref={sectionRef}>
          <ImgWrapper ref={rightImgRef}>
            <Image filename={img.img2} alt={img.alt} />
          </ImgWrapper>
          <p>{title.des}</p>
          <ul>
            {info.map((i, index) => (
              <li key={index}>
                <span>{i.key}:</span> &nbsp; {i.value}
              </li>
            ))}
          </ul>
          <Recommendation>
            <h4>
              <Icon src={thumbIcon} alt="이런분들께 추천 드려요" />
              이런분들께 추천 드려요!
            </h4>
            {recommendationFor.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Recommendation>
        </Col>
      </Wrapper>
    );
  }

  if (align === 'left') {
    return (
      <Wrapper id={id && id}>
        <Col ref={sectionRef}>
          <ImgWrapper ref={rightImgRef}>
            <Image filename={img.img2} alt={img.alt} />
          </ImgWrapper>
          <p>{title.des}</p>
          <ul>
            {info.map((i, index) => (
              <li key={index}>
                <span>{i.key}:</span> &nbsp; {i.value}
              </li>
            ))}
          </ul>
          <Recommendation>
            <h4>
              <Icon src={thumbIcon} alt="이런분들께 추천 드려요" />
              이런분들께 추천 드려요!
            </h4>
            {recommendationFor.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Recommendation>
        </Col>
        <Col>
          <TitleWrapper align={align}>
            <h5 ref={subTitleRef}>{title.level}</h5>
            <H2Title align={align} ref={titleRef}>
              <span>{title.title}</span>
              {title.subTitle}
            </H2Title>
          </TitleWrapper>
          <ImgWrapper ref={leftImgRef}>
            <Image filename={img.img1} alt={img.alt} />
          </ImgWrapper>
        </Col>
      </Wrapper>
    );
  }
};

export default Course;
