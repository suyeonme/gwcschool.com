import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import { woodObj } from 'components/Course/CourseObj';
import Course from 'components/Course/Course';
import {
  Container,
  Table,
  TableRow,
  Cell,
  Head,
  Body,
} from 'components/Course/CourseStyles';
import { H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const CourseWrapper = styled.section`
  width: 100%;
  height: auto;
  margin-top: 6rem;

  @media screen and (max-width: 36rem) {
    margin-top: 4rem;
  }
`;

const Syllabus = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tableRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.2, [titleRef.current, tableRef.current]);
    }
  }, [intersection]);

  const firstRow = [
    { th: '1회차', des: '원목 재료 지식' },
    { th: '2회차', des: '자연목 가공 과정' },
    { th: '3회차', des: 'DIY 공구 기술' },
    { th: '4회차', des: '가구 제작 기술' },
  ];

  const secondRow = [
    { th: '5회차', des: '스카시 기술' },
    { th: '6회차', des: '양각 음각 기술' },
    { th: '7회차', des: '친환경 도료 기술' },
    { th: '8회차', des: ' ' },
  ];

  return (
    <Container ref={sectionRef}>
      <H3Category align="center" ref={titleRef}>
        <span>DIY 목공예</span> 커리큘럼
      </H3Category>
      <Table ref={tableRef}>
        <TableRow>
          {firstRow.map((el, i) => (
            <Cell key={i}>
              <Head>{el.th}</Head>
              <Body>
                <h5>{el.des}</h5>
              </Body>
            </Cell>
          ))}
        </TableRow>
        <TableRow>
          {secondRow.map((el, i) => (
            <Cell key={i}>
              <Head>{el.th}</Head>
              <Body>
                <h5>{el.des}</h5>
              </Body>
            </Cell>
          ))}
        </TableRow>
      </Table>
      <p>
        <span>준비물:</span> &nbsp; 앞치마, 장갑, 편한 신발, 마스크
      </p>
    </Container>
  );
};

const Courses = () => {
  return (
    <CourseWrapper>
      <Course obj={woodObj} />
      <Syllabus />
    </CourseWrapper>
  );
};

export default Courses;
