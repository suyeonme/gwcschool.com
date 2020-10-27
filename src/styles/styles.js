import styled from 'styled-components';

// Orange: #BE7E64
// Beige: #efebe6
// Green:  #394744;

// Container: padding
// H2Title: margin-bottom

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
  margin-bottom: 4rem;
  text-align: ${(props) => props.align};

  opacity: 0;
  transform: translateY(60px);

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
`;
