import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const StyledImage = styled(Img)`
  margin: 0.3rem;
  max-width: 100%;
`;

function NavBrand() {
  const data = useStaticQuery(graphql`
    {
      sanitySettings {
        title
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);

  return (
    <AnchorLink href="#intro" style={{ display: 'block' }}>
      <h1
        style={{ fontSize: '0.1px', opacity: 0, position: 'absolute' }}
        aria-hidden="true"
        className="hidden"
      >
        {data.sanitySettings.title}
      </h1>
      <StyledImage
        fluid={data.sanitySettings.logo.asset.fluid}
        alt={data.sanitySettings.title}
      />
    </AnchorLink>
  );
}

export default NavBrand;
