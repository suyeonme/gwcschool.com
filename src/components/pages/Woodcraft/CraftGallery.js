import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image, { ImageWrapper } from 'components/Image/Image';
import { Container, H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  padding: 6rem 0;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3rem;

  div {
    width: 300px;
    height: 300px;
    margin: 2rem;

    overflow: hidden;
    position: relative;
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

  const imgArr = [
    'woodcraft-1.jpg',
    'woodcraft-6.jpg',
    'woodcraft-3.jpg',
    'woodcraft-4.jpg',
    'woodcraft-8.jpg',
    'woodcraft-2.jpg',
    'woodcraft-7.jpg',
    'woodcraft-5.jpg',
    'woodcraft-9.jpg',
  ];

  return (
    <Wrapper ref={sectionRef}>
      <H2Title align="center" ref={titleRef}>
        <span>목공예</span> 작품 갤러리
      </H2Title>
      <ImgContainer>
        {imgArr.map((img, i) => (
          <ImageWrapper key={i}>
            <Image filename={img} alt={`DIY 목공예 작품 ${i + 1}`} />
          </ImageWrapper>
        ))}
      </ImgContainer>
    </Wrapper>
  );
};

export default CraftGallery;

// import React, { useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { useIntersection } from 'react-use';

// import Image from 'components/Image/Image';
// import { Container, H2Title } from 'styles/styles';
// import { reveal } from 'animations/animations';

// const Wrapper = styled(Container)`
//   padding: 6rem 0;
// `;

// const ImgWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding: 0 3rem;

//   div {
//     ${'' /* width: 350px;
//     height: 350px; */}
//     ${'' /* padding: 2rem; */}
//     width: 300px;
//     height: 300px;
//     margin: 2rem;

//     overflow: hidden;
//     position: relative;
// ${
//   '' /*
//     img {
//       position: absolute;
//       top: 0;
//       left: 0;
//       transform: scale(1.1);
//       transition: 0.5s ease-in-out;

//       &:hover {
//         transform: scale(1);
//       } */
// }
//     }
//   }
// `;

// const CraftGallery = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);

//   const intersection = useIntersection(sectionRef, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3,
//   });

//   useEffect(() => {
//     if (intersection && intersection.isIntersecting) {
//       reveal(0, [titleRef.current]);
//     }
//   }, [intersection]);

//   const imgArr = [
//     'woodcraft-1.jpg',
//     'woodcraft-6.jpg',
//     'woodcraft-3.jpg',
//     'woodcraft-4.jpg',
//     'woodcraft-8.jpg',
//     'woodcraft-2.jpg',
//     'woodcraft-7.jpg',
//     'woodcraft-5.jpg',
//     'woodcraft-9.jpg',
//   ];

//   return (
//     <Wrapper ref={sectionRef}>
//       <H2Title align="center" ref={titleRef}>
//         <span>목공예</span> 작품 갤러리
//       </H2Title>
//       <ImgWrapper>
//         {imgArr.map((img, i) => (
//           <div key={i}>
//             <Image filename={img} alt={`DIY 목공예 작품 ${i + 1}`} />
//           </div>
//         ))}
//       </ImgWrapper>
//     </Wrapper>
//   );
// };

// export default CraftGallery;
