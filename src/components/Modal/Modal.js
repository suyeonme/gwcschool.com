import React, { useState } from 'react';
import styled from 'styled-components';
import bgImg from 'assets/images/modal-bg.jpg';

import { BgOverlay } from 'styles/styles';

// loading - popup
// Show only once day (localStorage or cookie)
// Media query and cross browsing

const Wrapper = styled.div`
  background: blue;
  width: 500px;
  height: 600px;
  position: fixed;
  top: 4%;
  left: 2%;
  z-index: 400;
  border-radius: 7px;
  padding: 5rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background: url(${bgImg});
  background-size: cover;
  background-repeat: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    font-family: 'Dokdo', cursive;
    font-size: 14rem;
    color: #403f3e;
  }

  h2 {
    font-size: 1.7rem;
    letter-spacing: 2px;
  }

  h2 > span {
    display: block;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 2rem;
    }
  }
`;

const Body = styled.div`
  p,
  li {
    font-size: 1.5rem;
    font-weight: 400;
  }

  li {
    list-style-type: disc;
    list-style-position: inside;
    line-height: 1.8;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Footer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 1.3rem;
  right: 1.5rem;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }

  label {
    cursor: pointer;
  }
`;

const Modal = ({ onClose }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <h2>
            <span>나만을 위한</span>
            <span>우리만을 위한</span>
          </h2>
          <h1>쉼,</h1>
        </Header>
        <Body>
          <p>
            곡성 목공예&커피체험관에서 <span>우리만을 위한(소규모 그룹) </span>
            단독 체험을 진행할 수 있습니다.
          </p>
          <ul>
            <li>가족, 친구, 연인, 혼자도 가능</li>
            <li>예약 필수</li>
            <li>다양한 체험 활동</li>
            <li>평생 교육 가능</li>
          </ul>
        </Body>
        <Footer>
          <input
            type="checkbox"
            id="close-btn"
            name="close-btn"
            value="close-btn"
            onChange={onClose}
          />
          <label for="close-btn">오늘 하루 열지 않기</label>
        </Footer>
      </Wrapper>
      <BgOverlay onClick={onClose} />
    </>
  );
};

export default React.memo(Modal);
