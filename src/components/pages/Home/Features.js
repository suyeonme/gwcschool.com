import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import Image from 'components/Image/Image';
import { PrimaryBtn } from 'components/Button/Button';
import { Container, H3Category } from 'styles/styles';
import { reveal, slideImg } from 'animations/animations';

const Wrapper = styled.div`
  position: relative;
  padding: 6rem 0;

  @media screen and (max-width: 36rem) {
    padding: 4rem 0;
  }

  @media screen and (max-width: 20rem) {
    padding: 3rem 0;
  }
    }

  &:last-child {
    margin-top: 4rem;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 36rem) {
      margin-top: 0;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 70%;
  font-size: 2rem;
  margin-left: ${(props) => props.align === 'right' && 'auto'};
  transform: ${(props) =>
    props.align === 'left' ? `translateX(-60px)` : `translateX(60px)`};

  @media screen and (max-width: 48rem) {
    width: calc(100% - 2.5rem);
  }

  @media screen and (max-width: 36rem) {
    width: calc(100% - 1.5rem);
  }

  @media screen and (max-width: 20rem) {
    width: calc(100% - 1rem);
  }

  img {
    position: relative;
    z-index: 200;
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 90%;
  background: linear-gradient(to right bottom, #fdfcfb, #e2d1c3);
  z-index: 100;
  position: absolute;
  bottom: -2.5rem;
  right: ${(props) => props.align === 'right' && '2.5rem'};
  left: ${(props) => props.align === 'left' && '2.5rem'};

  @media screen and (max-width: 48rem) {
    width: calc(100% + 2.5rem);
    right: ${(props) => props.align === 'right' && 0};
    left: ${(props) => props.align === 'left' && 0};
  }

  @media screen and (max-width: 36rem) {
    height: 80%;
    bottom: -1.5rem;
  }
`;

const TextContainer = styled.div`
  width: 28rem;
  height: auto;
  min-height: 28rem;
  z-index: 300;
  color: #394744;
  background-color: #fff;
  padding: 3rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => props.align === 'left' && '10rem'};
  left: ${(props) => props.align === 'right' && '10rem'};

  @media screen and (max-width: 64rem) {
    width: 26rem;
    min-height: 24rem;
    right: ${(props) => props.align === 'left' && '3rem'};
    left: ${(props) => props.align === 'right' && '3rem'};
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    min-height: auto;
    width: 20rem;
    padding: 2rem;
  }

  @media screen and (max-width: 48rem) {
    position: static;
    transform: translateY(2.5rem);
    width: 100%;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    position: absolute;
    width: 20rem;
    padding: 2rem;
    right: ${(props) => props.align === 'left' && '1rem'};
    left: ${(props) => props.align === 'right' && '1rem'};
    transform: translateY(-40%);
  }

  @media screen and (max-width: 36rem) {
    transform: translateY(1.5rem);
    min-height: auto;
    padding: 2rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    padding: 2rem;
    transform: translateY(-40%);
  }

  @media screen and (max-width: 20rem) {
    padding: 2rem;
  }

  h2,
  p {
    transform: translateY(50px);
    opacity: 0;
  }

  h2 {
    font-size: 2.1rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.3rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1.5rem;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 1.3rem;
    }

    span {
      font-size: 1.2rem;
      font-weight: 300;
      margin-left: 1.5rem;

      @media screen and (orientation: landscape) and (max-width: 50.75rem) {
        font-size: 1rem;
      }

      @media screen and (max-width: 36rem) {
        font-size: 1rem;
      }

      @media screen and (max-width: 20rem) {
        font-size: 0.8rem;
      }
    }
  }

  p {
    margin-bottom: 2rem;

    @media screen and (max-width: 36rem) {
      margin-bottom: 1.3 rem;
    }
  }
`;

const Feature = ({ feature }) => {
  const { align, titleKo, category, img, titleEn, path } = feature;
  const sectionRef = useRef(null);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.4, [
        categoryRef.current,
        titleRef.current,
        textRef.current,
        btnRef.current,
      ]);
      slideImg(imgRef.current);
    }
  });

  return (
    <Wrapper ref={sectionRef}>
      <ImgContainer align={align} ref={imgRef}>
        <H3Category align={align} ref={categoryRef}>
          <span>{titleKo} </span> 체험 및 자격증
        </H3Category>
        <Gradient align={align} />
        <Image filename={img} alt={category} />
      </ImgContainer>
      <TextContainer align={align}>
        <h2 ref={titleRef}>
          {titleEn}
          <span>{titleKo}</span>
        </h2>
        {titleEn === 'Barista' ? (
          <p ref={textRef}>
            오늘날 커피의 대중화에도 불구하고
            <span> 제대로 맛있는 커피</span>를 맛보기가 힘든 것은 사실입니다.
            나만의 커피를 직접 만들고 심도 있게 커피를 즐겨보세요.
          </p>
        ) : (
          <p ref={textRef}>
            디지털의 홍수 속에서 살아가는 우리의 감성이 점점 메말라갑니다.
            편리한 플라스틱이 집안을 점령하고 있는 요즘, 목공예를 통해
            <span> 아날로그적 예술가</span>되어보세요.
          </p>
        )}
        <PrimaryBtn
          path={path}
          color="#be7e64"
          text="더 알아보기"
          ref={btnRef}
        />
      </TextContainer>
    </Wrapper>
  );
};

