import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  let currentPath = useLocation();
  let path = '';

  switch (currentPath.pathname) {
    case '/about':
      path = '소개 |';
      break;
    case '/barista':
      path = '바리스타 |';
      break;
    case '/woodcraft':
      path = '목공예 |';
      break;
    case '/facilities':
      path = '편의시설 |';
      break;
    case '/contact-us':
      path = '기타정보 |';
      break;
    default:
      path = '';
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keyword
          description
          siteUrl
          image
          author
        }
      }
    }
  `);

  return (
    <Helmet>
      <meta name="keywords" content={data.site.siteMetadata.keyword} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="곡성 목공예&커피체험관" />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:image" content={data.site.siteMetadata.image} />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}`} />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;900&display=swap"
        rel="stylesheet"
      /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dokdo&family=Montserrat:wght@300;700;900&display=swap"
        rel="stylesheet"
      />
      <title>{`${path} ${data.site.siteMetadata.title}`}</title>
      <script type="application/ld+json">
        {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "http://www.gwcschool.com",
                "name": "곡성 목공예&커피체험관"
              }
            `}
      </script>
    </Helmet>
  );
};

export default SEO;
