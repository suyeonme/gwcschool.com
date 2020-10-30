import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { useIntersection } from 'react-use';

// import { woodObj } from 'components/Course/CourseObj';
// import Course from 'components/Course/Course';
// import { Container, Table } from 'components/Course/CourseStyles';
// import { H3Category } from 'styles/styles';
// import { reveal } from 'animations/animations';

const Courses = () => {
  return <div>Test</div>;
};

export default Courses;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { useIntersection } from 'react-use';

// import { woodObj } from 'components/Course/CourseObj';
// import Course from 'components/Course/Course';
// import { Container, Table } from 'components/Course/CourseStyles';
// import { H3Category } from 'styles/styles';
// import { reveal } from 'animations/animations';

// const CourseWrapper = styled.section`
//   width: 100%;
//   height: auto;
//   margin-top: 6rem;
// `;

// const Wrapper = styled(Container)`
//   p {
//     font-size: 0.9rem;
//     margin: 1rem 0;
//   }
// `;

// const TableWrapper = styled(Table)`
//   td {
//     padding: 2rem;
//   }

//   h5 {
//     font-size: 1rem;
//     font-weight: 400;
//     margin-bottom: 0;
//   }
// `;

// const Syllabus = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const tableRef = useRef(null);

//   const intersection = useIntersection(sectionRef, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (intersection && intersection.isIntersecting) {
//       reveal(0.2, [titleRef.current, tableRef.current]);
//     }
//   }, [intersection]);

//   const tableArr = [
//     {
//       th: ['1회차', '2회차', '3회차', '4회차'],
//       td: [
//         '원목 재료 지식',
//         '자연목 가공 과정',
//         'DIY 공구 기술',
//         '가구 제작 기술',
//       ],
//     },
//     {
//       th: ['5회차', '6회차', '7회차', ''],
//       td: ['스카시 기술', '양각 음각 기술', '친환경 도료 기술', ''],
//     },
//   ];

//   return (
//     <Wrapper ref={sectionRef}>
//       <H3Category align="center" ref={titleRef}>
//         <span>DIY 목공예</span> 커리큘럼
//       </H3Category>
//       <TableWrapper ref={tableRef}>
//         {tableArr.map((a, i) => (
//           <React.Fragment key={i}>
//             <thead>
//               <tr>
//                 {a.th.map((th, i) => (
//                   <th key={i}>{th}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 {a.td.map((td, i) => (
//                   <td key={i}>
//                     <h5>{td}</h5>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </React.Fragment>
//         ))}
//       </TableWrapper>
//       <p>
//         <span>준비물:</span> &nbsp; 앞치마, 장갑, 편한 신발, 마스크
//       </p>
//     </Wrapper>
//   );
// };

// const Courses = () => {
//   return (
//     <CourseWrapper>
//       <Course obj={woodObj} />
//       <Syllabus />
//     </CourseWrapper>
//   );
// };

// export default Courses;
