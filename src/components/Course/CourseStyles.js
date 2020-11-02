import styled from 'styled-components';
import { H2Title } from 'styles/styles';

// Syllabus
export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 12rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 64rem) {
    padding: 0 7rem;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    padding: 0 6rem;
  }

  @media screen and (max-width: 48rem) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 0 1.5rem;
    margin-bottom: 4rem;
  }
`;

export const Table = styled.div`
  width: 100%;
  transform: translateY(200px);
  opacity: 0;
`;

export const TableRow = styled.div`
  display: flex;

  @media screen and (max-width: 36rem) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
  }
`;

export const Cell = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid #adadad;
  border-bottom: 1px solid #adadad;

  @media screen and (max-width: 36rem) {
    border-left: 1px solid #adadad;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    border-left: none;
  }

  &:first-child {
    border-left: 1px solid #adadad;
  }
`;

export const Head = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  background-color: #323d3b;
  padding: 10px;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 0.8rem;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  h5 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.9rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.75rem;
    }
  }
`;

// Course
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  padding: 6rem 3rem;

  @media screen and (max-width: 48rem) {
    padding: 6rem 1rem;
  }

  @media screen and (max-width: 36rem) {
    flex-direction: ${(props) =>
      props.align === 'left' ? 'column-reverse' : 'column'};
    padding: 4rem 1.5rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
    padding: 6rem 1rem;
  }
`;

export const Col = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 3rem;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    margin: 0 2rem;
  }

  @media screen and (max-width: 48rem) {
    margin: 0 1.5rem;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    margin: 0 1.5rem;
  }

  @media screen and (max-width: 36rem) {
    margin: 0;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    margin: 0 1.5rem;
  }

  p,
  ul {
    transform: translateY(200px);
    opacity: 0;
  }

  p {
    margin: 1.5rem 0;
  }

  li {
    font-size: 0.9rem;
    list-style-type: disc;
    margin-left: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.3;

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.7rem;
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
    @media screen and (max-width: 36rem) {
      display: none;
    }

    @media screen and (orientation: landscape) and (max-width: 36rem) {
      display: block;
    }
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.7rem;

  @media screen and (max-width: 36rem) {
    width: 15px;
    height: 15px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === 'right' ? 'flex-end' : 'flex-start'};

  @media screen and (max-width: 36rem) {
    align-items: flex-end;
  }

  h5 {
    font-size: 1.3rem;
    margin: 0.5rem 0 4rem;
    font-weight: 300;
    opacity: 0;
    transform: translateY(60px);

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.1rem;
    }

    @media screen and (orientation: landscape) and (max-width: 48rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 36rem) {
      margin: 0 0 2rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.9rem;
    }
  }

  span {
    display: block;
  }
`;

export const Recommendation = styled.ul`
  font-size: 0.9rem;

  h4 {
    font-size: 1rem;
    font-weight: 400;
    display: block;
    margin-bottom: 1rem;

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }
`;

export const Title = styled(H2Title)`
  @media screen and (max-width: 64rem) {
    font-size: 1.8rem;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 48rem) {
    font-size: 1.4rem;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 36rem) {
    margin-bottom: 2rem;
    text-align: right;
  }

  @media screen and (max-width: 20rem) {
    font-size: 1.2rem;
  }
`;
