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
  width: 70%;
  margin: 0 auto;
  padding: 6rem 0;

  @media (max-width: 1199.98px) {
    width: 90%;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const TextCol = styled.div`
  width: 280px;

  @media (max-width: 991.98px) {
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 200;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p,
  a {
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 2px;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  span {
    @media (max-width: 567.98px) {
      display: block;
    }
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
        COPYRIGHT &copy; 2020 곡성 목공예&커피체험관.
        <span> ALL RIGHTS RESERVED.</span>
      </Copyright>
    </Container>
  );
};

export default Footer;
