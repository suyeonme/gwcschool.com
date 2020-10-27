require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: '곡성 목공예&커피체험관',
    description: '곡성 목공예&커피체험관, 바리스타자격시험, 목공예, 바리스타, 체험활동',
    keyword: '곡성 목공예&커피체험관, 곡성 목공예커피체험관, 곡성 오감만족관, 목공예커피체험, 오감만족관, 곡성 바리스타, 곡성 목공예',
    siteUrl: 'http://www.gwcschool.com',
    image: 'assets/images/logo.png',
    author: 'suyeon.dev@gmail.com',
    info: {
      tel: '061-362-0778',
      phone: '010-4173-3062',
      email: 'gwangsu3062@daum.net',
      address: '전라남도 곡성군 죽곡면 오죽로 407-8 (봉정리 264)',
      addressEn: '407-8, Ojuk-ro, Jukgok-myeon, Gokseong-gun, Jeollanam-do, Republic of Korea',
      account: '351-0585-2223-03 (농협, 김광수)',
    }
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://www.gwcschool.com',
        sitemap: 'http://www.gwcschool.com/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/index.html',
          disallow: '/',
        }, ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-165900470-1`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ko',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },
  ],
};