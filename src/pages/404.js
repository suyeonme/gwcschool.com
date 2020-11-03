import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;

  h1,
  h2 {
    font-family: Playfair Display;
  }

  h1 {
    font-weight: 900;
    font-size: 8rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin: 1rem 0;
  }

  p {
    font-family: Spoqa Han Sans;
    font-weight: 300;
    line-height: 2;
    margin-bottom: 3rem;
    font-size: 1rem;
  }

  span {
    display: block;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <h2>404 Page Not Found</h2>
      <p>
        요청하신 페이지를 찾을 수 없습니다.
        <span>
          페이지가 존재하지 않거나 사용할 수 없는 페이지 입니다. <br />
          입력하신 주소가정확한지 다시 한 번 확인해주세요.
        </span>
      </p>
    </Wrapper>
  );
};

export default NotFound;
