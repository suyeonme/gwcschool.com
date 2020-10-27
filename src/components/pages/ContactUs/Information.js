import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntersection } from 'react-use';

import greenIcon from 'assets/icons/green.svg';
import { Container } from 'styles/styles';
import { reveal } from 'animations/animations';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 3rem;
`;

const ContentWrapper = styled.div`
  width: 50%;
  padding: 3rem;

  h2 {
    font-size: 2.5rem;
    line-height: 1.5;
    margin-bottom: 5rem;
    color: #323d3b;

    transform: translateY(50px);
    opacity: 0;

    span {
      font-weight: 400;
    }
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  a {
    font-size: 1.1rem;
    line-height: 2;
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
  }
`;

const Content = styled.div`
  transform: translateY(50px);
  opacity: 0;

  &:not(:last-child) {
    margin-bottom: 3rem;
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
        <h2 ref={titleRef}>
          천혜의 자연환경, <span>곡성 목공예&커피체험관</span>에서 잠시
          쉬어가세요
          <img src={greenIcon} alt="곡성 목공예&커피체험관" />
        </h2>

        {firArr.map((title, i) => (
          <Content key={i} id="contact-us">
            <h3>{title}</h3>
            {content(title)}
          </Content>
        ))}
      </ContentWrapper>

      <ContentWrapper>
        {secArr.map((title, i) => (
          <Content key={i} id="contact-us">
            <h3>{title}</h3>
            {content(title)}
          </Content>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Information;
