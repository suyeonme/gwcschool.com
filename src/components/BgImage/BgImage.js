import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const Container = styled(BackgroundImage)`
  width: 100%;
  height: auto;
  min-height: ${(props) => props.height};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BgImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });

      if (!image) {
        return null;
      }

      return (
        <Container
          fluid={image.node.childImageSharp.fluid}
          height={props.height}
        />
      );
    }}
  />
);

export default BgImage;
