import React, { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';

import { baristaObj, handDripObj } from 'components/Course/CourseObj';
import Course from 'components/Course/Course';
import { Container, Table } from 'components/Course/CourseStyles';
import { H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Syllabus = () => {
  const thArr = ['1회차', '2회차', '3회차', '4회차'];
  const tdArr = [
    { title: '커피기초이론 1', des: '대륙별 커피 품종' },
    { title: '핸드드립 맛의 변수', des: '로스팅/분쇄도/물온도/물줄기/TDS' },
    { title: '추출도구별 실습', des: '클레버,칼리타,멜리타,하디오,모카포트' },
    { title: '커피추출 및 맛과 향', des: '대륙별 커피품종 및 향미분석' },
  ];

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

  return (
    <Container ref={sectionRef}>
      <H3Category align="center" ref={titleRef}>
        <span>핸드드립 취미&심화과정</span> 커리큘럼
      </H3Category>
      <Table ref={tableRef}>
        <thead>
          <tr>
            {thArr.map((th, i) => (
              <th key={i}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tdArr.map((td, i) => (
              <td key={i}>
                <h5>{td.title}</h5>
                <p>{td.des}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

const Courses = () => {
  const arr = [baristaObj, handDripObj];

  return (
    <section>
      {arr.map((el, i) => (
        <Course obj={el} key={i} />
      ))}
      <Syllabus />
    </section>
  );
};

export default Courses;
