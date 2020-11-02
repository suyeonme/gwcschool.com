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

  @media screen and (max-width: 64rem) {
    height: 50vh;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    height: 90vh;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    height: auto;
    min-height: 90vh;
    padding: 4rem 0;
  }

  @media screen and (max-width: 48rem) {
    height: 65vh;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    height: auto;
  }

  @media screen and (max-width: 36rem) {
    height: auto;
    min-height: 100vh;
    padding: 4rem 0;
  }
`;

const CardsWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 1rem;

  @media screen and (max-width: 64rem) {
    width: 85%;
  }

  @media screen and (max-width: 48rem) {
    width: 95%;
  }

  @media screen and (max-width: 36rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    flex-direction: row;
    justify-content: space-around;
    width: 95%;
  }
`;

const CardWrapper = styled.div`
  width: 25%;
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    width: 30%;
  }

  @media screen and (max-width: 48rem) {
    width: 30%;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    width: 30%;
    margin-bottom: 0;
  }

  @media screen and (max-width: 20rem) {
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 35px;
    height: 35px;

    @media screen and (max-width: 36rem) {
      width: 30px;
      height: 30px;
    }

    @media screen and (max-width: 20rem) {
      width: 25px;
      height: 25px;
    }
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1rem;

    @media screen and (orientation: landscape) and (max-width: 50.75rem) {
      font-size: 1rem;
    }

    @media screen and (max-width: 48rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 36rem) {
      font-size: 1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.85rem;
    }
  }

  p {
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
