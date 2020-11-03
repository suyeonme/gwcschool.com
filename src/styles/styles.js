import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #efebe6;
`;

export const H2Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 100;
  line-height: 1.3;
  margin-bottom: 2rem;
  text-align: ${(props) => props.align};
  opacity: 0;
  transform: translateY(60px);

  @media screen and (max-width: 64rem) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 1.15rem;
  }

  span {
    font-weight: 400;
  }
`;

export const H3Category = styled.h3`
  display: block;
  font-size: 1.3rem;
  padding: 1rem 1.5rem;
  text-align: ${(props) => props.align};
  transform: translateY(50px);
  opacity: 0;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 1rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 0.8rem;
  }

  span {
    font-weight: 400;
  }
`;

export const FixedImg = styled.section`
  background-image: url(${(props) => props.bgImg})};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 90vh;

  @media screen and (max-width: 64rem) {
    height: 50vh;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    height: 90vh;
  }

  @media screen and (max-width: 36rem) {
    height: 40vh;
  } 

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    height: 90vh;
  }
  
`;

export const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
