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
  font-size: 3.7rem;
  font-weight: 100;
  line-height: 1.3;
  margin-bottom: 2rem;
  text-align: ${(props) => props.align};
  opacity: 0;
  transform: translateY(60px);

  span {
    font-weight: 400;
  }
`;

export const H3Category = styled.h3`
  display: block;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  text-align: ${(props) => props.align};
  transform: translateY(50px);
  opacity: 0;

  span {
    font-weight: 400;
  }
`;

export const FixedImg = styled.section`
  background-image: url(${(props) => props.bgImg})};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${'' /* background-attachment: fixed; */}
  width: 100%;
  height: 90vh;

  @media (max-width: 1200px) {
    height: 40vh;
  }

  @media (max-width: 576px) {
    height: 40vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    height: 90vh;
  }  
`;

export const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
