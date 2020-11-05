import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import greenIcon from 'assets/icons/green.svg';
import { Container, H3Category, H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  height: auto;
  padding: 10rem 3rem 6rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10rem 6rem;
  }

  @media screen and (orientation: landscape) and (max-width: 768px) {
    flex-direction: row;
    padding: 10rem 3rem;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 3rem;
  }

  @media screen and (max-width: 576px) {
    padding: 0;
  }

  @media screen and (orientation: landscape) and (max-width: 768px) {
    padding: 3rem;
    width: 50%;
  }

  img {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
  }
`;

const Content = styled.div`
  transform: translateY(50px);
  opacity: 0;
  margin-bottom: 6rem;
`;

const H3Title = styled(H3Category)`
  transform: translateY(0);
  opacity: 1;
  font-weight: 400;
  margin-bottom: 0.5rem;
  padding: 0;
`;

const Title = styled(H2Title)`
  line-height: 1.5;
  color: #323d3b;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  span {
    font-weight: 400;
  }
`;

const Information = ({ firArr, secArr }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    reveal(0.2, sectionRef.current, titleRef.current, '#contact-us');
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          info {
            tel
            phone
            email
            address
            addressEn
            account
          }
        }
      }
    }
  `);

  const content = (title) => {
    if (title === '전화 번호') {
      return (
        <>
          <a href={`tel:${data.site.siteMetadata.info.tel}`}>
            <p>{data.site.siteMetadata.info.tel} (학교)</p>
          </a>
          <a href={`tel:${data.site.siteMetadata.info.phone}`}>
            <p>{data.site.siteMetadata.info.phone} (개인)</p>
          </a>
        </>
      );
    } else if (title === '이메일') {
      return (
        <a href={`mailto:${data.site.siteMetadata.info.email}`}>
          {data.site.siteMetadata.info.email}
        </a>
      );
    } else if (title === '계좌') {
      return <p>{data.site.siteMetadata.info.account}</p>;
    } else if (title === '오시는 길') {
      return (
        <>
          <p>{data.site.siteMetadata.info.address}</p>
          <p>{data.site.siteMetadata.info.addressEn}</p>
        </>
      );
    } else {
      return (
        <>
          <p>EVERYDAY / 9AM-7AM</p>
          <p>예약 필수</p>
        </>
      );
    }
  };

  return (
    <Wrapper ref={sectionRef}>
      <ContentWrapper>
        <Title ref={titleRef}>
          천혜의 자연환경, <span>곡성 목공예&커피체험관</span>에서 잠시
          쉬어가세요
          <img src={greenIcon} alt="곡성 목공예&커피체험관" />
        </Title>

        {firArr.map((title, i) => (
          <Content key={i} id="contact-us">
            <H3Title>{title}</H3Title>
            {content(title)}
          </Content>
        ))}
      </ContentWrapper>

      <ContentWrapper>
        {secArr.map((title, i) => (
          <Content key={i} id="contact-us">
            <H3Title>{title}</H3Title>
            {content(title)}
          </Content>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Information;
