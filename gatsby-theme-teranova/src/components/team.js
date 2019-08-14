import React from 'react';
import styled from '@emotion/styled';
import Heading from './heading';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Box } from '@rebass/grid/emotion';
import Container from './container';
import TeamMember from './teamMember';
import Img from 'gatsby-image';

const TeamSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
  background-color: ${props => props.theme.colors.greyLight};
`;

function Team() {
  const data = useStaticQuery(graphql`
    {
      allSanityTeam {
        nodes {
          name
          position
          contact
          photo {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <TeamSection id="team">
      <Container>
        <Heading>Our Team</Heading>
        <Flex flexWrap={['wrap']}>
          {data.allSanityTeam.nodes.map(member => {
            return (
              <Box p={[2, 2, 3]} width={[1, 1 / 2, 1 / 3]}>
                <TeamMember>
                  <Img className="img" fluid={member.photo.asset.fluid} />
                  <h4 className="name">{member.name}</h4>
                  <h5 className="position">{member.position}</h5>
                  <p className="contact">
                    <a href={`mailto:${member.contact}`}>{member.contact}</a>
                  </p>
                </TeamMember>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </TeamSection>
  );
}

export default Team;
