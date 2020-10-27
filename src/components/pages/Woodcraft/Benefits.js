import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import bgImg from 'assets/images/wood-fixed-2.jpg';
import treeIcon from 'assets/icons/tree.svg';
import medicalIcon from 'assets/icons/medical.svg';
import smileIcon from 'assets/icons/smile.svg';
import { Container, H2Title, H3Category } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  background-image: linear-gradient(
      rgba(33, 53, 38, 0.7),
      rgba(129, 129, 129, 0.8)
    ),
    ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 90vh;
  display: flex;
  align-items: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const CardWrapper = styled.div`
  width: 20%;
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 35px;
    height: 35px;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1rem;
  }

  div {
    opacity: 0;
    transform: translateY(60px);
  }
`;

const Title = styled(H2Title)`
  color: white;
`;

const SubTitle = styled(H3Category)`
  color: white;
`;

const Card = ({ icon, title, des }) => {
  return (
    <CardWrapper>
      <div id="benefits">
        <img src={icon} alt="나무의 효능" />
        <h4>{title}</h4>
        <p>{des}</p>
      </div>
    </CardWrapper>
  );
};

const Benefits = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.3, [titleRef.current, subTitleRef.current, '#benefits']);
    }
  }, [intersection]);

  const cardsArr = [
    {
      icon: treeIcon,
      title: '향균 및 방충',
      des: '나무는 음이온을 방출하고, 산소 공급 및 실내 수분량을 조절합니다.',
    },
    {
      icon: medicalIcon,
      title: '아토피, 비염 완화',
      des:
        '나무의 향균 및 방충효과는 알러지 아토피성 피부 완화에 효과적입니다.',
    },
    {
      icon: smileIcon,
      title: '스트레소 해소',
      des: '감각 계통 안정, 심신 정화, 혈액 순환등을 느낄 수 있습니다.',
    },
  ];

  return (
    <Wrapper bgImg={bgImg} ref={sectionRef}>
      <div>
        <Title align="center" ref={titleRef}>
          <span>나무</span>의 효능
        </Title>
        <SubTitle align="center" ref={subTitleRef}>
          DIY재료 - <span>홍송 편백 삼나무</span>
        </SubTitle>
        <CardsWrapper>
          {cardsArr.map((card, i) => (
            <Card icon={card.icon} title={card.title} des={card.des} key={i} />
          ))}
        </CardsWrapper>
      </div>
    </Wrapper>
  );
};

export default Benefits;
