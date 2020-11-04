import styled from 'styled-components';
import { H2Title } from 'styles/styles';

// Syllabus
export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 1200px) {
    padding: 0 15rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 8rem;
  }

  @media screen and (max-width: 576px) {
    padding: 0 3rem;
  }
`;

export const Table = styled.div`
  width: 100%;
  margin-top: 1rem;
  transform: translateY(200px);
  opacity: 0;
`;

export const TableRow = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    flex-direction: row;
  }
`;

export const Cell = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid #adadad;
  border-bottom: 1px solid #adadad;

  @media screen and (max-width: 576px) {
    border-left: 1px solid #adadad;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    border-left: none;
  }

  &:first-child {
    border-left: 1px solid #adadad;
  }
`;

export const Head = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  background-color: #323d3b;
  padding: 10px;
`;

export const Body = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  h5 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

// Course
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  padding: 10rem 3rem;

  @media screen and (max-width: 576px) {
    flex-direction: ${(props) =>
      props.align === 'left' ? 'column-reverse' : 'column'};
    align-items: center;
  }

  @media screen and (orientation: landscape) and (max-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 6rem 1rem;
  }
`;

export const Col = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 6rem;

  @media screen and (max-width: 1024px) {
    margin: 0 3rem;
  }

  p,
  ul {
    transform: translateY(200px);
    opacity: 0;
  }

  p {
    margin: 3rem 0;
  }

  li {
    list-style-type: disc;
    margin-left: 1.1rem;
    margin-bottom: 3rem;
    line-height: 1.3;

    @media screen and (max-width: 576px) {
      margin-left: 3rem;
    }

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

export const ImgWrapper = styled.div`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(200px);
  opacity: 0;

  &:last-child {
    @media screen and (max-width: 576px) {
      display: none;
    }

    @media screen and (orientation: landscape) and (max-width: 576px) {
      display: block;
    }
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.7rem;

  @media screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === 'right' ? 'flex-end' : 'flex-start'};

  @media screen and (max-width: 576px) {
    align-items: flex-end;
  }

  h5 {
    font-size: 2rem;
    margin: 0.5rem 0 6rem;
    font-weight: 300;
    opacity: 0;
    transform: translateY(60px);
  }

  span {
    display: block;
  }
`;

export const Recommendation = styled.ul`
  font-size: 0.9rem;

  h4 {
    font-size: 1.7rem;
    font-weight: 400;
    display: block;
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled(H2Title)`
  margin-bottom: 3rem;

  @media screen and (max-width: 576px) {
    text-align: right;
  }
`;
