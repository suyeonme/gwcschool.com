import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  margin-bottom: 6rem;
`;

const Row = styled.div`
  width: 90%;
  margin: 0 auto;
  color: #394744;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 10rem;
`;

const ImgWrapper = styled(ImageWrapper)`
  width: 250px;
  height: 250px;
  margin: 1.5rem;
`;

const Label = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Review = ({ arr, altTag }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0, [titleRef.current]);
    }
  }, [intersection]);

  return (
    <Wrapper ref={sectionRef}>
      <H3Category align="center" ref={titleRef}>
        <span>{altTag}</span> 리뷰
      </H3Category>
      <Row>
        {arr.map((img, i) => (
          <ImgWrapper key={i}>
            <Image filename={img} alt={altTag} />
          </ImgWrapper>
        ))}
      </Row>
      <Label>@곡성 목공예커피체험관</Label>
    </Wrapper>
  );
};

export default Review;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { useIntersection } from 'react-use';

// import Image from 'components/Image/Image';
// import { Container, H3Category } from 'styles/styles';
// import { reveal } from 'animations/animations';

// const Wrapper = styled(Container)`
//   margin-bottom: 6rem;
// `;

// const Row = styled.div`
//   ${'' /* width: 80%; */}
//   width: 90%;
//   margin: 0 auto;
//   color: #394744;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding: 0 10rem;
// `;

// const ImgWrapper = styled.div`
//     width: 250px;
//     height: 250px;
//     margin: 1.5rem;
//     ${'' /* width: 33.3333%; */}
//     ${'' /* height: auto; */}
//     ${'' /* padding: 1.5rem; */}

//     ${'' /* overflow: hidden; */}
//     ${'' /* position: relative; */}

//     ${'' /* img {
//       position: absolute;
//       top: 0;
//       left: 0;
//       transform: scale(1.1);
//       transition: 0.5s ease-in-out;

//       &:hover {
//         transform: scale(1);
//       }
//     } */}
// `;

// // div
// // inner div scale(1.1)

// const Label = styled.p`
//   font-size: 1rem;
//   text-align: center;
// `;

// const Review = ({ arr, altTag }) => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);

//   const intersection = useIntersection(sectionRef, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (intersection && intersection.isIntersecting) {
//       reveal(0, [titleRef.current]);
//     }
//   }, [intersection]);

//   return (
//     <Wrapper ref={sectionRef}>
//       <H3Category align="center" ref={titleRef}>
//         <span>{altTag}</span> 리뷰
//       </H3Category>
//       <Row>
//         {arr.map((img, i) => (
//           <ImgWrapper key={i}>
//               <Image filename={img} alt={altTag} />
//           </ImgWrapper>
//         ))}
//       </Row>
//       <Label>@곡성 목공예커피체험관</Label>
//     </Wrapper>
//   );
// };

// export default Review;