const Features = () => {
  const features = [
    {
      category: `목공예 체험 및 자격증`,
      titleEn: 'Woodcraft',
      titleKo: '목공예',
      img: 'woodcraft.jpg',
      des: `디지털의 홍수 속에서 살아가는 우리의 감성이 점점 메말라갑니다. 편리한 플라스틱이 집안을 점령하고 있는 요즘, 목공예를 통해 아날로그적 예술가가 되어보세요.`,
      path: '/woodcraft',
      align: 'left',
    },
    {
      category: `바리스타 체험 및 자격증`,
      titleEn: 'Barista',
      titleKo: '바리스타',
      img: 'barista.jpg',
      des:
        '오늘날 커피의 대중화에도 불구하고 제대로 맛있는 커피를 맛보기가 힘든 것은 사실입니다. 나만의 커피를 직접 만들고 심도 있게 커피를 즐겨보세요.',
      path: '/barista',
      align: 'right',
    },
  ];

  return (
    <Container>
      {features.map((feature, i) => (
        <Feature feature={feature} key={i} />
      ))}
    </Container>
  );
};

export default Features;

// import React, { useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { useIntersection } from 'react-use';

// import Image from 'components/Image/Image';
// import { PrimaryBtn } from 'components/Button/Button';
// import { Container, H3Category } from 'styles/styles';
// import { reveal, slideImg } from 'animations/animations';

// const Wrapper = styled.div`
//   position: relative;
//   padding: 6rem 0;

//   @media screen and (max-width: 36rem) {
//     padding: 4rem 0;
//   }

//   @media screen and (max-width: 20rem) {
//     padding: 3rem 0;
//   }
//     }

//   &:last-child {
//     margin-top: 4rem;
//     margin-bottom: 2.5rem;

//     @media screen and (max-width: 36rem) {
//       margin-top: 0;
//     }
//   }
// `;

// const ImgContainer = styled.div`
//   position: relative;
//   width: 70%;
//   font-size: 2rem;
//   margin-left: ${(props) => props.align === 'right' && 'auto'};
//   transform: ${(props) =>
//     props.align === 'left' ? `translateX(-60px)` : `translateX(60px)`};

//   @media screen and (max-width: 48rem) {
//     width: calc(100% - 2.5rem);
//   }

//   @media screen and (max-width: 36rem) {
//     width: calc(100% - 1.5rem);
//   }

//   @media screen and (max-width: 20rem) {
//     width: calc(100% - 1rem);
//   }

//   img {
//     position: relative;
//     z-index: 200;
//   }
// `;

// const Gradient = styled.div`
//   width: 100%;
//   height: 90%;
//   background: linear-gradient(to right bottom, #fdfcfb, #e2d1c3);
//   z-index: 100;
//   position: absolute;
//   bottom: -2.5rem;
//   right: ${(props) => props.align === 'right' && '2.5rem'};
//   left: ${(props) => props.align === 'left' && '2.5rem'};

//   @media screen and (max-width: 48rem) {
//     width: calc(100% + 2.5rem);
//     right: ${(props) => props.align === 'right' && 0};
//     left: ${(props) => props.align === 'left' && 0};
//   }

//   @media screen and (max-width: 36rem) {
//     height: 80%;
//     bottom: -1.5rem;
//   }
// `;

// const TextContainer = styled.div`
//   width: 28rem;
//   height: auto;
//   min-height: 28rem;
//   z-index: 300;
//   color: #394744;
//   background-color: #fff;
//   padding: 3rem;
//   box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   right: ${(props) => props.align === 'left' && '10rem'};
//   left: ${(props) => props.align === 'right' && '10rem'};

//   @media screen and (max-width: 64rem) {
//     width: 26rem;
//     min-height: 24rem;
//     right: ${(props) => props.align === 'left' && '3rem'};
//     left: ${(props) => props.align === 'right' && '3rem'};
//   }

