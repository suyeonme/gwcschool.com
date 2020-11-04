import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Container = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 130vh;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1199.98px) {
    min-height: 100vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    min-height: 130vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 50%;
  left: 15rem;
  transform: translateY(-50%);

  @media (max-width: 1199.98px) {
    top: 60%;
  }

  @media (max-width: 575.98px) {
    left: 6rem;
  }
`;

const Title = styled.h1`
  font-family: 'Song Myung';
  color: #f7f3ec;
  writing-mode: vertical-rl;
  margin: 0;
  opacity: 0;
  transform: translateY(10px);
`;

const MainTitle = styled(Title)`
  font-size: 9.5rem;
  letter-spacing: 10px;
`;

const SubTitle = styled(Title)`
  font-size: 4.2rem;
  letter-spacing: 2px;
  margin: 2rem 0;
`;

const HomeHeader = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    gsap.to([subTitleRef.current, titleRef.current], {
      opacity: 1,
      stagger: 0.6,
      delay: 0.7,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <Container fluid={image.sharp.fluid}>
      <Wrapper>
        <SubTitle ref={subTitleRef}>삶.숨.쉼.이 있는 </SubTitle>
        <MainTitle ref={titleRef}>느림의 미학 </MainTitle>
      </Wrapper>
    </Container>
  );
};

export default HomeHeader;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import gsap from 'gsap';

// import { graphql, useStaticQuery } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';

// const Container = styled(BackgroundImage)`
//   position: relative;
//   width: 100%;
//   min-height: 130vh;
//   background-repeat: no-repeat;
//   background-size: cover;

//   @media screen and (max-width: 64rem) {
//     min-height: 90vh;
//   }

//   @media screen and (orientation: landscape) and (max-width: 64rem) {
//     min-height: 130vh;
//   }

//   @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//     min-height: 130vh;
//   }

//   @media screen and (max-width: 36rem) {
//     min-height: 80vh;
//   }

//   @media screen and (orientation: landscape) and (max-width: 36rem) {
//     min-height: 130vh;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: flex-end;
//   position: absolute;
//   top: 50%;
//   left: 10rem;
//   transform: translateY(-50%);

//   @media screen and (max-width: 64rem) {
//     top: 60%;
//   }

//   @media screen and (max-width: 48rem) {
//     left: 7rem;
//   }

//   @media screen and (max-width: 36rem) {
//     left: 3rem;
//   }
// `;

// const Title = styled.h1`
//   font-family: 'Song Myung';
//   color: #f7f3ec;
//   writing-mode: vertical-rl;
//   margin: 0;

//   opacity: 0;
//   transform: translateY(10px);
// `;

// const MainTitle = styled(Title)`
//   font-size: 6rem;
//   letter-spacing: 10px;

//   @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//     font-size: 3.5rem;
//   }

//   @media screen and (max-width: 48rem) {
//     font-size: 5rem;
//   }

//   @media screen and (orientation: landscape) and (max-width: 48rem) {
//     font-size: 3.5rem;
//   }

//   @media screen and (max-width: 36rem) {
//     font-size: 3.1rem;
//   }

//   @media screen and (orientation: landscape) and (max-width: 36rem) {
//     font-size: 3rem;
//   }

//   @media screen and (max-width: 20rem) {
//     font-size: 2.3rem;
//   }
// `;

// const SubTitle = styled(Title)`
//   font-size: 2.5rem;
//   letter-spacing: 2px;
//   margin: 1rem 0;

//   @media screen and (orientation: landscape) and (max-width: 50.75rem) {
//     font-size: 1.8rem;
//   }

//   @media screen and (max-width: 36rem) {
//     font-size: 1.5rem;
//   }

//   @media screen and (max-width: 20rem) {
//     font-size: 1.1rem;
//   }
// `;

// const HomeHeader = () => {
//   const { image } = useStaticQuery(graphql`
//     query {
//       image: file(relativePath: { eq: "hero.jpg" }) {
//         sharp: childImageSharp {
//           fluid(maxWidth: 1920) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `);

//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);

//   useEffect(() => {
//     gsap.to([subTitleRef.current, titleRef.current], {
//       opacity: 1,
//       stagger: 0.6,
//       delay: 0.7,
//       y: 0,
//       duration: 1,
//       ease: 'power2.inOut',
//     });
//   }, []);

//   return (
//     <Container fluid={image.sharp.fluid}>
//       <Wrapper>
//         <SubTitle ref={subTitleRef}>삶.숨.쉼.이 있는 </SubTitle>
//         <MainTitle ref={titleRef}>느림의 미학 </MainTitle>
//       </Wrapper>
//     </Container>
//   );
// };

// export default HomeHeader;
