import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import greenIcon from 'assets/icons/green.svg';
import { Container, H3Category, H2Title } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  height: auto;
  padding: 6rem 3rem 3rem;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    flex-direction: row;
    padding: 6rem 0 3rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 4rem 3rem 1rem;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    padding: 4rem 0 1rem;
  }

  @media screen and (max-width: 20rem) {
    padding: 4rem 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  padding: 3rem;

  @media screen and (max-width: 48rem) {
    width: 100%;
    padding: 0 3rem;
  }

  @media screen and (orientation: landscape) and (max-width: 48rem) {
    padding: 3rem;
    width: 50%;
  }

  @media screen and (max-width: 36rem) {
    padding: 0;
  }

  @media screen and (orientation: landscape) and (max-width: 36rem) {
    padding: 3rem;
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: 1rem;

    @media screen and (max-width: 48rem) {
      width: 25px;
      height: 25px;
    }

    @media screen and (max-width: 36rem) {
      width: 18px;
      height: 18px;
    }
  }
`;

const Content = styled.div`
  transform: translateY(50px);
  opacity: 0;
  margin-bottom: 3rem;
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
  margin-bottom: 5rem;
  color: #323d3b;

  @media screen and (max-width: 48rem) {
    text-align: center;
  }

  @media screen and (max-width: 36rem) {
    margin-bottom: 4rem;
  }

  span {
    font-weight: 400;
  }
`;

const Information = ({ firArr, secArr }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      reveal(0.2, [titleRef.current, '#contact-us']);
    }
  }, [intersection]);

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
          <p>EVERYDAY/9AM-7AM</p>
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