//   @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//     min-height: auto;
//     width: 20rem;
//     padding: 2rem;
//   }

//   @media screen and (max-width: 48rem) {
//     position: static;
//     transform: translateY(2.5rem);
//     width: 100%;
//   }

//   @media screen and (max-width: 36rem) {
//     transform: translateY(1.5rem);
//     min-height: auto;
//     padding: 3rem 2rem;
//   }

//   @media screen and (max-width: 20rem) {
//     padding: 2rem;
//   }

//   h2,
//   p {
//     transform: translateY(50px);
//     opacity: 0;
//   }

//   h2 {
//     font-size: 2.1rem;
//     text-transform: uppercase;
//     font-weight: 700;
//     margin-bottom: 1.3rem;

//     @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//       font-size: 1.5rem;
//     }

//     @media screen and (max-width: 36rem) {
//       font-size: 1.5rem;
//     }

//     @media screen and (max-width: 20rem) {
//       font-size: 1.3rem;
//     }

//     span {
//       font-size: 1.2rem;
//       font-weight: 300;
//       margin-left: 1.5rem;

//       @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//         font-size: 1rem;
//       }

//       @media screen and (max-width: 36rem) {
//         font-size: 1rem;
//       }

//       @media screen and (max-width: 20rem) {
//         font-size: 0.8rem;
//       }
//     }
//   }

//   p {
//     margin-bottom: 2rem;
//   }
// `;

// const Feature = ({ feature }) => {
//   const { align, titleKo, category, img, titleEn, path } = feature;
//   const sectionRef = useRef(null);
//   const categoryRef = useRef(null);
//   const titleRef = useRef(null);
//   const textRef = useRef(null);
//   const btnRef = useRef(null);
//   const imgRef = useRef(null);

//   const intersection = useIntersection(sectionRef, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (intersection && intersection.isIntersecting) {
//       reveal(0.4, [
//         categoryRef.current,
//         titleRef.current,
//         textRef.current,
//         btnRef.current,
//       ]);
//       slideImg(imgRef.current);
//     }
//   });

//   return (
//     <Wrapper ref={sectionRef}>
//       <ImgContainer align={align} ref={imgRef}>
//         <H3Category align={align} ref={categoryRef}>
//           <span>{titleKo} </span> 체험 및 자격증
//         </H3Category>
//         <Gradient align={align} />
//         <Image filename={img} alt={category} />
//       </ImgContainer>
//       <TextContainer align={align}>
//         <h2 ref={titleRef}>
//           {titleEn}
//           <span>{titleKo}</span>
//         </h2>
//         {titleEn === 'Barista' ? (
//           <p ref={textRef}>
//             오늘날 커피의 대중화에도 불구하고
//             <span> 제대로 맛있는 커피</span>를 맛보기가 힘든 것은 사실입니다.
//             나만의 커피를 직접 만들고 심도 있게 커피를 즐겨보세요.
//           </p>
//         ) : (
//           <p ref={textRef}>
//             디지털의 홍수 속에서 살아가는 우리의 감성이 점점 메말라갑니다.
//             편리한 플라스틱이 집안을 점령하고 있는 요즘, 목공예를 통해
//             <span> 아날로그적 예술가</span>되어보세요.
//           </p>
//         )}
//         <PrimaryBtn
//           path={path}
//           color="#be7e64"
//           text="더 알아보기"
//           ref={btnRef}
//         />
//       </TextContainer>
//     </Wrapper>
//   );
// };

// const Features = () => {
//   const features = [
//     {
//       category: `목공예 체험 및 자격증`,
//       titleEn: 'Woodcraft',
//       titleKo: '목공예',
//       img: 'woodcraft.jpg',
//       des: `디지털의 홍수 속에서 살아가는 우리의 감성이 점점 메말라갑니다. 편리한 플라스틱이 집안을 점령하고 있는 요즘, 목공예를 통해 아날로그적 예술가가 되어보세요.`,
//       path: '/woodcraft',
//       align: 'left',
//     },
//     {
//       category: `바리스타 체험 및 자격증`,
//       titleEn: 'Barista',
//       titleKo: '바리스타',
//       img: 'barista.jpg',
//       des:
//         '오늘날 커피의 대중화에도 불구하고 제대로 맛있는 커피를 맛보기가 힘든 것은 사실입니다. 나만의 커피를 직접 만들고 심도 있게 커피를 즐겨보세요.',
//       path: '/barista',
//       align: 'right',
//     },
//   ];

//   return (
//     <Container>
//       {features.map((feature, i) => (
//         <Feature feature={feature} key={i} />
//       ))}
//     </Container>
//   );
// };

// export default Features;
