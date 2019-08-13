import React from 'react';
import Heading from './heading';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Box } from '@rebass/grid/emotion';
import Container from './container';
const AboutSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
  .about-content {
    text-align: left;
  }

  .gatsby-image-wrapper {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
`;
function About() {
  const data = useStaticQuery(graphql`
    {
      sanityAbout {
        title
        _rawDescription
        image {
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
    <AboutSection id="about">
      <Container>
        <Heading>{data.sanityAbout.title}</Heading>
        <Flex flexWrap={['wrap', 'nowrap']}>
          <Box m={[2, 3]} width={[1, 1 / 2, 2 / 3]}>
            <div className="about-content">
              <p>{data.sanityAbout._rawDescription[0].children[0].text}</p>
            </div>
          </Box>
          <Box m={[2, 3]} width={[1, 1 / 2, 1 / 3]}>
            <Img fluid={data.sanityAbout.image.asset.fluid} fadeIn={true} />
          </Box>
        </Flex>
      </Container>
    </AboutSection>
  );
}

export default About;
