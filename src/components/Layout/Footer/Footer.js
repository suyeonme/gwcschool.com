import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f3ec;
  width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 65%;
  margin: 0 auto;
  padding: 3rem 0;

  @media screen and (max-width: 64rem) {
    width: 90%;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const TextCol = styled.div`
  width: 280px;

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: 48rem) {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: 20rem) {
    padding: 0 2rem;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 200;
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media screen and (max-width: 36rem) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 1rem;
    }
  }

  p,
  a {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 2px;

    @media screen and (max-width: 36rem) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 20rem) {
      font-size: 0.8rem;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.6rem;
  margin-bottom: 1rem;
  text-align: center;

  span {
    display: block;
  }
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
      <TextWrapper>
        {titles.map((title, i) => (
          <TextCol key={i}>
            <h4>{title}</h4>
            {content(title)}
          </TextCol>
        ))}
      </TextWrapper>
      <Copyright>
        COPYRIGHT &copy; 2020 곡성 목공예&커피체험관.{' '}
        <span>ALL RIGHTS RESERVED.</span>
      </Copyright>
    </Container>
  );
};

export default Footer;
