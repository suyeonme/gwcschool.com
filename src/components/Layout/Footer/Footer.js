import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import logoIcon from 'assets/images/footer-logo.png';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f3ec;
  width: 100%;
  height: auto;
`;

const ImgWrapper = styled.div`
  width: 7%;
  overflow: hidden;
  padding: 10rem 0;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  transform: translateX(3.5rem);
`;

const TextCol = styled.div`
  max-width: 281px;

  h4 {
    font-size: 1.6rem;
    font-weight: 200;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p,
  a {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 2px;
  }
`;

const Copyright = styled.p`
  font-size: 0.7rem;
  padding-top: 3rem;
  margin-bottom: 1rem;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          info {
            tel
            phone
            email
            address
          }
        }
      }
    }
  `);

  const titles = ['Talk', 'Meet', 'Write'];

  const content = (title) => {
    if (title === 'Talk') {
      return (
        <>
          <a href={`tel:${data.site.siteMetadata.info.tel}`}>
            <p>{data.site.siteMetadata.info.tel}</p>
          </a>
          <a href={`tel:${data.site.siteMetadata.info.phone}`}>
            <p>{data.site.siteMetadata.info.phone}</p>
          </a>
        </>
      );
    } else if (title === 'Write') {
      return (
        <a href={`mailto:${data.site.siteMetadata.info.email}`}>
          {data.site.siteMetadata.info.email}
        </a>
      );
    } else {
      return <p>{data.site.siteMetadata.info.address}</p>;
    }
  };

  return (
    <Container>
      <ImgWrapper>
        <img src={logoIcon} alt="곡성 목공예&커피체험관 로고" />
      </ImgWrapper>
      <TextWrapper>
        {titles.map((title, i) => (
          <TextCol key={i}>
            <h4>{title}</h4>
            {content(title)}
          </TextCol>
        ))}
      </TextWrapper>
      <Copyright>
        COPYRIGHT &copy; 2020 곡성 목공예&커피체험관. ALL RIGHTS RESERVED.
      </Copyright>
    </Container>
  );
};

export default Footer;
