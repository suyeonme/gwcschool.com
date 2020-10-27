import styled from 'styled-components';

// Courses
export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 12rem;
  margin-bottom: 6rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  word-break: break-all;
  border-collapse: collapse;

  transform: translateY(200px);
  opacity: 0;

  td,
  th {
    border: 1px solid #adadad;
    text-align: center;
  }

  td {
    width: 25%;
    padding: 2rem 1rem;
  }

  th {
    background-color: #323d3b;
    color: white;
    font-size: 1.1rem;
    padding: 8px;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

// Course
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  padding: 6rem 3rem;
`;

export const Col = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 3rem;

  p {
    margin: 1.5rem 0;
  }

  li {
    font-size: 0.9rem;
    list-style-type: disc;
    margin-left: 1.1rem;
    margin-bottom: 2rem;

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

export const Img = styled.img`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  transform: translateY(200px);
  opacity: 0;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.7rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === 'right' ? 'flex-end' : 'flex-start'};

  h5 {
    font-size: 1.3rem;
    margin: 0.5rem 0 4rem;
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
    font-size: 1rem;
    font-weight: 400;
    display: block;
    margin-bottom: 1rem;
  }
`;
