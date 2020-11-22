import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Image from 'components/Image/Image';
import { H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const RoastingWrapper = styled.div`
  display: flex;
  justify-content: space-beween;
  width: 85%;
  height: auto;
  padding-bottom: 10rem;
  margin: 0 auto;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: auto;
  opacity: 0;
  transform: translateY(60px);

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0;
    margin-top: 3rem;
  }

  p > span {
    display: block;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 3rem;
    opacity: 0;
    transform: translateY(60px);
  }
`;

const RoastingCourse = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    reveal(
      0.4,
      sectionRef.current,
      imgRef.current,
      titleRef.current,
      subTitleRef.current,
    );
  }, []);
  return (
    <RoastingWrapper ref={sectionRef}>
      <ImageWrapper ref={imgRef}>
        <Image filename="roasting.jpg" alt="원두 로스팅 체험" />
      </ImageWrapper>
      <TextWrapper>
        <H3Category align="center" ref={titleRef}>
          원두를 직접 볶을 수 있는 <span>로스팅 체험</span>
        </H3Category>
        <p ref={subTitleRef}>
          <span>로스팅이란(Roasting)?</span>
          우리말로는 흔히 ‘커피를 볶는다’고 하며, 일본에서 들어온 한자어로
          ‘배전(焙煎)’이라고도 불립니다. 이 과정에서 생두 속에 잠재 되어있는
          맛과 향을 끄집어내게 됩니다. 연하고 부드러운 커피에서 진하고 쓴
          커피까지, 다양한 맛의 스펙트럼을 만들어내며 개인의 커피 취향을 좌우할
          수 있는 결정적인 단계입니다.
        </p>
      </TextWrapper>
    </RoastingWrapper>
  );
};

export default RoastingCourse;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';

// import Image from 'components/Image/Image';
// import { H3Category } from 'styles/styles';
// import { reveal } from 'animations/animations';

// const RoastingWrapper = styled.div`
//   display: flex;
//   justify-content: space-beween;
//   width: 85%;
//   height: auto;
//   padding-bottom: 10rem;
//   margin: 0 auto;

//   @media (max-width: 576px) {
//     flex-direction: column;
//     width: 90%;
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 50%;
//   height: auto;
//   opacity: 0;
//   transform: translateY(60px);

//   @media (max-width: 576px) {
//     width: 100%;
//   }
// `;

// const TextWrapper = styled.div`
//   width: 50%;
//   margin-left: 6rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 576px) {
//     width: 100%;
//     margin-left: 0;
//     margin-top: 3rem;
//   }

//   p > span {
//     display: block;
//     margin-bottom: 1rem;
//   }

//   p {
//     margin-top: 3rem;
//     opacity: 0;
//     transform: translateY(60px);
//   }
// `;

// const RoastingCourse = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     reveal(
//       0.4,
//       sectionRef.current,
//       imgRef.current,
//       titleRef.current,
//       subTitleRef.current,
//     );
//   }, []);
//   return (
//     <RoastingWrapper ref={sectionRef}>
//       <ImageWrapper ref={imgRef}>
//         <Image filename="roasting.jpg" alt="원두 로스팅 체험" />
//       </ImageWrapper>
//       <TextWrapper>
//         <H3Category align="center" ref={titleRef}>
//           원두를 직접 볶을 수 있는 <span>로스팅 체험</span>
//         </H3Category>
//         <p ref={subTitleRef}>
//           <span>로스팅이란(Roasting)?</span>
//           우리말로는 흔히 ‘커피를 볶는다’고 하며, 일본에서 들어온 한자어로
//           ‘배전(焙煎)’이라고도 불립니다. 이 과정에서 생두 속에 잠재 되어있는
//           맛과 향을 끄집어내게 됩니다. 연하고 부드러운 커피에서 진하고 쓴
//           커피까지, 다양한 맛의 스펙트럼을 만들어내며 개인의 커피 취향을 좌우할
//           수 있는 결정적인 단계입니다.
//         </p>
//       </TextWrapper>
//     </RoastingWrapper>
//   );
// };

// export default RoastingCourse;
