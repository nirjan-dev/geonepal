import React from 'react';
import styled from '@emotion/styled';
import Heading from './heading';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Box } from '@rebass/grid/emotion';
import Container from './container';
import Service from './service';

const ServicesSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
  background-color: ${props => props.theme.colors.greyLight};
`;

function Services() {
  const data = useStaticQuery(graphql`
    {
      allSanityServices {
        nodes {
          title
          _rawDescription
        }
      }
    }
  `);
  return (
    <ServicesSection id="services">
      <Container>
        <Heading>Our Services</Heading>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          {data.allSanityServices.nodes.map(service => {
            return (
              <Box p={[2, 2, 3]} width={[1, 1 / 2, 1 / 4]}>
                <Service>
                  <h4 className="title">{service.title}</h4>
                  {service._rawDescription[0].children[0].text}
                </Service>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </ServicesSection>
  );
}

export default Services;
